import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: frontend,
  },
  {
    title: 'Contributor',
    icon: backend,
  },
  {
    title: 'Educator',
    icon: ux,
  },
  {
    title: 'Life Enthusiast',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Yandex Practicum Apprenticeship',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2021 - Apr 2024',
  },
  {
    title: 'Contributor (Volunteer)',
    company_name: 'Doca',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jun 2023 - May 2024',
  },
  {
    title: 'Student Succeess Coordinator - Design Faculty',
    company_name: 'Sreda Obuchenia',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2020 - Oct 2022',
  },
  {
    title: 'Academic Development Manager',
    company_name: 'London Gates Education Group',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2020 - Feb 2021',
  },
  {
    title: 'IT Project Manager',
    company_name: 'Meet For Charity',
    icon: dcc,
    iconBg: '#333333',
    date: 'Feb 2018 - Dec 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Memory Trainer',
    description: 'Simple game for memory training.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/AnnaBaraulina/memory-trainer',
    demo: 'https://annabaraulina.github.io/memory-trainer/',
  },
  {
    id: 'project-2',
    name: 'Stellar Burger website',
    description:
      'Online burger store.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/AnnaBaraulina/react-burger',
    demo: 'annabaraulina.github.io/react-burger/',
  },
  {
    id: 'project-3',
    name: 'Portfolio Website',
    description: 'This project is a portfolio website designed for a motion designer.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/AnnaBaraulina/nextjs-blog',
    demo: 'nextjs-blog-coral-five-95.vercel.app',
  },
  {
    id: 'project-4',
    name: 'Algorithm Visualizer',
    description: `An algorithm visualizer that will help you understand how they work.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/AnnaBaraulina/algososh',
    demo: 'https://annabaraulina.github.io/algososh/',
  },
  {
    id: 'project-5',
    name: 'My article for Doca',
    description:
      'My article with a demo for an open-source project for developers.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://doka.guide/recipes/popup/',
  },
];

export { services, technologies, experiences, projects };
