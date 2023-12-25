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
    title: "Back-end Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Database Management",
    icon: backend,
  },
  {
    title: "Product Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
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
    name: "C++",
    icon: redux,
  },
  {
    name: "SpringBoot",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
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
    title: "Software Developer Intern",
    company_name: "World Fuel Services ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Collaborated closely with development team and leveraged react.js and java to create a payment app, resulting in a highly responsive and user-friendly interface for the consumer-facing app used for buying billions in airplane fuel orders",
      "Personally integrated 7 new features using JavaScript creating precise tracking linked the backend and to New Relic for environment logging introspection which increased comprehension on user experience and site traffic for the team.",
    ],
  },
  {
    title: "IT Software Developer I",
    company_name: "World Fuel Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - November 2023",
    points: [
      "Developed and maintained a full-stack application using Java, Angular, and SQL that is highly scalable and efficient and is able to handle hundreds of millions of dollars and fuel orders and other FBO-related services",
      "Added a variety of entity metrics propagated the UI to the backend and in the database using Java to optimize app flow",
      "Improved the UI aesthetic of the dashboard and login page using angular components with HTML and TypeScript",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2020 - present",
    points: [
      "Increased revenue for 3 local businesses by an average of $10,000 by creating and deploying high-performing and visually stunning websites using Next.js and TypeScript and then deployed it to a Linode server using PM2 with aesthetically pleasing UI/UX as well as using SEO friendly features resulting in an increase in website traffic and sales revenue for the businesses",

    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "N dollar recognizer",
    description:
      "Used N-dollar algorithm to be able to properly identify over 40 strokes, a stroke being a drawn shape, number, or design from a mouse, or stylus or touch screen",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
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