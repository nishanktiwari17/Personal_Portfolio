import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  FDS,
  LRS,
  SocialApp,
  threejs,
  Lucien_Solution,
  Amspaces,
  Certus_Capital,
  Frshr,
  Gaurav_Singhal,
  Apoorv_Bansal,
  Naren_Lokwani,
  kubernetes,
  GCP,
  python,
  feathersjs,
  ModularHomez,

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
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Cloud Developer",
    icon: web,
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
    name: "Python",
    icon: python,
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
    name: "FeathersJS",
    icon: feathersjs,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Google Cloud",
    icon: GCP,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Amspaces",
    icon: Amspaces,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Deployed the application on an AWS EC2 instance and set up a PostgreSQL database, handling regular management and maintenance tasks, including performance tuning and backups",
      "Built a CI/CD pipeline using Jenkins, automating the build, testing, and deployment processes for seamless integration",
      "Developed a Random Forest predictive model in Python, using cross-validation to forecast accounts receivable/payable performance with 68% accuracy, demonstrating improved effectiveness",
      "Designed an automated pipeline for daily model retraining using Python scripts hosted in AWS ECS, reducing manual intervention by 20%, and maintaining model accuracy with up-to-date data"
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Lucien Solutions",
    icon: Lucien_Solution,
    iconBg: "#383E56",
    date: "August 2022 - July 2023",
    points: [
      "Developed microservices architecture with Node.js (Express.js) and Golang, encapsulating it in 20+ Docker containers",
      "Orchestrated automated deployment for these containers and MongoDB sharded replica sets on AWS EC2, saving over 60 effort hours",
      "Utilized AWS Cloudfront to reduce file transfer time by 32% and improve overall system performance by 20% through optimized file administration",
      "Worked with team to build ReactJS frontend which included session management, frontend state management, authentication and payment gateway integration.",
      "Build chat system using WebSocket’s and Redis Pub/Sub to enable real-time chat for over 10K users"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Certus Capital Pvt Ltd",
    icon: Certus_Capital,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - July 2022",
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
    icon: Frshr,
    iconBg: "#383E56",
    date: "Oct 2020 - Aug 2021",
    points: [
      "Created backend by developing 15+ REST API’s modules in Django enabling seamless data transfer between frontend and database",
      "Leveraged PySpark, Data Frame, Spark SQL to perform data preprocessing and data transformation actions to generate analytics reports and stored it in AWS S3 bucket",
      "Fetched TravelGate data into JSON format, processed and stored it efficiently in MongoDB",
      "Integrated 25+ TravelGate GraphQL API’s using Django for real-time connectivity within travel ecosystem",
    ],
  },
  {
    title: "Backend Web Developer Intern",
    company_name: "ModularHomez",
    icon: ModularHomez,
    iconBg: "#383E56",
    date: "June 2020 - Sept 2020",
    points: [
      " As part of the software development life cycle (SDLC), implemented, tested, and documented a total of over 40 APIs",
      "Improved website functionality by means of an enhanced database design approach resulting in around 18% reduction in response time for APIs"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Nishank demonstrated strong technical skills and work ethic, contributing to advanced data visualizations and critical backend tasks, making him a valuable asset to our team.",
    name: "Gaurav Singhal",
    designation: "CTO",
    company: "Certus Capital Pvt Ltd",
    image: Gaurav_Singhal,
  },
  {
    testimonial:
      "Nishank showcased impressive skills, shaping our product design and playing a key role constructing our microservices architecture and real-time systems within the product.",
    name: "Apoorv Bansal",
    designation: "CTO",
    company: "Lucien Solutions",
    image: Apoorv_Bansal,
  },
  {
    testimonial:
      "Nishank is one of those rare web developers who goes beyond just delivering a project; he takes time to understand your needs and is fully invested in helping you achieve your goals.",
    name: "Naren Lokwani",
    designation: "Founder CEO",
    company: "Frshr Technologies",
    image: Naren_Lokwani,
  },
];

const projects = [
  {
    name: "Land Registry System",
    description:
      "Built an web application for transferring legacy data and securely housing confidential information within blockchain based smart contracts with help of Hyperledger Fabric and Solidity",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: LRS,
    source_code_link: "https://github.com/nishanktiwari17/Land-Registry",
  },
  {
    name: "Food Delivery System",
    description:
      "Constructed a Java-based application to streamline the food delivery system for cafes and food centers across the university, optimizing order management and delivery workflows for improved efficiency",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: FDS,
    source_code_link: "https://github.com/nishanktiwari17/Food-Delivery-System",
  },
  {
    name: "Social App",
    description:
      "Social-App is a MERN stack application designed to facilitate idea sharing among users, allowing them to follow or unfollow others and post their insights on a collaborative social platform",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: SocialApp,
    source_code_link: "https://github.com/nishanktiwari17/Social-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
