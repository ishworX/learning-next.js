// Please check 17:29 
import {
  HiHome,
  HiUser,
  HiSquare2Stack,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { RxDesktop } from "react-icons/rx";

import { BiBug } from "react-icons/bi";

import {
  FaBug,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

export const LINKS = [
  {
    title: "home",
    icon: <HiHome />,
    path: "/",
    offset: -50,
  },
  {
    title: "portfolio",
    icon: <HiChatBubbleBottomCenterText />,
    path: "/portfolio",
    offset: -50,
  },
  {
    title: "contact",
    icon: <HiEnvelope />,
    path: "/contact",
    offset: -50,
  },
];

// ACCORDION SECTION
export const ACCORDION = [
  {
    question: "What sets your approach apart from others?",
    answer:
      "I prioritize a holistic approach, blending user experience with technical excellence to create functional and aesthetically pleasing websites.",
  },
  {
    question: "How do you ensure client satisfaction?",
    answer:
      "I prioritize active communication and collaboration, ensuring that client feedback is incorporated at every stage of the design and development process.",
  },
  {
    question: "How you balance creativity in your designs?",
    answer:
      "I approach each project with a blend of innovation and practicality, leveraging my technical expertise to bring creative visions to life while ensuring optimal functionality.",
  },
  {
    question: "How do you balance creativity in your designs?",
    answer:
      "I balance creativity by blending innovation with practicality, utilizing technical expertise to realize creative visions while ensuring functionality and performance.",
  },
];

//  About data
export const aboutData = [
  {
    title: "expertise",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        year: "2012 - 2023",
      },
      {
        title: "Web Developer - XYZ Company",
        year: "2010 - 2012",
      },
      {
        title: "Freelancer - Fiver",
        year: "2008 - 2010",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Full Stack Development - ABC University, USA",
        year: "2011",
      },
      {
        title: "FontEnd Development - ABC University, Ldondon",
        year: "2009",
      },
      {
        title: "Graphic Designing - ABC University, Turkey",
        year: "2006",
      },
    ],
  },
];

// Work data
export const workData = [
  {
    title: "FrontEnd",
    projects: [
      {
        title: "Website",
        url: "/img1.png",
      },
      {
        title: "Website",
        url: "/img2.png",
      },
      {
        title: "Application",
        url: "/img3.png",
      },
      {
        title: "Application",
        url: "/img4.png",
      },
    ],
  },
  {
    title: "backend",
    projects: [
      {
        title: "Website",
        url: "/img4.png",
      },
      {
        title: "Website",
        url: "/img3.png",
      },
      {
        title: "Application",
        url: "/img1.png",
      },
      {
        title: "Application",
        url: "/img5.png",
      },
    ],
  },
  {
    title: "Full Stack",
    projects: [
      {
        title: "Website",
        url: "/img5.png",
      },
      {
        title: "Website",
        url: "/img1.png",
      },
      {
        title: "Application",
        url: "/img2.png",
      },
      {
        title: "Application",
        url: "/img3.png",
      },
    ],
  },
];

//  Testimonial data
export const testimonialData = [
  {
    url: "/person-1.jpg",
    name: "Olivia Anderson",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    url: "/person-2.jpg",
    name: "Lucas Taylor",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    url: "/person-3.jpg",
    name: "Emma Brown",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    url: "/person-4.jpg",
    name: "Sophia Martinez",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];
