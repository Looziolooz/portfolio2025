// Constants and configuration - I keep all site-wide settings here for easy maintenance

// Color Palette - I use a consistent color scheme throughout the site
export const COLORS = {
  primary: '#D97D55',    // Main brand color - used for headings and accents
  secondary: '#F4E9D7',  // Light background color for sections
  accent: '#B8C4A9',     // Accent color for highlights
  teal: '#6FA4AF',       // Secondary brand color for variety
  white: '#FFFFFF',      // Pure white for backgrounds
  dark: '#2D2D2D',       // Dark text color for good contrast
  gray: '#6B7280',       // Muted text color for secondary content
} as const;

// Navigation menu items - I link these to page sections for smooth scrolling
export const MENUITEMS = [
  { title: 'Tech', path: '#tech-section' },
  { title: 'Featured Projects', path: '#projects-section'},
  { title: 'Dev in Progress', path: '#blog-section' },
  { title: 'Skills', path: '#skills-section' },
  { title: 'Let\'s Talk', path: '#contact-section' },
] as const;

// Hero Section Content - I centralize this content for easy updates
export const HERO_CONTENT = {
  greeting: "Hi, I'm Lorenzo Dastoli",
  title: "Frontend Developer",
  description: "I love building things for the web—especially with React, Next.js, and TypeScript. I care about clean code, smooth user experiences, and learning as I go. Whether it’s solving tricky bugs or exploring new tools, I’m always curious and driven to improve. My goal is to create interfaces that feel good to use and are built to last.",
  profileImage: "/public/profile.png", // I keep this path relative to public folder
};

// Tech Section Content - I list my main technologies here
export const TECH_CONTENT = {
  title: "Tech",
  technologies: [
    "HTML, CSS, Web Accessibility,Tailwind,", // I group related technologies
    "JavaScript, TypeScript, React, React Hooks,", // Frontend frameworks and concepts
    "Next, APIs, GitHub." // Tools and integrations
  ]
};