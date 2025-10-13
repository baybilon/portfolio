import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { DiCodeigniter, DiJqueryLogo } from "react-icons/di";
import {
  SiMongodb,
  SiNextdotjs,
  SiPayloadcms,
  SiTailwindcss,
  SiTrpc,
} from "react-icons/si";
import { BsStripe } from "react-icons/bs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const tabItems = [
  {
    id: 1,
    name: "Apps",
  },
  {
    id: 2,
    name: "Content Creation",
  },
  {
    id: 3,
    name: "Photography",
  },
  {
    id: 4,
    name: "CGI",
  },
];

export const AingMe = [
  {
    id: "hero",
    img: "/hero/W_depan_CB_1.png",
    intro:
      "Computer System Information graduate passionate about web programming, videography, photography, and 3D scenery. Highly focused person who likes to take initiative, work in teams to solve problems, and seek out new things to create with. Proficient in a range of modern technologies, including Node.js and React.js framework libraries, to develop responsive and user-friendly front-end applications, Competent as a full-stack developer using Code Igniter, adept in database design using MySQL, SQL Server, PostgreSQL, and Adobe Family for editing video or photos as content creation",
    des: "",
  },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize communication and team work for problem solving, willing to work as individual or team ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[30vh] text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/app/sisfo/sispad.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly learn to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech savvy with a passion for web development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently learning MERN Stack, trying to learn by doing exploring some libraries to create Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to know me more?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WhatsApp Chat AI",
    des: "LLM text generated AI model implemented in WhatsApp.",
    img: ["/app/wa/wa1.png"],
    iconLists: [
      <FaNodeJs key="1" />,
      <IoLogoJavascript key="2" />,
      <FaWhatsapp key="3" />,
      <AiFillOpenAI key="4" />,
    ],
    link: "#",
    desL: "Learning Node.js by creating a Simple AI chat bot assistant on WhatsApp using whatsapp.web.js libraries and OpenAPI to integrate model LLM, this project inspired by random number who like to spam some scam or link.",
    tag: ["Chat BOT", "AI", "Open AI", "Gemma", "LLM", "WhatsApp"],
  },
  {
    id: 2,
    title: "Academic Information System",
    des: "Simplify registration and submision of paper and thesis.",
    img: [
      "/app/sisfo/sisfo1.png",
      "/app/sisfo/sisfo2.jpg",
      "/app/sisfo/sisfo3.jpg",
      "/app/sisfo/sisfo4.jpg",
      "/app/sisfo/sisfo5.jpg",
    ],
    iconLists: [
      <FaPhp key="1" />,
      <DiCodeigniter key="2" />,
      <FaBootstrap key="3" />,
      <DiJqueryLogo key="4" />,
    ],
    link: "#",
    desL: "The academic services of the Widyatama University Information System Study Program are still conducted conventionally, especially in the process of registration of practical work and submission of theses, which are still done by manually registering the papers submitted to the administration. It really requires a relatively long processing time. Therefore, I need to ﬁnd solutions to solve problems that occur in academic services by creating an Academic Information System website. Web-based academic information systems in Widyatama University Information System cover several factors, namely data management systems ranging from lecturer, student data, internship registration, and thesis submission, and there is also making reports using a codeigniter framework.",
    tag: ["Information System", "Web App", "Registration", "Academic"],
  },
  {
    id: 3,
    title: "IKIAE E-commerce",
    des: "IKIAE is an online platform that helps seller sell products directly to their customer.",
    img: [
      "/app/ikiae/IKIAE(7).png",
      "/app/ikiae/IKIAE(3).png",
      "/app/ikiae/IKIAE(8).png",
      "/app/ikiae/IKIAE(4).png",
      "/app/ikiae/IKIAE(6).png",
      "/app/ikiae/IKIAE(5).png",
    ],
    iconLists: [
      <SiNextdotjs key="1" />,
      <SiTailwindcss key="2" />,
      <SiMongodb key="3" />,
      <BsStripe key="4" />,
      <SiTrpc key="5" />,
      <SiPayloadcms key="6" />,
    ],
    link: "https://github.com/baybilon/ikiae-ecommerce",
    desL: "IKIAE is a digital marketplace and payment platform designed for independent creators — writers, artists, developers, musicians, designers, and more — to sell their work online, It’s built to be simple, creator-first, and flexible — no need to hire developers, set up Shopify, or manage complex systems",
    tag: ["E-commerce", "Web App", "Seller", "Marketplace"],
  },
];

export const projectContent = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/1eS9TcYTkCo?si=Avq4wuHO4steqvXw",
    title: "Jauntends first single Music Video",
    tags: ["Music Video", "Metal", " Local Band", "The Scene"],
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/oiKrnSk13Mc?si=GghNZAGsgdf7z6sX",
    title: "Jauntends Bonus Track",
    tags: ["Music Video", "Metal", " Local Band", "The Scene", "Lyric Videos"],
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/2w9ImeU2L_0?si=ZvC9Gz3CsRzbxAXQ",
    title: "The Weeknd",
    tags: ["Music Video", "The Crew 2", "Cinematic", "Gaming"],
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/pgiWKeemcAM?si=6gv_g0kblwFs0Lkp",
    title: "The Crew 2",
    tags: ["Music Video", "The Crew 2", "Cinematic", "Gaming"],
  },
];

export const gallery = [
  { src: "/gallery/d1.jpg" },
  { src: "/gallery/g1.jpg" },
  { src: "/gallery/d2.jpg" },
  { src: "/gallery/d3.jpg" },
  { src: "/gallery/a1.jpg" },
  { src: "/gallery/a2.jpg" },
];

export const cgi = [
  {
    src: "/cgi/t1.jpg",
    classname: "lg:col-span-1 lg:row-span-3 aspect-auto",
  },
  {
    src: "/cgi/s4.jpg",
    classname: "lg:col-span-1 lg:row-span-3 aspect-auto",
  },
  {
    src: "/cgi/b2_1.png",
    classname: "lg:col-span-2 lg:row-start-2 lg:row-span-2 aspect-auto",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Engineer Intern",
//     desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    period: "2021 - 2022",
    title: "Staff IT Programmer",
    desc: "Develop and maintenance web projects that support employees, sales and service operation.",
    tags: ["Full-stack", "Web Developer"],
  },
  {
    id: 2,
    period: "2022",
    title: "Drone Pilot",
    desc: "Utilize drone technology to take erial photography for mining activities, mining development and mining inspection.",
    tags: ["Drone Operator", "Mining"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const socialButton = [
  {
    id: 1,
    icon: FaWhatsapp,
    title: "WhatsApp",
    link: "https://wa.me/6285158173324",
  },
  {
    id: 2,
    title: "Email",
    icon: IoMailOutline,
    link: "mailto:iqbal.py@outlook.com",
  },
  {
    id: 3,
    icon: FaLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/iqbal-py",
  },
  {
    id: 4,
    icon: FaGithub,
    title: "Github",
    link: "https://github.com/baybilon/",
  },
];
