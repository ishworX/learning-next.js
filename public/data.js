import { Paintbrush, Layers, FileJson } from "lucide-react";


export const LINKS = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "portfolio",
    path: "/portfolio",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

export const ACCORDION = [
  {
    question: "Who are you and what do you do?",
    answer:'Null',
  },
  {
    question: "What technologies are you proficient in?",
    answer: "I'm proficient in C++, JavaScript, HTML, CSS, and various frameworks.",
  },
  {
    question: "Can you describe your communication style?",
    answer:
      "I communicate clearly and openly, ensuring everyone is on the same page.",
  },
];

export const EDUCATION = [
  {
    title: "SPA Client Project - Calagry, Canada",
    year: "Currently Working",
  },
  {
    title: "Fullstack Developer - Taste Of India, Lethbridge",
    year: "2019 - Present",
  },
  {
    title: "Freelancer - Bot Developer, Discord",
    year: "Present",
  },
];
export const EXPERINCE = [
  {
    title: "University Of Lethbridge",
    year: "Anticipated – April 2025",
  },
];

// SERVICES SECTION
export const SERVICES = [
  {
    icon: <Paintbrush size={44} strokeWidth={0.8} />,
    title: "Software Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, aspernatur fugit! Dicta quo quidem soluta.",
  },
  {
    icon: <FileJson size={44} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, aspernatur fugit! Dicta quo quidem soluta.",
  },
  {
    icon: <Layers size={44} strokeWidth={0.8} />,
    title: "Data Science & Analytics",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, aspernatur fugit! Dicta quo quidem soluta.",
  },
];

// Work data
export const WORKDATA = [
  {
    title: "Indian Restaurant Website",
    url: "/newtaste.png",
    category: "frontEnd",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "https://newtasteofindia.",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Discord Profile Portfolio",
    url: "/whoisrabbit.png",
    category: "frontEnd",
    github: "https://github.com/ishworX/Portfolio",
    live : "https://whoisrabbit.com",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Groove Music Bot",
    url: "/grooveBot.png",
    category: "backEnd",
    github: "https://github.com/theNamasteNepal/groove-bot",
    live : "https://whoisrabbit.com/projects/groove",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Indian Restaurant Website",
    url: "/newtaste.png",
    category: "fullStack",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "https://newtasteofindia.",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "fullStack Website",
    url: "/namasteNepal.png",
    category: "fullStack",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "http://thenamastenepal.com",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
];

// TESTIMONIAL SECTION
export const TESTIMONIAL = [
  {
    title: "James Martinez",
    profession: "Director, Nova Gold",
    URL: "/person-1.jpg",
    desc: "Fantastic destinations, knowledgeable guides, seamless logistics. Spectacular views and memories. Exceeded expectations; worth every penny",
  },
  {
    title: "Sophia Anderson",
    profession: "Manager, Safe City",
    URL: "/person-2.jpg",
    desc: "Unforgettable experiences, friendly staff, and top-notch organization. Highly recommended for adventurous souls. A must-try. Highly recommend",
  },
  {
    title: "Lily Walker",
    profession: "Director, High Gold",
    URL: "/person-3.jpg",
    desc: "Unbelievable sights, professional guides, seamless planning. Unmatched experiences that leave you wanting more. Highly recommended",
  },
  {
    title: "Ninna Williams",
    profession: "CEO, Rafa Builds",
    URL: "/person-4.jpg",
    desc: "Unparalleled expertise, personalized service, breathtaking destinations. Consistently delivers an extraordinary travel experience.",
  },
  {
    title: "Ali Khan",
    profession: "CEO, High Chase",
    URL: "/person-5.jpg",
    desc: "Outstanding journeys, knowledgeable guides, seamless execution. Each trip exceeds expectations, ensuring lasting memories and remarkable experiences.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Destinations",
      "Travel Guides",
      "Book Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@passport.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/linkedin.svg",
  ],
};
