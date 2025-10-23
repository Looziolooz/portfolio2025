// Color Palette
export const COLORS = {
  primary: '#D97D55',
  secondary: '#F4E9D7',
  accent: '#B8C4A9',
  teal: '#6FA4AF',
  white: '#FFFFFF',
  dark: '#2D2D2D',
  gray: '#6B7280',
} as const;

// Navigation menu items - Linked to page sections
export const MENUITEMS = [
  { title: 'Tech', path: '#tech-section' },
  { title: 'Featured Projects', path: '#projects-section'},
  { title: 'Tech Deep Dive', path: '#blog-section' },
  { title: 'Skills', path: '#skills-section' },
  { title: 'Let\'s Talk', path: '#contact-section' },
];

// Hero Section Content
export const HERO_CONTENT = {
  greeting: "Hi, I'm Lorenzo Dastoli",
  title: "Frontend Developer",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  profileImage: "/images/profile.png",
};

// Tech Section Content
export const TECH_CONTENT = {
  title: "Tech",
  technologies: [
    "HTML, CSS, Tailwind, JavaScript, TypeScript,",
    "React, React Hooks, Next, Web Accessibility,",
    "API:s, GitHub."
  ]
};