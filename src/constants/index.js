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
  tailwind,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  wordpress,
  photoshop
} from "../assets";


const services = [
  
  {
    title: "Web Developer",
    description: "Elevate your online presence with our web development services, tailored to create engaging and functional websites that leave a lasting impression.",
    icon: web,
  },
  {
    title: "E-Commerce",
    description: "Empowering businesses with tailored E-Commerce solutions for digital success.",
    icon: mobile,
  },
  {
    title: "Tech Solutions",
    description: "Delivering innovative tech solutions that drive efficiency, foster growth, and elevate your business to new heights",
    icon: creator,
  },
  {
    title: "Graphics Design",
    description: "Infusing creativity using Photoshop and Illustrator to craft stunning graphic designs that captivate and inspire.",
    icon: backend,
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
    name:"WordPress",
    icon:wordpress
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name:"Redux",
    icon:redux
  },
  {
    name:"Node JS",
    icon:nodejs
  },
  {
    name:"Mongo DB",
    icon:mongodb
  },
  {
    name:"Figma",
    icon:figma
  },
  {
    name:"Photoshop",
    icon:photoshop
  },
  {
    name:"Git",
    icon:git
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "JavaScript Dum",
    description:
      "A fun project made in javaScript based on key strokes to play tunes.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://github.com/mardan-shah/JavaScript-30-Practice/tree/main/Drum",
  },
  {
    name: "Js Clock",
    description:
      "A javascript and Css clock that displays time based on your region.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javsScript",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://github.com/mardan-shah/JavaScript-30-Practice/tree/main/Clock",
  },
  {
    name: "CSS variables",
    description:
      "Playing with css variables to customize blur and padding of a picture using a slider.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://github.com/mardan-shah/JavaScript-30-Practice/tree/main/fun%20with%20variables",
  },
];



export { services, technologies, experiences, testimonials, projects }; 