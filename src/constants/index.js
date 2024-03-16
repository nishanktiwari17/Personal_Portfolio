import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education"
  },
  {
    id: "experience",
    title: "Project",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "Lucien Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 - July 2023",
    points: [
      "Developing microservices architecture with Node.js (Express.js) and Golang, encapsulating in 20+Docker containers",
      "Orchestrating automated deployment of these containers on AWS EC2.",
      "Architecting database schema and enhancing it’s efficiency through implementation of MongoDB sharded replica sets for robust data availability",
      "Worked with team to build ReactJS frontend which included session management, frontend state management, authentication and payment gateway integration.",
      "Constructed chat system using WebSocket’s and Redis Pub/Sub to enable real-time chat for over 10K users"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Certus Capital Pvt Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - July 2023",
    points: [
      "Created 15+ API services using Feathers.js adding authorization and validation using middleware functions.",
      "Enhanced the API response latency through implementation of server-side processing",
      "Integrated cron jobs to automate the dispatch of more than 1K emails per week and to oversee financial deadlines in a programmatic manner.",
      "Collaborated with team on frontend website development utilizing ReactJS and added graphical representations into sales performance chart using D3.js for clear presentation of data.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Frshr Technologies",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2021 - Aug 2022",
    points: [
      "Worked with team to program 2 client projects using NodeJS frameworks Express.js and NestJS.",
      "Implemented JSON Web Token (JWT) authentication across 40 API’s and integrated Google authentication for secure user sign in, strengthening authentication mechanism.",
      "Effectively integrated 25+ TravelgateX’s API’s, seamlessly enabling real-time connectivity within the travel ecosystem.",
      "Implemented MongoDB’s aggregation pipeline to improve performance leading to 18% decrease in response time for data querying API’s thereby enhancing overall system efficiency.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Gaurav Singhal",
    designation: "CTO",
    company: "Certus Capital Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Apoorv Bansal",
    designation: "CTO",
    company: "Lucien Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Naren Lokwani",
    designation: "CTO",
    company: "Frshr Technologies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
