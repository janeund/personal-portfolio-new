import { news } from '../assets';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiBem, SiWebpack, SiFigma, SiJavascript, SiCss3, SiReact, SiHtml5, SiVitest, SiGit, SiSass } from "react-icons/si";

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
    title: 'Movie App',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: [
      {
        name: 'HTML5',
        icon: SiHtml5
      },
      {
        name: 'Sass',
        icon: SiSass
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      }
    ],
    demo: 'https://janeund.github.io/memory-game/index.html',
    github: 'https://github.com/janeund/movie-app'
  },
  { 
    id: 'project-2', 
    title: 'Memory Game',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: [
      {
        name: 'HTML5',
        icon: SiHtml5
      },
      {
        name: 'CSS',
        icon: SiSass
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      }
    ],
    demo: 'https://janeund.github.io/memory-game/index.html',
    github: 'https://github.com/janeund/memory-game'
  },
  { 
    id: 'project-3', 
    title: 'Music Services Website',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: [
      {
        name: 'HTML5',
        icon: SiHtml5
      },
      {
        name: 'CSS',
        icon: SiSass
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      }
    ],
    demo: 'https://janeund.github.io/qrates/',
    github: 'https://github.com/janeund/qrates'
  },
  { 
    id: 'project-4', 
    title: 'Calorie Tracker App',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: [
      {
        name: 'HTML5',
        icon: SiHtml5
      },
      {
        name: 'CSS',
        icon: SiSass
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      }
    ],
    demo: 'https://janeund.github.io/qrates/',
    github: 'https://github.com/janeund/qrates'
  },
  { 
    id: 'project-5', 
    title: 'Marketing Agency Landing page',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: [
      {
        name: 'HTML5',
        icon: SiHtml5
      },
      {
        name: 'CSS',
        icon: SiSass
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      }
    ],
    demo: 'https://janeund.github.io/marketing-agency/dist/',
    github: 'https://github.com/janeund/marketing-agency'
  },
  { 
    id: 'project-6', 
    title: 'Custom Video Player',
    description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
    image: news,
    stack: [
      {
        name: 'HTML5',
        icon: SiHtml5
      },
      {
        name: 'CSS',
        icon: SiSass
      },
      {
        name: 'JavaScript',
        icon: SiJavascript
      }
    ],
    demo: 'https://janeund.github.io/marketing-agency/dist/',
    github: 'https://github.com/janeund/marketing-agency'
  },
  // { 
  //   id: 'project-2', 
  //   title: 'Music Services Website',
  //   description: 'Website adapted for different users devices, including interactive mobile navigation, images slideshow and filter tabs',
  //   image: news,
  //   stack: ['HTML5', 'BEM', 'Sass', 'Vanilla JavaScript'],
  //   demo: {
  //     link: 'https://example.com',
  //     icon: FaGithub,
  //   },
  //   github: {
  //     link: 'https://example.com',
  //     icon: FaGithub,
  //   },
  // },
  // { 
  //   id: 'project-3', 
  //   title: 'News Website Homepage',
  //   description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
  //   image: news,
  //   stack: ['HTML5', 'Sass', 'Vanilla JavaScript'],
  //   demo: 'https://example.com',
  //   github: 'https://example.com'
  // }, 
  // { 
  //   id: 'project-3', 
  //   title: 'News Website Homepage',
  //   description: 'Responsive website homepage adapted for different users devices, including interactive mobile navigation',
  //   image: news,
  //   stack: ['HTML5', 'Sass', 'Vanilla JavaScript'],
  //   demo: 'https://example.com',
  //   github: 'https://example.com'
  // }
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
    description: 'Developed product marketing strategy and presentations to stakeholders, monitored and analyzed KPI, collaborated with art and web-development teams on asset creation, assisted in marketing research, tested projects.',
    period: 'January – August 2023'
  },
  {
    id: 'job-2',
    company: 'Ubisoft Games',
    website: 'https://www.ubisoft.com/en-us/company/about-us',
    position: 'Digital Marketing Specialist',
    place: 'Moscow, Russia',
    description: 'Developed marketing plans in collaboration with international teams, controlled optimization and perfomance of media campaigns, initiated partnerships with influensers.',
    period: 'December 2021 - October 2022'
  },
  {
    id: 'job-3',
    company: 'Ubisoft Games',
    website: 'https://www.ubisoft.com/en-us/company/about-us',
    position: 'Consumer Engagement Specialist',
    place: 'Moscow, Russia',
    description: 'Planned and managed online and offline events with gaming communities, localized marketing assets for the CIS region.',
    period: 'August 2019 – November 2021'
  },
  {
    id: 'job-4',
    company: 'Ubisoft Games',
    website: 'https://www.ubisoft.com/en-us/company/about-us',
    position: 'Finance Assistant',
    place: 'Moscow, Russia',
    description: 'Worked with financial and legal documents, analyzed data, prepared financial reports.',
    period: 'September 2018 – July 2019'
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