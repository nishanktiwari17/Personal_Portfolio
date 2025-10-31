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
  Goldman,
  MaxGen,
  Gaurav_Singhal,
  Apoorv_Bansal,
  Naren_Lokwani,
  kubernetes,
  GCP,
  python,
  java,
  springboot,
  tensorflow,
  opencv,
  feathersjs,
  github,

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
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "AI/ML Engineer",
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
    name: "Java",
    icon: java
  },
    {
    name: "Spring Boot",
    icon: springboot
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
  {
    name: "Tensorflow",
    icon: tensorflow
  },
  {
    name: "OpenCV",
    icon: opencv
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Goldman Sachs",
    icon: Goldman,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Engineered scalable backend services using Spring Boot and Java for financial transaction processing, integrating gRPC and RabbitMQ to handle 1M+ daily requests with 99.9% uptime",
      "Built secure RESTful APIs integrating third-party fraud detection tools using OAuth2 and OpenID Connect, implementing token introspection and RBAC, cutting API latency by 15%.",
      "Containerized microservices on Kubernetes, optimizing resource allocation to reduce operational costs by 20% and accelerate release cycles by 25%, ensuring compliance with enterprise security standards.",
      "Collaborated in Agile sprints with cross-functional teams, conducting rigorous code reviews and employing Test-Driven Development with JUnit and Selenium to achieve 85%+ test coverage."
    ],
  },
  {
    title: "AI/ML Engineer",
    company_name: "Amspaces",
    icon: Amspaces,
    iconBg: "#383E56",
    date: "May 2024 - Jan 2025",
    points: [
      "Deployed containerized TensorFlow/OpenCV pipelines on AWS EC2 and SageMaker, enabling scalable real-time inference for invoice automation processing 500+ documents/min with 98% accuracy.",
      "Built Jenkins-based CI/CD pipelines across 10+ servers, automating deployments with Docker and reducing manual effort by 70%.",
      "Integrated LLMs with RAG frameworks and Apache Kafka for event-driven processing, analyzing transactional patterns in real-time to enhance fraud detection precision and reduce false positives by 22%.",
      "Designed stacking ensemble models in Python combining XGBoost, Random Forest, and Neural Networks to forecast AR/AP risk, boosting predictive reliability to 82% and minimizing financial exposures."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Lucien Solutions",
    icon: Lucien_Solution,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - July 2023",
    points: [
      "Engineered 25+ microservices using JavaScript based Node.js (Express.js) and Golang to power high-scale content delivery for Super App infrastructure.",
      "Developed a real-time messaging platform for 100K+ users using WebSockets, RabbitMQ, and DynamoDB, achieving zero downtime and 25% higher throughput under peak loads.",
      "Established centralized monitoring and alerting for microservices using Prometheus and Grafana, enabling proactive incident response and reducing mean time to recovery (MTTR) by 40%."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Maxgen Technologies Pvt Ltd",
    icon: MaxGen,
    iconBg: "#383E56",
    date: "May 2020 - Jul 2022",
    points: [
      "Developed full-stack applications using React Native, Node.js (Next.js), and MongoDB for workflow automation tools, supporting 50K+ users and improving task completion rates by 30%.",
      "Constructed 20+ serverless TypeScript-based Next.js REST API route handlers with Redis caching, reducing API response latency by 55% and improving scalability under peak traffic.",
      "Optimized database queries in PostgreSQL, reducing response times by 35% through aggregation and caching strategies with Redis, offloading 70% of repetitive database queries.",
      "Integrated CI/CD pipelines with automated test suites for production deployments, slashing release times by 30%."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nishank demonstrated strong technical skills and work ethic, contributing to advanced data visualizations and critical backend tasks, making him a valuable asset to our team.",
    name: "Gaurav Singhal",
    designation: "Founder CEO",
    company: "Amspaces",
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
    designation: "Team Lead",
    company: "Maxgen Technologies",
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
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/nishanktiwari17/Land-Registry",
  },
  {
    name: "Trash Cash",
    description:
      "The Trash Cash App is a mobile application designed to simplify waste management and promote sustainable practices. It allows users to conveniently schedule waste pickups from their homes",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/nishanktiwari17/Trash-Cash",
  },
  {
    name: "DNA Motif Discovery",
    description:
      "This repository implements an end-to-end deep learning pipeline for discovering biologically meaningful DNA motifs and assessing their potential disruption by disease-associated variants.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow/keras",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/nishanktiwari17/DNA-Motif-Discovery-in-Disease-Genomics",
  },
];

export { services, technologies, experiences, testimonials, projects };
