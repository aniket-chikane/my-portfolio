const { useEffect, useState } = React;

const projects = [
  {
    title: 'Cyberbullying Detection Using Machine Learning',
    description: 'A team project that detects offensive words in comments on Twitter using JSP, HTML, CSS, Java, JavaScript, and MySQL.',
    stack: ['JSP', 'Java', 'MySQL', 'ML'],
    role: 'Team project',
    highlights: ['Comment analysis', 'Offensive-word detection'],
    repo: 'https://github.com/aniket-chikane/cyberbullying-detection'
  },
  {
    title: 'Sport Registration System',
    description: 'A college student registration platform for sports teams built with HTML, CSS, JavaScript, PHP, and MySQL.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    role: 'Full-stack project',
    highlights: ['Student registration', 'Team management'],
    repo: 'https://github.com/aniket-chikane/sport-reg'
  },
  {
    title: 'Library Management System',
    description: 'A Java and MySQL-based system for managing library records with distinct logins for students, admins, and librarians.',
    stack: ['Java', 'MySQL', 'XAMPP'],
    role: 'Backend project',
    highlights: ['Role-based access', 'Library records'],
    repo: 'https://github.com/aniket-chikane/Library-Management-System'
  },
  {
    title: 'ATM Simulator with GUI',
    description: 'A Java-based ATM simulation with login-based operations for withdrawals, deposits, and balance inquiries.',
    stack: ['Java', 'GUI'],
    role: 'Java project',
    highlights: ['Secure login flow', 'ATM transactions'],
    repo: 'https://github.com/aniket-chikane/AtmGui'
  }
];

const skillGroups = [
  { title: 'Backend', items: ['Java', 'Spring', 'Spring Boot', 'Hibernate', 'JDBC', 'JSF'] },
  { title: 'APIs and finance', items: ['REST APIs', 'SOAP', 'ISO8583', 'ATM/POS processing'] },
  { title: 'IBM i and databases', items: ['RPGLE', 'CL', 'AS400', 'DB2', 'SQL', 'MySQL', 'MS SQL'] },
  { title: 'Tools and delivery', items: ['Git', 'Jira', 'Confluence', 'Power BI'] }
];

const certifications = [
  {
    title: 'Full Stack Development Certification',
    issuer: 'Yess Infotech, Pune',
    detail: 'Java applications, web development, and database integration.'
  }
];

const experiences = [
  {
    title: 'Java Developer Trainee',
    company: 'Euronet India GDC Pune',
    period: 'Jan 2025 – Present',
    details: [
      'Developing and optimizing modules for core banking systems focused on ATM/POS transaction processing and card lifecycle management.',
      'Working with ISO8583 standards for secure and efficient transaction routing across Debit, Credit, and Prepaid card systems.',
      'Designing RESTful APIs and SOAP web services to improve system interoperability and backend stability.'
    ]
  },
  {
    title: 'Full Stack Development Certification',
    company: 'Yess Infotech, Pune',
    period: 'Certification',
    details: [
      'Strengthened foundation in web development, Java-based applications, and database integration.',
      'Built practical experience in modern development workflows and full-stack problem solving.'
    ]
  }
];

const CONTACT_EMAIL = 'Aniketchikane007@gmail.com';
const emailLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Portfolio enquiry')}&body=${encodeURIComponent('Hi Aniket,\n\nI would like to get in touch with you about ')}`;

const contactItems = [
  { icon: '📍', text: 'Pune, MH • Open to relocation' },
  { icon: '📧', text: CONTACT_EMAIL, href: emailLink },
  { icon: '📱', text: '+91 9067103965 (WhatsApp)', href: 'https://wa.me/919067103965' }
];

const profiles = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aniket-chikane-aa6932203/', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
  { name: 'GitHub', url: 'https://github.com/aniket-chikane?tab=repositories', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/aniketc90', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'LeetCode', url: 'https://leetcode.com/aniketchikane', icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' }
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'compiler', label: 'Compiler' },
  { id: 'contact', label: 'Contact' },
  { id: 'game', label: 'Game' },
  { id: 'relax', label: 'Relax' }
];

const githubUrl = 'https://github.com/aniket-chikane?tab=repositories';
const COMPILER_API = 'http://localhost:4174/compile';
const compilerLanguages = {
  python: {
    label: 'Python',
    version: '3.10.0',
    starter: 'print("Hello from Python!")\n'
  },
  java: {
    label: 'Java',
    version: '15.0.2',
    starter: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello from Java!");\n  }\n}\n'
  },
  cpp: {
    label: 'C++',
    version: '10.2.0',
    starter: '#include <iostream>\n\nint main() {\n  std::cout << "Hello from C++!" << std::endl;\n  return 0;\n}\n'
  }
};

const GAME_SIZE = 20;

const createBubble = (id) => ({
  id,
  x: 10 + Math.random() * 80,
  y: 10 + Math.random() * 80,
  size: 70 + Math.floor(Math.random() * 90),
  hue: 180 + Math.floor(Math.random() * 140),
  opacity: 0.82 + Math.random() * 0.16,
  speed: 1.8 + Math.random() * 1.6,
  driftX: (Math.random() > 0.5 ? 1 : -1) * (0.8 + Math.random() * 1.2),
  driftY: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random() * 0.8)
});

const createBubbleSet = (count = 14) => Array.from({ length: count }, (_, index) => createBubble(`${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`));

const GAME_MODES = {
  classic: { label: 'Classic', description: 'Normal walls and a clean run.' },
  wrap: { label: 'Wrap', description: 'The snake wraps through the edges.' },
  maze: { label: 'Maze', description: 'Avoid static obstacles to survive.' }
};

const createObstacles = (mode) => {
  if (mode !== 'maze') return [];
  return [
    { x: 4, y: 4 },
    { x: 4, y: 15 },
    { x: 15, y: 4 },
    { x: 15, y: 15 },
    { x: 8, y: 8 },
    { x: 8, y: 11 },
    { x: 11, y: 8 },
    { x: 11, y: 11 }
  ];
};

const themeSnakePalette = {
  aurora: { body: '#7ef0a4', head: '#2ddc7a', glow: 'rgba(110, 231, 210, 0.45)' },
  sunset: { body: '#ffb27f', head: '#ff7b4d', glow: 'rgba(255, 159, 122, 0.45)' },
  ocean: { body: '#7bdcff', head: '#3da4ff', glow: 'rgba(101, 199, 255, 0.45)' },
  lavender: { body: '#d7b3ff', head: '#a46dff', glow: 'rgba(197, 155, 255, 0.45)' },
  emerald: { body: '#8df4bd', head: '#18c97f', glow: 'rgba(77, 226, 163, 0.45)' },
  rose: { body: '#ffa8bb', head: '#ff6485', glow: 'rgba(255, 138, 160, 0.45)' },
  spiderman: { body: '#ff5b5b', head: '#e11d48', glow: 'rgba(255, 91, 91, 0.45)' },
  hulk: { body: '#7dff8b', head: '#2fbf4b', glow: 'rgba(125, 255, 139, 0.45)' },
  thor: { body: '#ffe27a', head: '#f59e0b', glow: 'rgba(255, 226, 122, 0.45)' },
  venom: { body: '#8b5cf6', head: '#6d28d9', glow: 'rgba(139, 92, 246, 0.45)' }
};

const achievementMessages = {
  1: { title: 'First byte', text: 'The matrix wakes up.' },
  3: { title: 'Combo burst', text: 'The code starts flowing.' },
  5: { title: 'Neon surge', text: 'The grid is glowing.' },
  8: { title: 'Velocity spike', text: 'The snake is in sync.' },
  10: { title: 'Matrix master', text: 'Your run is legendary.' },
  15: { title: 'Legend unlocked', text: 'The system bends to you.' },
  20: { title: 'Infinite loop', text: 'You have conquered the grid.' }
};

const getRandomFood = (snake, obstacles = []) => {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GAME_SIZE),
      y: Math.floor(Math.random() * GAME_SIZE)
    };
  } while (
    snake.some((segment) => segment.x === food.x && segment.y === food.y) ||
    obstacles.some((segment) => segment.x === food.x && segment.y === food.y)
  );
  return food;
};

const createInitialGameState = (mode = 'classic') => {
  const initialSnake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 }
  ];
  const obstacles = createObstacles(mode);

  return {
    snake: initialSnake,
    displaySnake: initialSnake,
    direction: { x: 1, y: 0 },
    pendingDirection: null,
    food: getRandomFood(initialSnake, obstacles),
    score: 0,
    running: false,
    gameOver: false,
    foodSize: 1,
    animation: null,
    mode,
    obstacles
  };
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('aurora');
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [gameState, setGameState] = useState(() => createInitialGameState('classic'));
  const [gameSpeed, setGameSpeed] = useState(6);
  const [achievement, setAchievement] = useState(null);
  const [gameMode, setGameMode] = useState('classic');
  const [bubbleState, setBubbleState] = useState(() => createBubbleSet(14));
  const [bubbleScore, setBubbleScore] = useState(0);
  const [bubbleSpeed, setBubbleSpeed] = useState(5);
  const [touchStart, setTouchStart] = useState(null);
  const [compilerLanguage, setCompilerLanguage] = useState('python');
  const [compilerCode, setCompilerCode] = useState(compilerLanguages.python.starter);
  const [compilerOutput, setCompilerOutput] = useState('Run your code to see the output here.');
  const [compilerStatus, setCompilerStatus] = useState('idle');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme') || 'aurora';
    setTheme(savedTheme);
    document.body.classList.remove('theme-aurora', 'theme-sunset', 'theme-ocean', 'theme-lavender', 'theme-emerald', 'theme-rose', 'theme-spiderman', 'theme-hulk', 'theme-thor', 'theme-venom');
    document.body.classList.add(`theme-${savedTheme}`);
  }, []);

  useEffect(() => {
    const activeTheme = hoveredTheme || theme;
    document.body.classList.remove('theme-aurora', 'theme-sunset', 'theme-ocean', 'theme-lavender', 'theme-emerald', 'theme-rose', 'theme-spiderman', 'theme-hulk', 'theme-thor', 'theme-venom');
    document.body.classList.add(`theme-${activeTheme}`);
  }, [theme, hoveredTheme]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!achievement) return;
    const timer = window.setTimeout(() => setAchievement(null), 1400);
    return () => window.clearTimeout(timer);
  }, [achievement]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (navItems.some((item) => item.id === hash)) {
      setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    if (!gameState.running) return;

    const moveInterval = Math.max(70, 220 - gameSpeed * 20);
    const interval = window.setInterval(() => {
      setGameState((prev) => {
        if (prev.animation || prev.gameOver) {
          return prev;
        }

        const movementDirection = prev.pendingDirection || prev.direction;

        let nextHead = {
          x: prev.snake[0].x + movementDirection.x,
          y: prev.snake[0].y + movementDirection.y
        };

        const isOutOfBounds = nextHead.x < 0 || nextHead.x >= GAME_SIZE || nextHead.y < 0 || nextHead.y >= GAME_SIZE;

        if (prev.mode === 'wrap' && isOutOfBounds) {
          nextHead = {
            x: (nextHead.x + GAME_SIZE) % GAME_SIZE,
            y: (nextHead.y + GAME_SIZE) % GAME_SIZE
          };
        }

        if (prev.mode !== 'wrap' && isOutOfBounds) {
          return { ...prev, running: false, gameOver: true, pendingDirection: null };
        }

        const hitObstacle = prev.obstacles.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);
        const hitSelf = prev.snake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

        if (hitObstacle || hitSelf) {
          return { ...prev, running: false, gameOver: true, pendingDirection: null };
        }

        const newSnake = [nextHead, ...prev.snake];
        const ateFood = nextHead.x === prev.food.x && nextHead.y === prev.food.y;

        if (!ateFood) {
          newSnake.pop();
        }

        const nextScore = ateFood ? prev.score + 1 : prev.score;
        const nextAchievement = ateFood ? achievementMessages[nextScore] || null : null;

        return {
          ...prev,
          snake: newSnake,
          food: ateFood ? getRandomFood(newSnake, prev.obstacles) : prev.food,
          score: nextScore,
          running: true,
          gameOver: false,
          direction: movementDirection,
          pendingDirection: null,
          foodSize: ateFood ? (prev.foodSize === 1 ? 2 : 1) : prev.foodSize,
          animation: {
            fromSnake: prev.displaySnake,
            toSnake: newSnake,
            duration: 120
          }
        };
      });
    }, moveInterval);

    return () => window.clearInterval(interval);
  }, [gameState.running, gameSpeed]);

  useEffect(() => {
    if (!gameState.animation) return;

    let rafId;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min(1, (time - startTime) / gameState.animation.duration);

      setGameState((prev) => {
        if (!prev.animation) return prev;

        const nextDisplaySnake = prev.animation.fromSnake.map((segment, index) => {
          const target = prev.animation.toSnake[index];
          if (!target) return segment;

          return {
            x: segment.x + (target.x - segment.x) * progress,
            y: segment.y + (target.y - segment.y) * progress
          };
        });

        if (progress < 1) {
          return {
            ...prev,
            displaySnake: nextDisplaySnake
          };
        }

        return {
          ...prev,
          displaySnake: prev.animation.toSnake,
          snake: prev.animation.toSnake,
          animation: null
        };
      });

      if (progress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [gameState.animation]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const directionMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 }
      };

      if (directionMap[event.key]) {
        event.preventDefault();
        setGameState((prev) => {
          const nextDirection = directionMap[event.key];
          if (
            prev.snake.length > 1 &&
            prev.direction.x === -nextDirection.x &&
            prev.direction.y === -nextDirection.y
          ) {
            return prev;
          }
          return { ...prev, pendingDirection: nextDirection };
        });
        return;
      }

      if (event.key === ' ') {
        event.preventDefault();
        setGameState((prev) => {
          if (prev.gameOver) {
            return { ...createInitialGameState(gameMode), running: true };
          }
          return { ...prev, running: !prev.running };
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    window.history.pushState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderName = formData.get('name');
    const senderEmail = formData.get('email');
    const subject = formData.get('subject') || 'Portfolio enquiry';
    const message = formData.get('message');
    const body = `Hi Aniket,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCompilerLanguageChange = (event) => {
    const language = event.target.value;
    setCompilerLanguage(language);
    setCompilerCode(compilerLanguages[language].starter);
    setCompilerOutput('Run your code to see the output here.');
    setCompilerStatus('idle');
  };

  const runCompiler = async () => {
    setCompilerStatus('running');
    setCompilerOutput('Compiling and running...');

    try {
      const response = await fetch(COMPILER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: compilerLanguage,
          code: compilerCode
        })
      });

      if (!response.ok) {
        throw new Error(`Compiler service returned ${response.status}.`);
      }

      const result = await response.json();
      setCompilerOutput(result.output || 'Program finished without output.');
      setCompilerStatus(result.status === 'success' ? 'success' : 'error');
    } catch (error) {
      setCompilerOutput('Compiler server is not running. Start compiler_server.py, then try again.');
      setCompilerStatus('error');
    }
  };

  const activeSnakePalette = themeSnakePalette[theme] || themeSnakePalette.aurora;
  const activeMode = GAME_MODES[gameMode] || GAME_MODES.classic;

  const handleDirectionChange = (direction) => {
    setGameState((prev) => {
      if (
        prev.snake.length > 1 &&
        prev.direction.x === -direction.x &&
        prev.direction.y === -direction.y
      ) {
        return prev;
      }
      return { ...prev, pendingDirection: direction };
    });
  };

  const toggleGame = () => {
    setGameState((prev) => {
      if (prev.gameOver) {
        return { ...createInitialGameState(gameMode), running: true };
      }
      return { ...prev, running: !prev.running };
    });
  };

  const resetGame = () => {
    setGameState(createInitialGameState(gameMode));
    setAchievement(null);
  };

  const handleModeChange = (mode) => {
    setGameMode(mode);
    setGameState(createInitialGameState(mode));
    setAchievement(null);
  };

  const handleSpeedChange = (event) => {
    setGameSpeed(Number(event.target.value));
  };

  const popBubble = (id) => {
    setBubbleState((prev) => {
      const remaining = prev.filter((bubble) => bubble.id !== id);
      if (remaining.length < 14) {
        remaining.push(createBubble(`${Date.now()}-${Math.random().toString(36).slice(2, 8)}`));
      }
      return remaining;
    });
    setBubbleScore((prev) => prev + 1);
  };

  const resetBubbleGame = () => {
    setBubbleState(createBubbleSet(14));
    setBubbleScore(0);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (event) => {
    if (!touchStart) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    if (Math.abs(deltaX) < 24 && Math.abs(deltaY) < 24) {
      setTouchStart(null);
      return;
    }

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      handleDirectionChange(deltaX > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 });
    } else {
      handleDirectionChange(deltaY > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 });
    }

    setTouchStart(null);
  };

  useEffect(() => {
    if (activeSection !== 'relax') return;

    const interval = window.setInterval(() => {
      setBubbleState((prev) => prev.map((bubble) => {
        const scale = bubbleSpeed / 5;
        let nextX = bubble.x + bubble.driftX * scale;
        let nextY = bubble.y + bubble.driftY * scale;

        if (nextX <= 8 || nextX >= 92) {
          nextX = Math.min(92, Math.max(8, nextX));
          bubble.driftX *= -1;
        }

        if (nextY <= 8 || nextY >= 92) {
          nextY = Math.min(92, Math.max(8, nextY));
          bubble.driftY *= -1;
        }

        return { ...bubble, x: nextX, y: nextY };
      }));
    }, 40);

    return () => window.clearInterval(interval);
  }, [activeSection, bubbleSpeed]);

  return (
    <div className="page">
      <header className="navbar">
        <div className="container">
          <a className="brand" href="#home">Aniket Balu Chikane</a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="portfolio-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true">☰</span>
          </button>
          <nav id="portfolio-navigation" className={`nav-links${menuOpen ? ' open' : ''}`}>
            <div className="tab-nav" role="tablist" aria-label="Portfolio sections">
              {navItems.map((item) => (
                <button
                  className={`tab-button${activeSection === item.id ? ' active' : ''}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  role="tab"
                  aria-selected={activeSection === item.id}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="theme-panel" aria-label="Theme selector">
          <div>
            <p className="theme-label">Choose a vibe</p>
            <h3>Personalize your portfolio</h3>
          </div>
          <div className="theme-switcher" aria-label="Theme switcher">
            {['aurora', 'sunset', 'ocean', 'lavender', 'emerald', 'rose', 'spiderman', 'hulk', 'thor', 'venom'].map((option) => {
              const label = option === 'aurora' ? 'Aurora' : option === 'sunset' ? 'Sunset' : option === 'ocean' ? 'Ocean' : option === 'lavender' ? 'Lavender' : option === 'emerald' ? 'Emerald' : option === 'rose' ? 'Rose' : option === 'spiderman' ? 'Spider-Man' : option === 'hulk' ? 'Hulk' : option === 'thor' ? 'Thor' : 'Venom';
              const description = option === 'aurora' ? 'Cool and futuristic' : option === 'sunset' ? 'Warm and energetic' : option === 'ocean' ? 'Calm and modern' : option === 'lavender' ? 'Soft and elegant' : option === 'emerald' ? 'Fresh and vibrant' : option === 'rose' ? 'Romantic and bold' : option === 'spiderman' ? 'Web-slinging energy' : option === 'hulk' ? 'Big, bold, and unstoppable' : option === 'thor' ? 'Storm-powered and heroic' : 'Dark and sleek';
              const icon = option === 'aurora' ? '🌌' : option === 'sunset' ? '🌅' : option === 'ocean' ? '🌊' : option === 'lavender' ? '🌸' : option === 'emerald' ? '🌿' : option === 'rose' ? '🌹' : option === 'spiderman' ? '🕷️' : option === 'hulk' ? '💥' : option === 'thor' ? '⚡' : '🕶️';
              const isActive = theme === option;
              const isPreview = hoveredTheme === option;

              return (
                <button
                  key={option}
                  className={`theme-btn${isActive ? ' active' : ''}${isPreview ? ' preview' : ''}`}
                  onClick={() => {
                    setTheme(option);
                    setHoveredTheme(null);
                  }}
                  onMouseEnter={() => setHoveredTheme(option)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  type="button"
                  title={label}
                >
                  <span className="theme-icon">{icon}</span>
                  <span className="theme-label-text">{label}</span>
                  {isPreview && <span className="theme-preview-info">{description}</span>}
                </button>
              );
            })}
          </div>
        </section>

        <div className="tab-content">
          {activeSection === 'home' && (
            <section id="home" className="hero">
              <div>
                <span className="eyebrow">✦ Java & IBM i Developer | Euronet GDC Pune</span>
                <h1>Building secure banking solutions with Java, IBM i, REST APIs, SOAP, and ISO8583.</h1>
                <p>
                  I’m Aniket Balu Chikane, a Computer Engineering graduate from Amrutvahini College of Engineering.
                  My work focuses on core banking systems, ATM and POS transaction processing, card systems, and backend integrations across modern Java and IBM i platforms.
                </p>
                <div className="actions">
                  <button className="button" type="button" onClick={() => handleNavClick('projects')}>View projects</button>
                  <button className="button secondary" type="button" onClick={() => handleNavClick('contact')}>Contact me</button>
                  <a className="button secondary" href="Aniket-Chikane-Resume.txt" download>Download resume</a>
                </div>
              </div>

              <div className="hero-card">
                <h3>Quick overview</h3>
                <p>Focused on financial technology, backend reliability, and continuous growth in enterprise systems.</p>
                <div className="stat-grid">
                  <div className="stat">
                    <strong>BE</strong>
                    <span>Computer Engineering</span>
                  </div>
                  <div className="stat">
                    <strong>IBM i</strong>
                    <span>AS/400 and RPGLE</span>
                  </div>
                  <div className="stat">
                    <strong>Java + APIs</strong>
                    <span>REST, SOAP, ISO8583</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'about' && (
            <section id="about" className="section">
              <h2>About me</h2>
              <p>
                Specialized Java and IBM i developer with experience in core banking systems, financial transaction processing, and backend optimization.
                I work with ATM/POS flows, card systems, and secure financial messaging using ISO8583 while also contributing to REST and SOAP integrations in Agile environments.
              </p>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="chip-list">
                      {group.items.map((skill) => (
                        <span className="chip" key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="section">
                <h2>Experience</h2>
                <div className="project-grid">
                  {experiences.map((item) => (
                    <article className="card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p><strong>{item.company}</strong></p>
                      <p>{item.period}</p>
                      <ul>
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section">
                <h2>Certifications</h2>
                <div className="project-grid">
                  {certifications.map((item) => (
                    <article className="card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p><strong>{item.issuer}</strong></p>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === 'projects' && (
            <section id="projects" className="section">
              <h2>Projects</h2>
              <div className="project-grid">
                {projects.map((project) => (
                  <article className="card" key={project.title}>
                    <h3>{project.title}</h3>
                    <p className="project-role">{project.role}</p>
                    <p>{project.description}</p>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <ul>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                      View on GitHub ↗
                    </a>
                  </article>
                ))}
              </div>
              <div className="projects-footer">
                <a className="button secondary" href={githubUrl} target="_blank" rel="noreferrer">See all GitHub repositories</a>
              </div>
            </section>
          )}

          {activeSection === 'compiler' && (
            <section id="compiler" className="section">
              <div className="panel compiler-panel">
                <div className="compiler-header">
                  <div>
                    <h2>Code compiler</h2>
                    <p>Write a small program and run it in Python, Java, or C++.</p>
                  </div>
                  <span className={`compiler-status ${compilerStatus}`} role="status">
                    {compilerStatus === 'running' ? 'Running' : compilerStatus === 'success' ? 'Finished' : compilerStatus === 'error' ? 'Error' : 'Ready'}
                  </span>
                </div>

                <div className="compiler-toolbar">
                  <label htmlFor="compiler-language">Language</label>
                  <select id="compiler-language" value={compilerLanguage} onChange={handleCompilerLanguageChange}>
                    {Object.entries(compilerLanguages).map(([language, details]) => (
                      <option key={language} value={language}>{details.label}</option>
                    ))}
                  </select>
                  <button className="button" type="button" onClick={runCompiler} disabled={compilerStatus === 'running'}>
                    {compilerStatus === 'running' ? 'Running...' : 'Run code'}
                  </button>
                  <button
                    className="button secondary"
                    type="button"
                    onClick={() => setCompilerCode(compilerLanguages[compilerLanguage].starter)}
                  >
                    Reset code
                  </button>
                </div>

                <div className="compiler-workspace">
                  <div className="compiler-editor">
                    <label htmlFor="compiler-code">Source code</label>
                    <textarea
                      id="compiler-code"
                      value={compilerCode}
                      onChange={(event) => setCompilerCode(event.target.value)}
                      spellCheck="false"
                      aria-describedby="compiler-note"
                    />
                  </div>
                  <div className="compiler-output-panel">
                    <span className="compiler-output-label">Output</span>
                    <pre aria-live="polite" className={`compiler-output ${compilerStatus}`}>{compilerOutput}</pre>
                  </div>
                </div>
                <p id="compiler-note" className="compiler-note">Start <code>python3 compiler_server.py</code> locally before running code. Never enter passwords, API keys, or private data into a code runner.</p>
              </div>
            </section>
          )}

          {activeSection === 'contact' && (
            <section id="contact" className="section">
              <div className="panel contact-panel">
                <div>
                  <h2>Contact information</h2>
                  <p>Let’s connect for opportunities, collaborations, or exciting projects.</p>
                  <div className="contact-list">
                    {contactItems.map((item) => (
                      item.href ? (
                        <a className="contact-item" key={item.text} href={item.href}>
                          <span className="contact-icon">{item.icon}</span>
                          <span>{item.text}</span>
                        </a>
                      ) : (
                        <div className="contact-item" key={item.text}>
                          <span className="contact-icon">{item.icon}</span>
                          <span>{item.text}</span>
                        </div>
                      )
                    ))}
                  </div>
                  <a className="button" href={emailLink}>Send me an email</a>
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <h3>Send a message</h3>
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" required />
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" required />
                    <label htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" name="subject" type="text" required />
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" rows="5" required />
                    <button className="button" type="submit">Open email draft</button>
                  </form>
                  <div className="profile-links">
                    {profiles.map((profile) => (
                      <a className="profile-link" key={profile.name} href={profile.url} target="_blank" rel="noreferrer">
                        <img src={profile.icon} alt={profile.name} />
                        <span>{profile.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'game' && (
            <section id="game" className="section">
              <div className="panel game-panel">
                <div className="game-header">
                  <div>
                    <h2>Snake Game</h2>
                    <p>Enjoy a quick round of snake while exploring the portfolio.</p>
                  </div>
                  <div className="game-stats">
                    <div className="game-chip">Score: {gameState.score}</div>
                    <div className="game-chip">{gameState.gameOver ? 'Game over' : gameState.running ? 'Playing' : 'Ready'}</div>
                  </div>
                </div>

                <div className="game-mode-selector" role="tablist" aria-label="Game modes">
                  {Object.entries(GAME_MODES).map(([modeKey, modeInfo]) => (
                    <button
                      key={modeKey}
                      className={`mode-btn${gameMode === modeKey ? ' active' : ''}`}
                      type="button"
                      onClick={() => handleModeChange(modeKey)}
                    >
                      <span>{modeInfo.label}</span>
                    </button>
                  ))}
                </div>

                <div className="game-mode-summary">
                  <strong>{activeMode.label}</strong>
                  <span>{activeMode.description}</span>
                </div>

                <div
                  className="game-board"
                  role="img"
                  aria-label="Snake game board"
                  onTouchStart={handleTouchStart}
                  onTouchMove={(event) => event.preventDefault()}
                  onTouchEnd={handleTouchEnd}
                >
                  {achievement && (
                    <div className="achievement-toast">
                      <span className="achievement-title">{achievement.title}</span>
                      <span className="achievement-text">{achievement.text}</span>
                    </div>
                  )}
                  <div className="game-grid">
                    {Array.from({ length: GAME_SIZE * GAME_SIZE }).map((_, index) => {
                      const x = index % GAME_SIZE;
                      const y = Math.floor(index / GAME_SIZE);
                      return <div key={`${x}-${y}`} className="game-cell" />;
                    })}
                  </div>

                  <div className="game-overlay">
                    {gameState.obstacles.map((segment, index) => {
                      const cellPercent = 100 / GAME_SIZE;
                      return (
                        <div
                          key={`obstacle-${index}`}
                          className="game-obstacle"
                          style={{
                            left: `${(segment.x + 0.5) * cellPercent}%`,
                            top: `${(segment.y + 0.5) * cellPercent}%`
                          }}
                        />
                      );
                    })}

                    {gameState.displaySnake.map((segment, index) => {
                      const cellPercent = 100 / GAME_SIZE;
                      return (
                        <div
                          key={`segment-${index}`}
                          className={`snake-segment${index === 0 ? ' head' : ''}`}
                          style={{
                            left: `${(segment.x + 0.5) * cellPercent}%`,
                            top: `${(segment.y + 0.5) * cellPercent}%`,
                            background: `linear-gradient(135deg, ${index === 0 ? activeSnakePalette.head : activeSnakePalette.body}, ${index === 0 ? activeSnakePalette.body : activeSnakePalette.head})`,
                            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 10px ${activeSnakePalette.glow}`
                          }}
                        />
                      );
                    })}

                    <div
                      className="game-food"
                      style={{
                        left: `${(gameState.food.x + 0.5) * (100 / GAME_SIZE)}%`,
                        top: `${(gameState.food.y + 0.5) * (100 / GAME_SIZE)}%`,
                        transform: `translate(-50%, -50%) scale(${gameState.foodSize})`
                      }}
                    />
                  </div>
                </div>

                <div className="game-controls">
                  <button className="button" type="button" onClick={toggleGame}>
                    {gameState.gameOver ? 'Restart' : gameState.running ? 'Pause' : 'Start'}
                  </button>
                  <button className="button secondary" type="button" onClick={resetGame}>Reset</button>
                </div>

                <div className="speed-control">
                  <label htmlFor="snake-speed">Speed: {gameSpeed <= 3 ? 'Slow' : gameSpeed <= 6 ? 'Medium' : 'Fast'}</label>
                  <input id="snake-speed" type="range" min="1" max="10" step="1" value={gameSpeed} onChange={handleSpeedChange} />
                </div>

                <div className="game-dpad">
                  <button className="game-direction" type="button" onClick={() => handleDirectionChange({ x: 0, y: -1 })}>↑</button>
                  <button className="game-direction" type="button" onClick={() => handleDirectionChange({ x: 1, y: 0 })}>→</button>
                  <button className="game-direction" type="button" onClick={() => handleDirectionChange({ x: 0, y: 1 })}>↓</button>
                  <button className="game-direction" type="button" onClick={() => handleDirectionChange({ x: -1, y: 0 })}>←</button>
                </div>

                <p className="game-help">Use arrow keys or the on-screen buttons to move.</p>
              </div>
            </section>
          )}

          {activeSection === 'relax' && (
            <section id="relax" className="section">
              <div className="panel bubble-panel full-screen-bubble-panel">
                <div className="bubble-header">
                  <div>
                    <h2>Bubble Pop</h2>
                    <p>Tap the floating bubbles to release the tension and clear your mind.</p>
                  </div>
                  <div className="game-stats">
                    <div className="game-chip">Bubbles popped: {bubbleScore}</div>
                  </div>
                </div>

                <div className="bubble-board" role="img" aria-label="Bubble popping game">
                  {bubbleState.map((bubble) => (
                    <button
                      key={bubble.id}
                      type="button"
                      className="bubble"
                      onClick={() => popBubble(bubble.id)}
                      style={{
                        left: `${bubble.x}%`,
                        top: `${bubble.y}%`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        opacity: bubble.opacity,
                        animationDuration: `${bubble.speed}s`,
                        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.98), hsla(${bubble.hue}, 90%, 72%, 0.95) 38%, hsla(${bubble.hue}, 78%, 56%, 0.92) 100%)`
                      }}
                    >
                      <span className="sr-only">Pop bubble</span>
                    </button>
                  ))}
                </div>

                <div className="game-controls" style={{ marginTop: '0.9rem' }}>
                  <button className="button secondary" type="button" onClick={resetBubbleGame}>Reset bubbles</button>
                  <label className="bubble-speed-control">
                    <span>Bubble speed</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={bubbleSpeed}
                      onChange={(event) => setBubbleSpeed(Number(event.target.value))}
                    />
                  </label>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Aniket Balu Chikane</div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
