export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SkillsData {
  mobile: SkillCategory[];
  tablet: SkillCategory[];
  desktop: SkillCategory[];
  largeDesktop: SkillCategory[];
}

export const skillsData: SkillsData = {
  mobile: [
    {
      title: 'Code',
      items: ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Styled Components', 'GitHub']
    },
    {
      title: 'Toolbox',
      items: ['Atom', 'Postman', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Keynote', 'Slack']
    },
    {
      title: 'Upcoming',
      items: ['Node.js']
    },
    {
      title: 'More',
      items: ['Design Lead', 'Branding', 'Strategy', 'Process design', 'Concept development', 'Agile methodology', 'Hyper Island toolbox']
    }
  ],
  tablet: [
    {
      title: 'Code',
      items: ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Styled Components', 'GitHub']
    },
    {
      title: 'Toolbox',
      items: ['Atom', 'Postman', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Keynote', 'Slack']
    },
    {
      title: 'Upcoming',
      items: ['Node.js']
    },
    {
      title: 'More',
      items: ['Design Lead', 'Branding', 'Strategy', 'Process design', 'Concept development', 'Agile methodology', 'Hyper Island toolbox']
    }
  ],
  desktop: [
    {
      title: 'Code',
      items: ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Styled Components', 'GitHub']
    },
    {
      title: 'Toolbox',
      items: ['Atom', 'Postman', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Keynote', 'Slack']
    },
    {
      title: 'Upcoming',
      items: ['Node.js', 'Mote', 'Design Lead', 'Branding', 'Strategy', 'Process design', 'Concept development', 'Agile methodology', 'Hyper island toolbox']
    }
  ],
  largeDesktop: [
    {
      title: 'Code',
      items: ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Next.js', 'TypeScript']
    },
    {
      title: 'Toolbox',
      items: ['Postman', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Slack', 'GitHub']
    },
    {
      title: 'Upcoming',
      items: ['WooCommerce', 'Shopify', 'Wordpress', 'Agile methodology']
    },
    {
      title: 'More',
      items: ['Branding', 'Strategy', 'Process design', 'Concept development',]
    }
  ]
};