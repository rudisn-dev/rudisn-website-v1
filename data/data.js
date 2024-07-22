export const logoUrl = "assets/img/rudisn-logo.svg";

export const allServices = [
  {
    name: "UI/UX Design",
    path: "/service-details",
    description:
      "Creating intuitive and engaging user interfaces and experiences through research and design.",
    tags: [
      "User Research",
      "Prototyping",
      "Interaction Design",
      "Wireframing",
      "Visual Design",
    ],
  },
  {
    name: "Web Development",
    path: "/service-details",
    description:
      "Building and maintaining websites to ensure optimal performance and user experience.",
    tags: [
      "Frontend",
      "Backend",
      "Full-Stack",
      "E-Commerce",
      "Custom solutions",
    ],
  },
  {
    name: "App Development",
    path: "/service-details",
    description:
      "Developing mobile applications for various platforms to enhance user engagement and functionality.",
    tags: [
      "IOS",
      "Android",
      "Cross-Platform Apps",
      "Maintenance",
      "User Testing",
    ],
  },
  {
    name: "Cloud Service",
    path: "/service-details",
    description:
      "Providing scalable cloud solutions to enhance business agility and performance.",
    tags: ["Migration", "Management", "Security", "DevOps"],
  },
  {
    name: "SEO",
    path: "/service-details",
    description:
      "Optimizing websites to rank higher on search engines and attract more organic traffic.",
    tags: [
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Optimization",
      "Technical SEO",
    ],
  },
  {
    name: "Cyber Security",
    path: "/service-details",
    description:
      "Protecting systems, networks, and programs from digital attacks.",
    tags: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Threat Intelligence",
      "Security Audits",
      "Incident Response",
    ],
  },
];

export const allProjects = [
  {
    name: "Smart Design, Smarter Solutions.",
    tags: ["Logs", "Color", "Typography"],
    path: "/portfolio-details",
    mainImgSrc: "assets/img/home2/portfolio-01.jpg",
    showCaseColumnWidth: "col-lg-6",
  },
  {
    name: "Smart Design, Smarter Solutions.",
    tags: ["Logs", "Color", "Typography"],
    path: "/portfolio-details",
    mainImgSrc: "assets/img/home2/portfolio-01.jpg",
    showCaseColumnWidth: "col-lg-5",
  },
  {
    name: "Smart Design, Smarter Solutions.",
    tags: ["Logs", "Color", "Typography"],
    path: "/portfolio-details",
    mainImgSrc: "assets/img/home2/portfolio-01.jpg",
    showCaseColumnWidth: "col-lg-5",
  },
  {
    name: "Smart Design, Smarter Solutions.",
    tags: ["Logs", "Color", "Typography"],
    path: "/portfolio-details",
    mainImgSrc: "assets/img/home2/portfolio-01.jpg",
    showCaseColumnWidth: "col-lg-6",
  },
];

export const allTeamMembers = Array.from({ length: 12 }).map((_, index) => {
  return {
    key: index + 1,
  };
});

export const allPartners = Array.from({ length: 12 }).map(
  () => "assets/img/home1/partner-01.png"
);

export const navBarData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "#",
    subPaths: allServices.map((data) => {
      return {
        name: data.name,
        path: data.path,
      };
    }),
  },
  {
    name: "Our Work",
    path: "/portfolio-manonery",
  },
  {
    name: "Our Team",
    path: "/our-team",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const contactInformation = {
  phoneNo: {
    number: "+91 90752 74002",
    numberLink: "tel:+919075274002",
  },
  email: {
    email: "rudisn2002@gmail.com",
    emailLink: "mailto:rudisn2002@gmail.com",
  },
  address: {
    address: "Harikamal Plaza, First Floor, Shrirampur Maharashtra, 413709",
    addressLink:
      "https://www.google.com/maps/place/Bhagwati+Sugar+Sales/@19.616699,74.6563539,20.42z/data=!4m6!3m5!1s0x3bdc8bf65b2c50e1:0xec2894f6dd7dc7bb!8m2!3d19.6170315!4d74.6561317!16s%2Fg%2F11vt2zxnd1?entry=ttu",
  },
  socialLinks: [
    {
      type: "Instagram",
      link: "https://instagram.com/rudisn__/",
      icon: <i className="bi bi-instagram" />,
    },
    {
      type: "Behance",
      link: "https://www.behance.net/rudisn",
      icon: <i className="bi bi-behance" />,
    },
    {
      type: "Dribble",
      link: "https://dribbble.com/rudisn",
      icon: <i className="bi bi-dribbble" />,
    },
    {
      type: "Twitter",
      link: "https://twitter.com/rudisn_twi",
      icon: <i className="bi bi-twitter-x" />,
    },
  ],
};

export const heroData = {
  heading: (
    <h1 className="text-animation2">
      We are a <span>Full-Service</span> Agency.
    </h1>
  ),
  description: (
    <p>
      Your business deserves the best—service without restrictions. We're here
      to facilitate <span>growth</span> with <span>attractive</span> and{" "}
      <span>practical</span> solutions.
    </p>
  ),
  heroImgSrc: "assets/img/home2/banner-img.png",
  marqueeText: allServices.map((data) => data.name),
};

export const aboutUsData = {
  aboutUs:
    "Rudisn Agency is a full-service digital agency dedicated to helping businesses grow and thrive in the digital age.",
  aboutUs2:
    "Our mission is to deliver exceptional service without restrictions, ensuring our clients receive attractive and practical solutions tailored to their unique needs.",
  totalProjects: allProjects.length,
};

export const servicesData = {
  heading:
    "Offer a wide range of services to help businesses establish and enhance their online presence.",
  services: allServices,
};

export const counterData = [
  {
    title: "Professional Experts",
    value: allTeamMembers.length,
  },
  {
    title: "Completed Projects",
    value: allProjects.length,
  },
  {
    title: "Year of Experienece",
    value: 6,
  },
];

export const solutionData = {
  description:
    "We emphasize understanding client goals, creating user-centric designs, adhering to development best practices, and ensuring comprehensive documentation and support.",
  allSolutions: [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={70}
          height={70}
          viewBox="0 0 70 70"
        >
          <g>
            <path d="M67.6527 16.0958C68.7855 14.6144 67.827 11.5646 65.5614 12.436C60.246 14.5273 54.7564 19.1456 51.1838 23.6767C47.4368 28.4693 46.7397 34.5689 48.4825 40.3199C51.0095 48.6851 58.4161 54.1748 65.5614 58.6188C68.8726 60.7101 71.8353 55.4818 68.6112 53.3905C63.383 50.1665 57.5448 46.071 54.9307 40.3199C52.9265 35.7888 52.9265 30.6477 56.2377 26.6394C59.5489 22.7182 64.4286 20.1041 67.6527 16.0958ZM1.42836 53.3905C-1.88286 55.3947 1.16694 60.6229 4.47816 58.6188C11.6234 54.1748 18.943 48.6851 21.5571 40.3199C23.2998 34.7432 22.6899 28.6435 19.1172 24.0253C15.6317 19.407 9.96781 14.6144 4.5653 12.5231C2.29973 11.6518 1.25408 14.7016 2.474 16.1829C5.61095 20.1041 10.3164 22.7182 13.6276 26.4651C17.1131 30.4734 17.2873 35.7017 15.196 40.4942C12.4948 46.071 6.56946 50.1665 1.42836 53.3905ZM53.3622 1.36957C50.1381 6.59781 46.0426 12.436 40.2916 15.0501C35.7604 17.0543 30.6193 17.0543 26.611 13.7431C22.6027 10.4319 19.9886 5.55216 15.9803 2.32808C14.5861 1.1953 11.5363 2.24094 12.4077 4.50651C14.499 9.82189 19.1172 15.3115 23.6484 18.8842C28.4409 22.6311 34.5405 23.3282 40.2916 21.5854C48.6568 19.0584 54.1464 11.6518 58.5904 4.50651C60.5946 1.1953 55.4535 -1.85451 53.3622 1.36957ZM58.5904 65.5898C54.1464 58.4445 48.6568 51.125 40.2916 48.5108C34.7148 46.7681 28.6152 47.3781 23.9969 50.9507C19.3786 54.4362 14.5861 60.1001 12.4948 65.5026C11.6234 67.7682 14.6732 68.8138 16.1546 67.5939C20.0757 64.457 22.6899 59.7516 26.4368 56.4403C30.4451 52.9548 35.6733 52.7806 40.4659 54.8719C46.2169 57.486 50.2252 63.3242 53.5365 68.5524C55.4535 71.8636 60.5946 68.901 58.5904 65.5898Z" />
          </g>
        </svg>
      ),
      title: "Discovery and Consultation.",
      description:
        "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
      options: ["Client Meeting.", "Needs Assessment.", "Strategic Planning."],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={70}
          height={70}
          viewBox="0 0 70 70"
        >
          <path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z" />
          <path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z" />
          <path
            d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z"
            fill="#F5BEBE"
          />
          <path
            d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z"
            fill="#F5BEBE"
          />
        </svg>
      ),
      title: "Design and Architecture",
      description:
        "Create a user-centric design for software interfaces, websites, or applications.",
      options: ["Wireframing.", "Design Mockups.", "Implementation."],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={70}
          height={70}
          viewBox="0 0 70 70"
        >
          <path d="M60.9 25.69H44.31V9.1C44.31 7.91 45.22 7 46.41 7H60.9C62.09 7 63 7.91 63 9.1V23.59C63 24.71 62.09 25.69 60.9 25.69ZM44.31 44.31H25.69V27.79C25.69 26.6 26.6 25.69 27.79 25.69H44.38V44.31H44.31ZM23.59 63H9.1C7.91 63 7 62.09 7 60.9V46.41C7 45.22 7.91 44.31 9.1 44.31H25.69V60.9C25.69 62.09 24.71 63 23.59 63ZM9.1 7H22.54C23.73 7 24.29 8.4 23.45 9.24L9.24 23.45C8.4 24.29 7 23.66 7 22.54V9.1C7 7.91 7.91 7 9.1 7Z" />
          <path d="M60.9001 63.0001H46.4101C45.2201 63.0001 44.3101 62.0901 44.3101 60.9001V44.3101H60.9001C62.0901 44.3101 63.0001 45.2201 63.0001 46.4101V60.9001C63.0001 62.0901 62.0901 63.0001 60.9001 63.0001Z" />
        </svg>
      ),
      title: "Development",
      description:
        "Begin the development process, following coding standards and best practices.",
      options: [
        "Testing Plans.",
        "Bug Fixing.",
        "Agile Development.",
        "Continuous Integration.",
      ],
    },
    {
      icon: (
        <svg
          width={70}
          height={52}
          viewBox="0 0 70 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.87109 17.9175H15.6444V51.0733H8.87109V17.9175ZM20.5935 17.9175H27.3668V51.0733H20.5935V17.9175ZM31.8339 17.9175H38.6072V51.0733H31.8339V17.9175Z" />
          <path
            d="M60.0751 26.3969C60.0751 34.3723 53.7819 40.9057 45.8989 41.2947V45.5129C56.1078 45.1203 64.2926 36.6968 64.2926 26.3967C64.2926 15.8472 55.7071 7.26465 45.1542 7.26465H16.0967V11.4804H45.1544C53.3817 11.4804 60.0752 18.1718 60.0752 26.3968L60.0751 26.3969Z"
            fill="#F5BEBE"
          />
          <path
            d="M45.1548 1.55981H16.0971V5.77558H45.1548C56.5291 5.77558 65.7826 15.0263 65.7826 26.3969C65.7826 37.5183 56.9301 46.6101 45.8995 47.0034V51.2229C59.2561 50.8279 70 39.843 70 26.3969C70 12.7017 58.8545 1.55981 45.1548 1.55981ZM11.0506 5.52314C11.0506 2.4777 8.572 0 5.52537 0C2.47874 0 0 2.4777 0 5.52314C0 8.56858 2.47874 11.0463 5.52537 11.0463C8.572 11.0463 11.0506 8.56858 11.0506 5.52314Z"
            fill="#F5BEBE"
          />
        </svg>
      ),
      title: "Documentation and Launch.",
      description:
        "Create comprehensive technical documentation, including manuals, guides, and code documentation.",
      options: [
        "Deployment.",
        "User Training.",
        "Support & Maintenance.",
        "Feedback & Iteration.",
      ],
    },
  ],
};

export const projectsData = {
  totalProjects: allProjects.length,
  description:
    "Offer a wide range of services to help businesses establish and enhance their online presence.",
  allProjects: allProjects,
};

export const testimonalsData = [
  {
    imageSrc: "assets/img/home2/testimonial-img-01.png",
    heading: "Great Agency!",
    description:
      "By actively seeking, analyzing, and acting upon feedback, a digital agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.",
    person: "Mr. Daniel Scoot",
    post: "Catch, CEO",
  },
  {
    imageSrc: "assets/img/home2/testimonial-img-01.png",
    heading: "Great Agency!",
    description:
      "By actively seeking, analyzing, and acting upon feedback, a digital agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.",
    person: "Mr. Daniel Scoot",
    post: "Catch, CEO",
  },
  {
    imageSrc: "assets/img/home2/testimonial-img-01.png",
    heading: "Great Agency!",
    description:
      "By actively seeking, analyzing, and acting upon feedback, a digital agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.",
    person: "Mr. Daniel Scoot",
    post: "Catch, CEO",
  },
  {
    imageSrc: "assets/img/home2/testimonial-img-01.png",
    heading: "Great Agency!",
    description:
      "By actively seeking, analyzing, and acting upon feedback, a digital agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.",
    person: "Mr. Daniel Scoot",
    post: "Catch, CEO",
  },
];

export const technologyData = {
  description:
    "We use the latest and most advanced technologies to build efficient and scalable applications.",
  categories: [
    {
      id: "front",
      title: "Front-end",
      technologies: [
        { name: "HTML", icon: "assets/img/home2/icon/html.svg", big: true },
        { name: "CSS", icon: "assets/img/home2/icon/css.svg" },
        { name: "JavaScript", icon: "assets/img/home2/icon/javascript.svg" },
        { name: "Vue Js", icon: "assets/img/home2/icon/vue.svg" },
        { name: "React Js", icon: "assets/img/home2/icon/react.svg" },
        {
          name: "Angular Js",
          icon: "assets/img/home2/icon/angular.svg",
          big: true,
        },
        { name: "D3 Js", icon: "assets/img/home2/icon/d3.svg" },
        { name: "JQuery", icon: "assets/img/home2/icon/jquery.svg" },
        { name: "TypeScript", icon: "assets/img/home2/icon/typescript.svg" },
        { name: "GraphQL", icon: "assets/img/home2/icon/graphql.svg" },
      ],
    },
    {
      id: "back",
      title: "Back-end",
      technologies: [
        {
          name: "Node Js",
          icon: "assets/img/home2/icon/node-js.svg",
          big: true,
        },
        { name: "Ruby", icon: "assets/img/home2/icon/ruby.svg" },
        { name: "Django", icon: "assets/img/home2/icon/django.svg" },
        { name: "Express Js", icon: "assets/img/home2/icon/express-js.svg" },
        { name: "ASP.net", icon: "assets/img/home2/icon/asp.svg" },
        {
          name: "Laravel",
          icon: "assets/img/home2/icon/laravel.svg",
          big: true,
        },
        { name: "Firebase", icon: "assets/img/home2/icon/firebase.svg" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile",
      technologies: [
        {
          name: "Flutter",
          icon: "assets/img/home2/icon/flutter.svg",
          big: true,
        },
        { name: "Android", icon: "assets/img/home2/icon/android.svg" },
        { name: "IOS App", icon: "assets/img/home2/icon/ios.svg" },
        { name: "Firebase", icon: "assets/img/home2/icon/firebase.svg" },
        { name: "React Native", icon: "assets/img/home2/icon/react.svg" },
        { name: "Swift", icon: "assets/img/home2/icon/swift.svg", big: true },
        { name: "Java", icon: "assets/img/home2/icon/java.svg" },
        { name: "Kotlin", icon: "assets/img/home2/icon/kotlin.svg" },
      ],
    },
  ],
};

export const footerData = {
  title: (
    <h2>
      Let’s <span>TALK</span>
    </h2>
  ),
  description:
    " Crafting a contact text for a digital agency involves providing essential information for potential clients or collaborators to reach out.",
};
