#!/usr/bin/env python3
import json
import os
import shutil
import subprocess
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HOST = "127.0.0.1"
PORT = 4174
MAX_CODE_SIZE = 20000
TIMEOUT_SECONDS = 5


class CompilerHandler(BaseHTTPRequestHandler):
    def _send_json(self, status_code, payload):
        response = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(response)))
        self.send_header("Access-Control-Allow-Origin", "http://localhost:4173")
        self.end_headers()
        self.wfile.write(response)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "http://localhost:4173")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.end_headers()

    def do_POST(self):
        if self.path != "/compile":
            self._send_json(404, {"status": "error", "output": "Unknown compiler endpoint."})
            return

        try:
            content_length = int(self.headers.get("Content-Length", "0"))
            if content_length > MAX_CODE_SIZE + 1000:
                raise ValueError("Code is too large.")
            request = json.loads(self.rfile.read(content_length))
            language = request.get("language")
            code = request.get("code", "")
            if language not in {"python", "java", "cpp"}:
                raise ValueError("Unsupported language.")
            if not isinstance(code, str) or not code.strip():
                raise ValueError("Code cannot be empty.")
            if len(code) > MAX_CODE_SIZE:
                raise ValueError("Code is limited to 20,000 characters.")

            result = self.run_code(language, code)
            self._send_json(200, result)
        except (ValueError, json.JSONDecodeError) as error:
            self._send_json(400, {"status": "error", "output": str(error)})
        except Exception as error:
            self._send_json(500, {"status": "error", "output": f"Compiler server error: {error}"})

    @staticmethod
    def run_code(language, code):
        if language == "java" and not shutil.which("javac"):
            return {"status": "error", "output": "Java compiler not found. Install a JDK and make javac available on PATH."}

        with tempfile.TemporaryDirectory(prefix="portfolio-compiler-") as temp_dir:
            work_dir = Path(temp_dir)
            if language == "python":
                source_path = work_dir / "main.py"
                command = ["python3", str(source_path)]
            elif language == "cpp":
                source_path = work_dir / "main.cpp"
                binary_path = work_dir / "main"
                command = [str(binary_path)]
            else:
                source_path = work_dir / "Main.java"
                command = ["java", "-cp", str(work_dir), "Main"]

            source_path.write_text(code, encoding="utf-8")

            try:
                if language == "cpp":
                    compile_result = subprocess.run(
                        ["g++", str(source_path), "-std=c++17", "-O2", "-o", str(binary_path)],
                        cwd=work_dir,
                        capture_output=True,
                        text=True,
                        timeout=TIMEOUT_SECONDS,
                    )
                    if compile_result.returncode != 0:
                        return {"status": "error", "output": compile_result.stderr or compile_result.stdout}
                elif language == "java":
                    compile_result = subprocess.run(
                        ["javac", str(source_path)],
                        cwd=work_dir,
                        capture_output=True,
                        text=True,
                        timeout=TIMEOUT_SECONDS,
                    )
                    if compile_result.returncode != 0:
                        return {"status": "error", "output": compile_result.stderr or compile_result.stdout}

                run_result = subprocess.run(
                    command,
                    cwd=work_dir,
                    capture_output=True,
                    text=True,
                    timeout=TIMEOUT_SECONDS,
                )
                output = run_result.stdout or run_result.stderr or "Program finished without output."
                return {"status": "success" if run_result.returncode == 0 else "error", "output": output}
            except subprocess.TimeoutExpired:
                return {"status": "error", "output": "Execution timed out after 5 seconds."}

    def log_message(self, format_string, *args):
        return


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), CompilerHandler)
    print(f"Compiler server listening at http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
