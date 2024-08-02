import { news } from '../assets';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiBem, SiWebpack, SiFigma, SiJavascript, SiCss3, SiReact, SiHtml5, SiVitest, SiGit } from "react-icons/si";

export const navLinks = [
  // {
  //   id: "home",
  //   title: "Home",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "education",
  //   title: "Education",
  // },
  {
    id: "experience",
    title: "Work Experience",
  },
];

export const techSkills = [
  {
    id: 'skill-1',
    name: 'HTML5',
    icon: SiHtml5
  }, 
  {
    id: 'skill-2',
    name: 'BEM',
    icon: SiBem
  }, 
  {
    id: 'skill-3',
    name: 'CSS3',
    icon: SiCss3
  }, 
  {
    id: 'skill-4',
    name: 'JavaScript',
    icon: SiJavascript
  }, 
  {
    id: 'skill-5',
    name: 'Webpack',
    icon: SiWebpack
  }, 
  {
    id: 'skill-6',
    name: 'Vite',
    icon: SiVitest
  }, 
  {
    id: 'skill-7',
    name: 'React',
    icon: SiReact
  }, 
  {
    id: 'skill-8',
    name: 'Git',
    icon: SiGit
  }, 
  {
    id: 'skill-9',
    name: 'Figma',
    icon: SiFigma
  }
];

export const spokenLanguages = [
  {
    language: 'English',
    level: 'Working profeciency'
  },
  {
    language: 'Norvegian',
    level: 'Elementary'
  },
  {
    language: 'Russian',
    level: 'Native'
  }
];

export const projects = [
  { 
    id: 'project-1', 
    title: 'Music Services Website',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: ['HTML5', 'Sass', 'Vanilla JavaScript'],
    demo: 'https://example.com',
    github: 'https://example.com'
  },
  { 
    id: 'project-2', 
    title: 'Music Services Website',
    description: 'Website adapted for different users devices, including interactive mobile navigation, images slideshow and filter tabs',
    image: news,
    stack: ['HTML5', 'BEM', 'Sass', 'Vanilla JavaScript'],
    demo: {
      link: 'https://example.com',
      icon: FaGithub,
    },
    github: {
      link: 'https://example.com',
      icon: FaGithub,
    },
  },
  { 
    id: 'project-3', 
    title: 'News Website Homepage',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: ['HTML5', 'Sass', 'Vanilla JavaScript'],
    demo: 'https://example.com',
    github: 'https://example.com'
  }, 
  { 
    id: 'project-3', 
    title: 'News Website Homepage',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: ['HTML5', 'Sass', 'Vanilla JavaScript'],
    demo: 'https://example.com',
    github: 'https://example.com'
  }
];

export const education = [
  {
    institution: 'Ivanovo State University',
    place: 'Russia',
    major: 'Accounting and Auditing',
    level: 'Bachelor degree',
    period: '2014 - 2018'
  }
];

export const experience = [
  {
    id: 'job-1',
    company: 'Astrum',
    website: 'https://astrum-entertainment.ru/en',
    position: 'Junior Brand Manager',
    place: 'Moscow, Russia',
    description: 'developed product marketing strategy and presentations to stakeholders deployed campaigns, monitored and analyzed their KPI',
    period: 'January – August 2023'
  },
  {
    id: 'job-2',
    company: 'Astrum',
    website: 'https://astrum-entertainment.ru/en',
    position: 'Junior Brand Manager',
    place: 'Moscow, Russia',
    description: 'developed product marketing strategy and presentations to stakeholders deployed campaigns, monitored and analyzed their KPI',
    period: 'January – August 2023'
  },
  {
    id: 'job-3',
    company: 'Astrum',
    website: 'https://astrum-entertainment.ru/en',
    position: 'Junior Brand Manager',
    place: 'Moscow, Russia',
    description: 'developed product marketing strategy and presentations to stakeholders deployed campaigns, monitored and analyzed their KPI',
    period: 'January – August 2023'
  }
];

export const socialPages = [
  {
    icon: FaGithub,
    link: 'https://example.com'
  },
  {
    icon: FaLinkedin,
    link: 'https://example.com'
  }
]