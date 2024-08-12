export const logoUrl = "/rudisn-logo.svg";
export const baseUrl = "https://www.rudisn.com";
//  These are the constants for project categories
// const uiDevelopment = { value: "ui-ux", label: "UI-UX" };
// const cloud = { value: "cloud", label: "Cloud" };
// const frontend = { value: "frontend", label: "Frontend" };
// const backend = { value: "backend", label: "Backend" };
const fullStack = { value: "fullstack", label: "Full Stack" };
const eCommerce = { value: "e-commerce", label: "E-Commerce" };

export const allServices = [
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    path: "/services/ui-ux",
    description:
      "Creating intuitive and engaging user interfaces and experiences through research and design.",
    tags: [
      "User Research",
      "Prototyping",
      "Interaction Design",
      "Wireframing",
      "Visual Design",
    ],
    heroImages: [
      "/assets/images/services/ui-ux/banner-1.svg",
      "/assets/images/services/ui-ux/banner-2.svg",
      "/assets/images/services/ui-ux/banner-3.svg",
    ],
    serviceOverview: [
      "Our UI/UX Design services aim to create seamless and engaging digital experiences. Through a combination of research, prototyping, and visual design, we ensure that every interaction is intuitive and enjoyable.",
      "Our team works closely with clients to understand their needs and the needs of their users. This collaborative approach allows us to deliver designs that not only look great but also function perfectly.",
    ],
    keyFeatures: [
      "Comprehensive user research, detailed wireframing and prototyping, and interactive design focus on understanding target audience needs, visualizing concepts, and creating seamless user journeys.",
      "High-fidelity visual design and continuous iteration ensure the final product is functional, aesthetically pleasing, and refined based on user feedback.",
    ],
    process: [
      {
        heading: "Discovery",
        description:
          "Gathering relevant information through interviews and user research to understand project requirements and user needs.",
      },
      {
        heading: "Design",
        description:
          "Creating wireframes, prototypes, and visual designs to map out user flows and interface layouts.",
      },
      {
        heading: "Development",
        description:
          "Collaborating with developers to ensure the design is implemented accurately and efficiently.",
      },
      {
        heading: "Testing & Iteration",
        description:
          "Conducting usability tests and gathering feedback to make necessary adjustments and improvements.",
      },
    ],

    faqs: [
      {
        question: "What is UI/UX Design?",
        answer:
          "UI/UX Design involves creating intuitive and engaging user interfaces and experiences through research and design.",
      },
      {
        question: "What services do you offer in UI/UX Design?",
        answer:
          "We offer comprehensive user research, prototyping, interaction design, wireframing, and visual design to create seamless and engaging digital experiences.",
      },
      {
        question: "How does your UI/UX design process work?",
        answer:
          "Our process includes discovery through user research, designing wireframes and prototypes, collaborating with developers for accurate implementation, and continuous testing and iteration to refine the design.",
      },
      {
        question: "Why is user research important in UI/UX Design?",
        answer:
          "User research helps us understand the needs and preferences of the target audience, ensuring that the designs we create are user-centered and effective.",
      },
      {
        question:
          "How do you ensure the designs are both functional and aesthetically pleasing?",
        answer:
          "We use high-fidelity visual design and continuous iteration based on user feedback to ensure the final product is both functional and visually appealing.",
      },
      {
        question: "Can you work with our development team?",
        answer:
          "Yes, we collaborate closely with developers to ensure the design is implemented accurately and efficiently.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    path: "/services/web-development",
    description:
      "Building and maintaining websites to ensure optimal performance and user experience.",
    tags: [
      "Frontend",
      "Backend",
      "Full-Stack",
      "E-Commerce",
      "Custom Solutions",
    ],
    heroImages: [
      "/assets/images/services/website-development/banner-1.svg",
      "/assets/images/services/website-development/banner-2.svg",
      "/assets/images/services/website-development/banner-3.svg",
      "/assets/images/services/website-development/banner-4.svg",
      "/assets/images/services/website-development/banner-5.svg",
    ],
    serviceOverview: [
      "Our Web Development services cover the full spectrum of development needs, from frontend and backend development to full-stack solutions and e-commerce platforms. We focus on creating custom solutions that meet the unique requirements of each client.",
      "Our team is dedicated to ensuring that every website we build is optimized for performance, scalability, and user experience. We pride ourselves on delivering high-quality web solutions that drive results and enhance online presence.",
    ],
    keyFeatures: [
      "Responsive frontend development, robust backend capabilities, and full-stack services ensure a seamless and comprehensive web development process, tailored to meet specific client needs.",
      "Custom e-commerce solutions and bespoke web designs address unique business challenges, providing optimized, scalable, and high-performance websites.",
    ],
    process: [
      {
        heading: "Discovery & Planning",
        description:
          "Gathering relevant information through interviews and research to understand project requirements and goals.",
      },
      {
        heading: "Design & Prototyping",
        description:
          "Creating detailed designs and prototypes to visualize the website layout and user experience before development.",
      },
      {
        heading: "Development & Testing",
        description:
          "Developing the website using best practices and testing thoroughly to ensure optimal performance and functionality.",
      },
      {
        heading: "Launch & Maintenance",
        description:
          "Launching the website and providing ongoing maintenance and support to keep it running smoothly and up-to-date.",
      },
    ],

    faqs: [
      {
        question: "What is web development?",
        answer:
          "Web development involves building and maintaining websites to ensure optimal performance and user experience.",
      },
      {
        question: "What services do you offer in web development?",
        answer:
          "We offer frontend, backend, and full-stack development, custom solutions, and e-commerce platforms to meet the unique requirements of each client.",
      },
      {
        question: "How does your web development process work?",
        answer:
          "Our process includes discovery and planning through interviews and research, design and prototyping, development and testing, and finally, launch and maintenance.",
      },
      {
        question: "Why is responsive frontend development important?",
        answer:
          "Responsive frontend development ensures that websites function well across various devices and screen sizes, providing a seamless user experience.",
      },
      {
        question: "Do you offer custom e-commerce solutions?",
        answer:
          "Yes, we provide custom e-commerce solutions tailored to address unique business challenges, ensuring optimized, scalable, and high-performance websites.",
      },
      {
        question: "What kind of ongoing support do you provide after launch?",
        answer:
          "We offer ongoing maintenance and support to keep your website running smoothly and up-to-date, ensuring it remains optimized and secure.",
      },
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    path: "/services/app-development",
    description:
      "Developing mobile applications for various platforms to enhance user engagement and functionality.",
    tags: [
      "IOS",
      "Android",
      "Cross-Platform Apps",
      "Maintenance",
      "User Testing",
    ],
    heroImages: [
      "/assets/images/services/app-development/banner-1.svg",
      "/assets/images/services/app-development/banner-2.svg",
      "/assets/images/services/app-development/banner-3.svg",
      "/assets/images/services/app-development/banner-4.svg",
      "/assets/images/services/app-development/banner-5.svg",
    ],
    serviceOverview: [
      "Our App Development services cover the full lifecycle of mobile app development, from concept to launch and beyond. We specialize in creating high-quality iOS, Android, and cross-platform apps that engage users and provide a seamless experience.",
      "Our experienced team is committed to delivering apps that not only meet but exceed client expectations. We focus on functionality, performance, and user-centric design to ensure that every app we develop adds significant value to our clients' businesses.",
    ],
    keyFeatures: [
      "Native iOS and Android app development, along with cross-platform solutions using frameworks like Flutter and React Native, to ensure apps leverage the full potential of each platform and work seamlessly across devices.",
      "Comprehensive maintenance, rigorous user testing, and custom app solutions tailored to specific client needs to keep apps performing optimally and providing an engaging user experience.",
    ],
    process: [
      {
        heading: "Discovery & Planning",
        description:
          "Gathering relevant information through interviews and research to understand project requirements and goals.",
      },
      {
        heading: "Design & Prototyping",
        description:
          "Creating detailed designs and prototypes to visualize the app layout and user experience before development.",
      },
      {
        heading: "Development & Testing",
        description:
          "Developing the app using best practices and testing thoroughly to ensure optimal performance and functionality.",
      },
      {
        heading: "Launch & Maintenance",
        description:
          "Launching the app and providing ongoing maintenance and support to keep it running smoothly and up-to-date.",
      },
    ],

    faqs: [
      {
        question: "What is app development?",
        answer:
          "App development involves creating mobile applications for various platforms to enhance user engagement and functionality.",
      },
      {
        question: "What services do you offer in app development?",
        answer:
          "We offer native iOS and Android app development, cross-platform app solutions, maintenance, and user testing to ensure high-quality apps that meet client needs.",
      },
      {
        question: "How does your app development process work?",
        answer:
          "Our process includes discovery and planning through interviews and research, design and prototyping, development and testing, and finally, launch and maintenance.",
      },
      {
        question: "Do you develop cross-platform apps?",
        answer:
          "Yes, we develop cross-platform apps using frameworks like Flutter and React Native to ensure they work seamlessly across different devices.",
      },
      {
        question: "Why is user testing important in app development?",
        answer:
          "User testing ensures that the app meets user expectations and functions correctly, providing a smooth and engaging user experience.",
      },
      {
        question: "What kind of ongoing support do you provide after launch?",
        answer:
          "We offer comprehensive maintenance and support to keep your app running smoothly and up-to-date, ensuring it remains optimized and secure.",
      },
    ],
  },
  {
    slug: "cloud",
    name: "Cloud Service",
    path: "/services/cloud",
    description:
      "Providing scalable cloud solutions to enhance business agility and performance.",
    tags: ["Migration", "Management", "Security", "DevOps"],
    heroImages: [
      "/assets/images/services/cloud/banner-1.svg",
      "/assets/images/services/cloud/banner-2.svg",
      "/assets/images/services/cloud/banner-3.svg",
      "/assets/images/services/cloud/banner-4.svg",
    ],
    serviceOverview: [
      "Our Cloud Service offerings provide businesses with scalable and reliable cloud solutions. We facilitate cloud migration, manage infrastructure, ensure security, and implement DevOps practices to optimize operations.",
      "Our experts deliver solutions that boost business agility and performance. We work closely with clients to understand their needs and tailor solutions that drive growth and innovation.",
    ],
    keyFeatures: [
      "Seamless migration to the cloud, with ongoing management to ensure performance, cost-efficiency, and reliability.",
      "Robust security measures, DevOps practices for automation and collaboration, and custom cloud solutions designed to meet specific business requirements.",
    ],
    process: [
      {
        heading: "Discovery & Planning",
        description:
          "Gathering information through interviews and assessments to understand project requirements and goals.",
      },
      {
        heading: "Design & Architecture",
        description:
          "Creating designs and architectures to visualize the cloud infrastructure and ensure it meets business needs.",
      },
      {
        heading: "Migration & Implementation",
        description:
          "Executing the migration plan and implementing cloud solutions while minimizing disruption to operations.",
      },
      {
        heading: "Management & Optimization",
        description:
          "Providing ongoing management and optimization of cloud infrastructure to ensure efficiency and security.",
      },
    ],

    faqs: [
      {
        question: "What is cloud service?",
        answer:
          "Cloud service provides scalable cloud solutions to enhance business agility and performance.",
      },
      {
        question: "What services do you offer in cloud service?",
        answer:
          "We offer cloud migration, management, security solutions, and DevOps practices for optimized operations and performance.",
      },
      {
        question: "How does your cloud service process work?",
        answer:
          "Our process includes discovery and planning, design and architecture, migration and implementation, followed by ongoing management and optimization.",
      },
      {
        question: "Why is cloud migration important for businesses?",
        answer:
          "Cloud migration offers scalability, cost-efficiency, and enhanced performance, enabling businesses to focus on growth and innovation.",
      },
      {
        question: "How do you ensure cloud security?",
        answer:
          "We implement robust security measures to protect cloud infrastructure, ensuring data integrity and compliance with industry standards.",
      },
      {
        question:
          "What kind of ongoing support do you provide after cloud migration?",
        answer:
          "We offer continuous management and optimization of your cloud infrastructure to ensure it remains efficient, cost-effective, and secure.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    path: "/services/seo",
    description:
      "Optimizing websites to rank higher on search engines and attract more organic traffic.",
    tags: [
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Optimization",
      "Technical SEO",
    ],
    heroImages: [
      "/assets/images/services/seo/banner-1.svg",
      "/assets/images/services/seo/banner-2.svg",
      "/assets/images/services/seo/banner-3.svg",
      "/assets/images/services/seo/banner-4.svg",
    ],
    serviceOverview: [
      "Our SEO services are designed to enhance online visibility and drive organic traffic through effective keyword research, on-page optimization, and off-page strategies.",
      "We deliver customized SEO strategies that align with client goals, ensuring improved search engine rankings and sustained online growth.",
    ],
    keyFeatures: [
      "In-depth keyword research and on-page optimization to boost search engine visibility and target high-traffic keywords.",
      "Effective off-page SEO, content optimization, and technical SEO to enhance website authority, engagement, and performance.",
    ],
    process: [
      {
        heading: "Keyword Research",
        description:
          "Identifying high-traffic, relevant keywords to drive content strategy and optimization.",
      },
      {
        heading: "On-Page Optimization",
        description:
          "Enhancing website content, meta tags, and structure to improve search engine visibility.",
      },
      {
        heading: "Content Creation",
        description:
          "Developing high-quality, search-optimized content that engages your target audience.",
      },
      {
        heading: "Link Building",
        description:
          "Acquiring high-quality backlinks to boost website authority and search engine rankings.",
      },
    ],

    faqs: [
      {
        question: "What is SEO?",
        answer:
          "SEO involves optimizing websites to rank higher on search engines and attract more organic traffic.",
      },
      {
        question: "What services do you offer in SEO?",
        answer:
          "We offer keyword research, on-page SEO, off-page SEO, content optimization, and technical SEO to improve search engine rankings.",
      },
      {
        question: "How does your SEO process work?",
        answer:
          "Our process includes keyword research, on-page optimization, content creation, and link building to enhance search engine visibility and authority.",
      },
      {
        question: "Why is keyword research important in SEO?",
        answer:
          "Keyword research identifies relevant and high-traffic keywords, which are crucial for effective content optimization and improved search rankings.",
      },
      {
        question: "How do you optimize website content for SEO?",
        answer:
          "We optimize content by refining meta tags, improving site structure, and ensuring relevance and quality to enhance search engine visibility.",
      },
      {
        question: "What kind of off-page SEO strategies do you use?",
        answer:
          "We implement strategies like acquiring high-quality backlinks to strengthen your website's authority and improve search engine rankings.",
      },
    ],
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    path: "/services/cyber-security",
    description:
      "Protecting systems, networks, and programs from digital attacks.",
    tags: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Threat Intelligence",
      "Security Audits",
      "Incident Response",
    ],
    heroImages: [
      "/assets/images/services/cyber-security/banner-1.svg",
      "/assets/images/services/cyber-security/banner-2.svg",
      "/assets/images/services/cyber-security/banner-3.svg",
      "/assets/images/services/cyber-security/banner-4.svg",
    ],
    serviceOverview: [
      "Our Cyber Security services protect your systems, networks, and programs from digital threats. We offer comprehensive solutions including vulnerability assessments, penetration testing, and threat intelligence to ensure robust security.",
      "Our experts deliver thorough security audits and incident response services to identify risks, respond swiftly to threats, and secure your digital assets.",
    ],
    keyFeatures: [
      "In-depth vulnerability assessments and penetration testing to uncover system weaknesses and simulate potential cyber attacks.",
      "Advanced threat intelligence, security audits, and responsive incident management to proactively address threats and minimize the impact of breaches.",
    ],
    process: [
      {
        heading: "Assessment & Planning",
        description:
          "Conducting thorough assessments and planning to understand security needs and establish a protective strategy.",
      },
      {
        heading: "Implementation",
        description:
          "Deploying security technologies and measures to safeguard systems and data against potential threats.",
      },
      {
        heading: "Monitoring & Management",
        description:
          "Ongoing monitoring of systems for threats and managing security protocols to maintain continuous protection.",
      },
      {
        heading: "Response & Recovery",
        description:
          "Rapid response to security incidents and support for recovery efforts to mitigate impact and restore operations.",
      },
    ],

    faqs: [
      {
        question: "What is cyber security?",
        answer:
          "Cyber security involves protecting systems, networks, and programs from digital attacks to maintain data integrity and privacy.",
      },
      {
        question: "What services do you offer in cyber security?",
        answer:
          "We provide vulnerability assessments, penetration testing, threat intelligence, security audits, and incident response to protect your digital assets.",
      },
      {
        question: "How does your cyber security process work?",
        answer:
          "Our process includes assessment and planning, implementation of security measures, continuous monitoring and management, and response and recovery for handling security incidents.",
      },
      {
        question: "Why are vulnerability assessments important?",
        answer:
          "Vulnerability assessments identify system weaknesses, enabling us to address potential risks before they can be exploited by attackers.",
      },
      {
        question: "What is penetration testing?",
        answer:
          "Penetration testing simulates cyber attacks to evaluate the effectiveness of your security measures and identify vulnerabilities.",
      },
      {
        question: "How do you handle security incidents?",
        answer:
          "We provide immediate response to security incidents and assist with recovery efforts to minimize impact and restore normal operations swiftly.",
      },
    ],
  },
];

export const allProjects = [
  {
    projectCategory: fullStack.value,
    name: "Caves Studio",
    slug: "caves-studio",
    tags: [
      "Interior Design",
      "Architecture",
      "Furniture & Decor",
      "Exterior design",
    ],
    path: "/our-work/caves-studio",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Design and Architecture",
      client: "Ar Vinayak Nikam",
      links: [
        {
          type: "Website",
          url: "https://cavesstudio.com/",
        },
        {
          type: "Design",
          url: "https://www.figma.com/proto/cVKfqWkckXUJgHv3vxR1tR/Caves-Studio-Nashik?t=jHcLhKUu55ugfui5-1&node-id=28-1317",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "We created a custom full stack website for Caves Studio, an interior design company. The project aimed to create a landing page that effectively showcases the company's portfolio and services.",
      "Key tasks included UI design, backend development, integrating a custom Content Management System (CMS), creating a custom admin dashboard, and adding a blog section. The design process focused on crafting a user-friendly interface that highlights the company's portfolio.",
    ],
    challenges: {
      description:
        "The UI/UX design and development process for Caves Studio faced several key challenges:",
      points: [
        "Aligning the design with Caves Studio's brand identity and making it appealing to the target audience.",
        "Ensuring the website is responsive and adaptive, providing a seamless user experience across various devices and screen sizes.",
        "Creating an intuitive and easy-to-use custom dashboard for content management, making it simple for non-technical users to update and maintain the website.",
        "Designing an engaging and user-friendly blog section to showcase the company's portfolio and services.",
        "Implementing efficient data management using Google Sheets and MongoDB.",
        "Ensuring the landing page is highly responsive and visually engaging.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      points: [
        "Crafted a cohesive and visually appealing UI design that reflects Caves Studio's brand identity, using modern design principles to create a professional and engaging look that resonates with the target audience.",
        "Designed a responsive layout using flexible grids and adaptive elements to ensure a consistent and smooth experience across all devices, from desktops to mobile phones.",
        "Developed an intuitive and user-friendly custom dashboard interface, focusing on clear navigation and a streamlined user experience to facilitate content management for users with varying technical skills.",
        "Created an interactive and engaging blog section layout, focusing on readability and user interaction, ensuring visitors find it easy to explore and engage with the content.",
        "Enhanced data management through integration with Google Sheets and MongoDB, ensuring efficient handling of data.",
        "Designed and developed a responsive and visually appealing landing page that highlights the company's portfolio, ensuring it is user-friendly across all devices.",
        "Executed the project from UI design to full deployment, ensuring a robust and scalable backend for smooth performance and functionality.",
        "Integrated a custom Content Management System (CMS) for efficient content updates and easy site management.",
        "Created a custom admin dashboard for efficient site management, allowing for easy updates and maintenance.",
        "Implemented a user-friendly blog section with a custom dashboard to streamline content creation and management, making it simple for non-technical users to update and maintain the blog.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: fullStack.value,
    name: "Entytle",
    slug: "entytle",
    tags: ["OEMs", "Aftermarket growth", "Installed Base Intelligence"],
    path: "/our-work/entytle",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Aftermarket Growth",
      client: "Vivek Joshi",
      links: [
        {
          type: "Website",
          url: "https://entytle.com/",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Our company played a crucial role in enhancing the website for Entytle.This project involved the development and maintenance of a WordPress website.",
      "Entytle is a purpose-built, AI-enabled platform that optimizes asset management. It provides insights and analytics to enhance efficiency, drive customer engagement, and maximize product value.",
    ],
    challenges: {
      description:
        "Entytle faced issues with website performance, content updates, and maintaining search engine rankings.",
      points: [
        "Website speed and performance metrics were suboptimal, causing slow load times and a poor user experience. Regular security vulnerabilities needed addressing.",
        "Content was outdated and inconsistent, failing to reflect the latest products and services. Integration of new blog posts, case studies, and other resources was lacking.",
        "Search engine rankings were not meeting expectations due to insufficient keyword research and on-page optimization. Tracking and analysis of website traffic and search rankings were inadequate.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      points: [
        "Monitored and analyzed website speed and performance metrics regularly. Implemented improvements to reduce load times and enhance user experience. Conducted periodic security checks and updates to safeguard the website against vulnerabilities.",
        "Updated website content to reflect the latest information, products, and services offered by Entytle. Ensured consistency and accuracy of content across all pages. Worked with the content team to integrate new blog posts, case studies, and other resources.",
        "Performed keyword research to identify opportunities for improved search rankings. Optimized on-page elements such as meta tags, headers, and image alt text. Tracked and analyzed website traffic and search rankings to inform future SEO strategies.",
        "Integrated plugins to enhance website functionality.",
        "Updated the UI to improve user experience.",
        "Integrated third-party scripts such as Google Analytics, Factors AI, and Tag Manager.",
        "Implemented regular backups and recovery processes to ensure data integrity.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Personal branding",
    slug: "personal-branding",
    tags: ["Portfolio", "Personal branding", "personal portfolio"],
    path: "/our-work/personal-branding",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Personal-branding",
      client: "Kushal Gohil",
      links: [
        {
          type: "Design",
          url: "https://www.figma.com/proto/ZGXuHzPCrwTiIGRomtEIkY/Portfolio-Revamp?t=5sDeFd7dwQTGwcXu-1&node-id=26-184",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Designed and developed a personal portfolio website for Mr.Kushal, highlighting his professional achievements and showcasing his work.",
      "Focused on creating a visually stunning and highly functional design that effectively communicates his personal brand.",
    ],
    challenges: {
      description:
        "He needed a personal portfolio website that would stand out, effectively showcase his work, and provide a seamless user experience and should have advanced animations.",
      points: [
        "Creating visually stunning animations that enhance the user experience.",
        "Ensuring the website remains highly responsive and performs well across devices.",
        "Developing a design that effectively communicates the client's professional skills and work.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      description:
        "To overcome these challenges, we implemented the following solutions:",
      points: [
        "Implemented advanced animations to create an engaging and dynamic user experience.",
        "Developed a responsive design that works seamlessly across devices.",
        "Crafted a portfolio layout that effectively showcases the client's work and professional achievements.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: fullStack.value,
    name: "Penny Wise",
    slug: "penny-wise",
    tags: [
      "Expense Tracking",
      "Expense Tracking Dashboard",
      "Finantial solutions",
    ],
    path: "/our-work/penny-wise",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Expense Tracking",
      client: "Open source Project",
      links: [
        {
          type: "Website",
          url: "https://pennywise.kushalgohil.com/",
        },
        {
          type: "Design",
          url: "https://www.figma.com/proto/0zMCxrGlYaUI2tlNX60KT1/Penny-Wise?t=6daIJrmzidmwXKij-1&node-id=24-1533",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Designed and developed a full fledged website for a open source project Penny Wise, an expense tracking website.",
      "Implemented an end-to-end expense tracking portal using the MERN stack and ShadCN UI.",
      "Built with Next.js, the project features a comprehensive dashboard for managing and analyzing expenses.",
      "Includes advanced analytical tools such as charts and graphs, and offers a premium membership option for additional features.",
      "This project is an open-source initiative.",
    ],
    challenges: {
      description:
        "The Penny Wise project presented several challenges common in full-stack development and advanced web applications.",
      points: [
        "Integrating the MERN stack effectively, Coordinating the use of MongoDB, Express.js, React.js, and Node.js to create a seamless end-to-end application required careful planning and implementation to ensure all components worked together efficiently.",
        "Designing and implementing a fully-fledged dashboard, Developing an interactive and user-friendly dashboard that includes various charts and graphs for expense analysis posed a challenge. Ensuring that the dashboard provided meaningful insights while remaining easy to use required thoughtful design and testing.",
        "Implementing a premium membership system, Creating a subscription-based model with restricted access to premium features involved developing a secure and functional system for user authentication, payment processing, and feature management.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      description:
        "To address the challenges faced in the Penny Wise project, the following solutions were implemented:",
      points: [
        "Balanced functionality with aesthetics, Employed a minimalist design approach that prioritized usability while incorporating advanced features. Ensured that the visual design complemented the functionality and enhanced user engagement.",
        "Seamlessly integrated the MERN stack, Developed a cohesive application by leveraging MongoDB for data storage, Express.js for server-side logic, React.js for the front-end, and Node.js for the backend. Ensured smooth data flow and functionality across the stack.",
        "Designed and implemented an advanced dashboard, Created a user-friendly and interactive dashboard using ShadCN UI components. Incorporated charts and graphs for effective data visualization, allowing users to analyze their expenses intuitively.",
        "Developed a robust premium membership system, Implemented a secure subscription model with user authentication and payment processing. Developed features that are only accessible to premium members, enhancing the application's value and functionality.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: fullStack.value,
    name: "Siddhidatri Aahar",
    slug: "siddhidatri-aahar",
    tags: [
      "Food company website",
      "Food Industry",
      "Chips Company",
      "Food Products",
    ],
    path: "/our-work/siddhidatri-aahar",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Food Industry",
      client: "Prince Kumar",
      links: [
        {
          type: "Website",
          url: "https://siddhidatriaahar.com/",
        },
        {
          type: "Design",
          url: "https://www.figma.com/proto/3XyLYKzZvH7nvgoqj04XqU/Siddhidatri-Aahar-(-UI-%2F-Landing-Page-)?t=33T7LO6WEJar8tSA-1&node-id=1-2",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Designed the UI/UX for Siddhidatri Aahar’s landing page, a company specializing in chips and other food products, to effectively showcase their offerings.",
      "Focused on creating a visually appealing and user-friendly interface that highlights their products.",
    ],
    challenges: {
      description: "The design process encountered several key challenges:",
      points: [
        "Creating a visually appealing design that effectively showcases the food products.",
        "Meeting the client’s specific requirements and expectations.",
        "Developing a responsive interface that works well across all devices.",
        "Designing a professional look that builds trust and credibility with users.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      description:
        "To address these challenges, we implemented the following solutions:",
      points: [
        "Designed a modern and professional UI that aligns with Siddhidatri Aahar's brand and effectively showcases their food products.",
        "Worked closely with the client to ensure their specific needs and feedback were integrated into the final design.",
        "Ensured the website is fully responsive, providing a seamless experience across desktops, tablets, and smartphones.",
        "Implemented a clean and trustworthy design using high-quality images, consistent branding, and a user-friendly layout.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Anand Industry",
    slug: "anand-industry",
    tags: ["Light Bulbs", "E-commerce", "Lighting Solutions"],
    path: "/our-work/anand-industry",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Light Bulbs Manufacturing",
      client: "Vinayak More",
      links: [
        {
          type: "Website",
          url: "https://anandaindustry.com/",
        },
        {
          type: "Design",
          url: "https://www.figma.com/proto/zS26xz9GuPs9BZZRJoxRIU/Ananda-Industry?t=1OSY4H8ZrCw34vKp-1&node-id=2-2",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Designed and developed a comprehensive e-commerce platform for Anand Industry, a light bulb manufacturing company.",
      "The project aimed to create an engaging and user-friendly online store that showcases their products and facilitates smooth transactions.",
      "The design process focused on crafting an intuitive interface to enhance user interaction, while the development ensured a fully functional e-commerce system.",
    ],
    challenges: {
      description:
        "Throughout the project, several challenges were encountered in both UI/UX design and development:",
      points: [
        "Creating a visually appealing design that effectively highlights light bulb products and aligns with the brand’s identity.",
        "Ensuring the interface is intuitive and easy for users to navigate, which involved balancing aesthetic appeal with functionality.",
        "Developing a responsive design to provide a consistent and seamless shopping experience across all devices.",
        "Integrating robust e-commerce functionalities using WooCommerce to handle online transactions smoothly.",
        "Ensuring the website performs well and remains responsive across various devices and screen sizes.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      points: [
        "Crafted a clean and attractive UI design that effectively showcases the light bulb products in an engaging manner.",
        "Implemented an intuitive layout that simplifies navigation, making it easy for users to find and purchase products.",
        "Ensured a fully responsive design, providing a consistent look and feel on all devices to enhance user experience.",
        "Developed a functional e-commerce platform with WooCommerce, ensuring smooth online transactions and user-friendly product management.",
        "Focused on usability and performance, ensuring the website operates efficiently and remains user-friendly across different devices.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Ghugrawala",
    slug: "ghugra-wala",
    tags: [
      "Food Website",
      "Food Product",
      "Food Website Design",
      "Food Industry",
    ],
    path: "/our-work/ghugra-wala",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "Food Industry",
      client: "Tejas Rathore",
      links: [
        {
          type: "Website",
          url: "https://ghughrawala.netlify.app/",
        },
        {
          type: "Design",
          url: "https://www.figma.com/proto/TdeoGExFWhxg5fTmEFmuR9/Ghughrawala?t=SFn4JeITQgHakB97-1&node-id=1-2",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Designed and developed a comprehensive landing page for Ghugra Wala, a food business based in Gujarat.",
      "The project focused on creating a visually appealing and user-friendly site that effectively highlights the company’s food offerings and engages visitors.",
    ],
    challenges: {
      description:
        "The project faced several challenges during both the design and development phases:",
      points: [
        "Creating a design that effectively showcases the food in an attractive and appetizing way.",
        "Ensuring the landing page is responsive and provides a seamless experience across different devices.",
        "Balancing aesthetics with functionality to make the site easy to navigate and engaging for users.",
        "Integrating features that highlight the company's offerings while maintaining a smooth user experience.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      points: [
        "Designed a clean and engaging interface that highlights the food offerings in an appealing manner.",
        "Used responsive design techniques to ensure the site looks great and functions well on all devices.",
        "Developed a straightforward layout that makes it easy for users to navigate and find information about the food.",
        "Implemented features that effectively communicate the company’s offerings and enhance the overall user experience.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Richee Agrotech",
    slug: "richee-agrotech",
    tags: ["E-commerce", "Organic Products", "Shopify"],
    path: "/our-work/richee-agrotech",
    mainImgSrc: "/assets/img/home2/portfolio-01.jpg",
    metaData: {
      category: "E-commerce",
      client: "Richa Jain",
      links: [
        {
          type: "Website",
          url: "https://richeeagrotech.com/",
        },
        {
          type: "Design",
          url: "https://www.figma.com/proto/AXruRo71ZvnmrSiQkORmTZ/Richee-agrotech-Ecommerce-Website?t=zxBuh2zaxMij6hYb-1&node-id=1-2",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "Richee Agrotech is an e-commerce website focused on selling organic products.",
      "We designed the UI/UX and developed the entire e-commerce store using Shopify.",
      "The goal was to create a visually appealing, user-friendly platform to enhance the shopping experience.",
    ],
    challenges: {
      description:
        "The project faced several challenges during the design and development phases:",
      points: [
        "Creating a cohesive and visually appealing design that aligns with the brand’s organic product focus.",
        "Ensuring the Shopify store integrates seamlessly with the design for smooth functionality.",
        "Developing a responsive design that provides a consistent user experience across all devices.",
        "Meeting the client's specific requirements and vision for the website.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      description:
        "To overcome these challenges, we implemented the following solutions:",
      points: [
        "Developed a modern and engaging UI/UX design that highlights the organic products effectively.",
        "Integrated Shopify to build a robust e-commerce platform with seamless functionality.",
        "Ensured the design was fully responsive, offering a consistent user experience on all devices.",
        "Worked closely with the client to understand and meet their specific requirements and vision.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
  {
    projectCategory: eCommerce.value,

    name: "Kinmin",
    slug: "kinmin",
    tags: ["Snacks", "E-Commerce", "B2B", "WordPress"],
    path: "/our-work/kinmin",
    mainImgSrc: "/assets/img/home2/portfolio-02.jpg",
    metaData: {
      category: "E-Commerce",
      client: "Kinmin",
      links: [
        {
          type: "Website",
          url: "https://kinmin.co.in",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
      "/assets/img/innerpage/portfolio-details-thumb-img.jpg",
    ],
    projectOverview: [
      "We built a comprehensive e-commerce website for Kinmin, a snacks company, using WordPress. The project focused on delivering a fully customized design that met the client's expectations and exceeded them, resulting in high client satisfaction.",
      "The website features custom illustrations and banners, along with a complete B2B workflow and a backend dashboard. We handled the entire process from design to implementation, ensuring a smooth and user-friendly experience for both the client and the end-users.",
    ],
    challenges: {
      description:
        "The development and design of the Kinmin website came with its own set of challenges:",
      points: [
        "Meeting and exceeding the client’s design expectations with fully custom illustrations and banners.",
        "Developing a seamless e-commerce experience that caters to both B2B and B2C workflows.",
        "Creating a user-friendly backend dashboard for efficient management and updates.",
        "Ensuring the website's responsiveness and ease of navigation across various devices.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-page-img1.jpg",
    },
    solution: {
      points: [
        "Delivered a visually stunning and highly functional e-commerce website with custom illustrations and banners that aligned with the brand identity.",
        "Developed a comprehensive B2B workflow that streamlined business processes, making it easy for the client to manage orders and inventory.",
        "Created a robust backend dashboard that allows the client to manage content, orders, and customer interactions with ease.",
        "Ensured the website is fully responsive, providing a seamless user experience across all devices, from desktops to mobile phones.",
        "Handled the entire project from the initial design phase through to full implementation and deployment.",
      ],
      imageSrc: "/assets/img/innerpage/portfolio-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/portfolio-details-page-img2.jpg",
  },
];

export const allTeamMembers = [
  {
    name: "Kushal Gohil",
    designation: "Founder & CEO",
    imageSrc: "/assets/images/our-team/members/kushal-gohil.png",
  },
  {
    name: "Ketan",
    designation: "Software Developer",
    imageSrc: "/assets/images/our-team/members/ketan.png",
  },
  {
    name: "Abhishek",
    designation: "Cyber Security Expert",
    imageSrc: "/assets/images/our-team/members/abhishek.png",
  },
  {
    name: "Vishwas",
    designation: "Software Developer",
    imageSrc: "/assets/images/our-team/members/vishwas.png",
  },
  {
    name: "Harshal",
    designation: "Software Engineer",
    imageSrc: "/assets/images/our-team/members/harshal.png",
  },
  {
    name: "Karina",
    designation: "UI-UX Designer",
    imageSrc: "/assets/images/our-team/members/karina.png",
  },
  {
    name: "Sachin",
    designation: "Software Engineer",
    imageSrc: "/assets/images/our-team/members/team-member.png",
  },
  {
    name: "Atharva",
    designation: "Software Engineer",
    imageSrc: "/assets/images/our-team/members/atharva.png",
  },
  {
    name: "Tejas",
    designation: "Marketing Consultant",
    imageSrc: "/assets/images/our-team/members/team-member.png",
  },
  {
    name: "Tanay",
    designation: "Software Developer",
    imageSrc: "/assets/images/our-team/members/team-member.png",
  },
];

export const allPartners = [
  "/assets/images/partners/caves-studio.png",
  "/assets/images/partners/entytle.png",
  "/assets/images/partners/richee-agrotech.png",
  "/assets/images/partners/siddhidatri-aahar.png",
  "/assets/images/partners/ananda-industry.png",
  "/assets/images/partners/ghughra-wala.png",
  "/assets/images/partners/penny-wise.png",
];

export const contactInformation = {
  calendly: "https://calendly.com/rudisn2002/30min",
  phoneNo: {
    number: "+91 90752 74002",
    numberLink: "tel:+919075274002",
  },
  email: {
    email: "rudisn2002@gmail.com",
    emailLink: "mailto:rudisn2002@gmail.com",
  },
  address: {
    city: "Shrirampur, Maharashtra",
    address: "Harikamal Plaza, First Floor, Shrirampur Maharashtra, 413709",
    addressLink:
      "https://www.google.com/maps/place/Bhagwati+Sugar+Sales/@19.616699,74.6563539,20.42z/data=!4m6!3m5!1s0x3bdc8bf65b2c50e1:0xec2894f6dd7dc7bb!8m2!3d19.6170315!4d74.6561317!16s%2Fg%2F11vt2zxnd1?entry=ttu",
  },
  socialLinks: [
    {
      type: "Instagram",
      link: "https://instagram.com/rudisn__/",
      icon: <i class="ri-instagram-line"></i>,
    },
    {
      type: "Behance",
      link: "https://www.behance.net/rudisn",
      icon: <i class="ri-behance-line"></i>,
    },
    {
      type: "Dribble",
      link: "https://dribbble.com/rudisn",
      icon: <i class="ri-dribbble-line"></i>,
    },
    {
      type: "Twitter",
      link: "https://twitter.com/rudisn_twi",
      icon: <i class="ri-twitter-x-line"></i>,
    },
  ],
};

export const navBarData = [
  {
    name: "Home",
    path: "/",
    priority: 1,
    changefreq: "daily",
  },
  {
    name: "Services",
    path: "/services",
    subPaths: allServices.map((data) => {
      return {
        name: data.name,
        path: data.path,
      };
    }),
    priority: 0.8,
    changefreq: "monthly",
  },
  // {
  //   name: "Our Work",
  //   path: "/our-work",
  //   priority: 0.7,
  //   changefreq: "monthly",
  // },
  {
    name: "Our Team",
    path: "/our-team",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    name: "Contact Us",
    path: "/contact",
    priority: 0.7,
    changefreq: "monthly",
  },
];

export const heroData = {
  heading: (
    <h1 className="text-animation2">
      We are a <span>Full-Service</span> Company.
    </h1>
  ),
  description: (
    <p style={{ color: "white" }}>
      Your business deserves the best—service without restrictions. We're here
      to facilitate <span>growth</span> with <span>attractive</span> and{" "}
      <span>practical</span> solutions.
    </p>
  ),
  heroImgSrc: "/assets/images/hero/hero.png",
  marqueeText: allServices.map((data) => data.name),
};

export const aboutUsData = {
  aboutUs:
    "Rudisn is a full-service digital company dedicated to helping businesses grow and thrive in the digital age.",
  aboutUs2:
    "Our mission is to deliver exceptional service without restrictions, ensuring our clients receive attractive and practical solutions tailored to their unique needs.",
  totalProjects: allProjects.length,
  image1: "/assets/images/about-us/logo.png",
  image2: "/assets/images/about-us/name.png",
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
    title: "Years of Experience",
    value: new Date().getFullYear() - 2017,
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
    "Our success today is a testament to our clients, partners, and enduring business relationships, as well as the dedication of our team. We owe it all to them.",
  allProjects: allProjects,
};

export const testimonalsData = [
  {
    imageSrc: "/assets/images/testimonials/Dilipkumar-Jadhav.png",
    heading: "Website Maintenance",
    description:
      "Rudisn Agency has been great at keeping our website running smoothly and improving our SEO.",
    person: "Dilipkumar Jadhav",
    post: "Head Of Marketing, Entytle",
  },
  {
    imageSrc: "/assets/images/testimonials/testimonial.png",
    heading: "Landing Page",
    description:
      "Rudisn Agency made a beautiful and responsive landing page for us. Their work is fantastic.",
    person: "Vinayak Nikam",
    post: "Founder, Caves Studio",
  },
  {
    imageSrc: "/assets/images/testimonials/testimonial.png",
    heading: "E-commerce Store",
    description:
      "Rudisn Agency created a wonderful e-commerce store for our lights business. We are very happy with their work.",
    person: "Vinayak More",
    post: "Owner, Anand Industry",
  },
  {
    imageSrc: "/assets/images/testimonials/Nilesh-bang.png",
    heading: "Online Store",
    description:
      "We love the e-commerce store Rudisn Agency built for our organic farm. It's both attractive and easy to use.",
    person: "Nilesh Bang",
    post: "CTO, Richee Agrotech",
  },
  {
    imageSrc: "/assets/images/testimonials/Prince-Kumar.png",
    heading: "B2B Landing Page",
    description:
      "Rudisn Agency made a great landing page for our B2B snacks company. Their work is top-notch.",
    person: "Prince Kumar",
    post: "Founder, Quantum Labs",
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
        {
          name: "Figma",
          icon: "/assets/img/home2/icon/figma.svg",
          big: true,
        },
        { name: "HTML", icon: "/assets/img/home2/icon/html.svg" },
        { name: "CSS", icon: "/assets/img/home2/icon/css.svg" },
        {
          name: "Tailwind CSS",
          icon: "/assets/img/home2/icon/tailwindCSS.svg",
        },
        {
          name: "Bootstrap",
          icon: "/assets/img/home2/icon/bootstrap.svg",
        },
        {
          name: "Ant Design",
          icon: "/assets/img/home2/icon/ant-design.svg",
          big: true,
        },
        {
          name: "Material-UI",
          icon: "/assets/img/home2/icon/material-ui.svg",
        },
        {
          name: "shadcn-UI",
          icon: "/assets/img/home2/icon/shadcn-ui.svg",
        },
        {
          name: "Framer Motion",
          icon: "/assets/img/home2/icon/framer-motion.svg",
        },
        {
          name: "GSAP",
          icon: "/assets/img/home2/icon/gsap.svg",
        },
        { name: "JavaScript", icon: "/assets/img/home2/icon/javascript.svg" },
        { name: "TypeScript", icon: "/assets/img/home2/icon/typescript.svg" },
        { name: "React JS", icon: "/assets/img/home2/icon/react.svg" },
        {
          name: "Next JS",
          icon: "/assets/img/home2/icon/nextjs.svg",
        },
        {
          name: "Redux",
          icon: "/assets/img/home2/icon/redux.svg",
        },
        {
          name: "Angular JS",
          icon: "/assets/img/home2/icon/angular.svg",
        },
      ],
    },
    {
      id: "back",
      title: "Back-end",
      technologies: [
        {
          name: "Node Js",
          icon: "/assets/img/home2/icon/node-js.svg",
          big: true,
        },
        { name: "Django", icon: "/assets/img/home2/icon/django.svg" },
        { name: "Express Js", icon: "/assets/img/home2/icon/express-js.svg" },
        { name: "Nest JS", icon: "/assets/img/home2/icon/nestjs.svg" },
        { name: "Firebase", icon: "/assets/img/home2/icon/firebase.svg" },
        {
          name: "MongoDB",
          icon: "/assets/img/home2/icon/mongoDB.svg",
          big: true,
        },
        { name: "MySQL", icon: "/assets/img/home2/icon/mySQL.svg" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile and PWA",
      technologies: [
        {
          name: "Android",
          icon: "/assets/img/home2/icon/android.svg",
          big: true,
        },
        { name: "IOS App", icon: "/assets/img/home2/icon/ios.svg" },
        { name: "React Native", icon: "/assets/img/home2/icon/react.svg" },
        {
          name: "Flutter",
          icon: "/assets/img/home2/icon/flutter.svg",
        },
        { name: "Electron JS", icon: "/assets/img/home2/icon/electronjs.svg" },
      ],
    },
    {
      id: "no-code",
      title: "No Code",
      technologies: [
        {
          name: "WordPress",
          icon: "/assets/img/home2/icon/wordpress.svg",
          big: true,
        },
        {
          name: "Shopify",
          icon: "/assets/img/home2/icon/shopify.svg",
        },
        {
          name: "Webflow",
          icon: "/assets/img/home2/icon/webflow.svg",
        },
        {
          name: "Framer",
          icon: "/assets/img/home2/icon/framer.svg",
        },
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
  description: "We harvest your requirements into living products!",
};

export const teamsData = {
  backgroundSrc: "/assets/images/our-team/banner.png",
  heading: (
    <h1>
      Our Team <span>Members</span>
    </h1>
  ),
  description:
    "This is our team—experts, dedicated to delivering innovative and outstanding digital solutions.",
  allTeamMembers: allTeamMembers,
};

export const defaultMetaData = {
  title: "Rudisn",
  description:
    "Rudisn is a full-service digital company dedicated to helping businesses grow and thrive in the digital age.",
  keywords:
    "web development, UI/UX design, app development, cloud services, SEO, cyber security",
  author: "Rudisn Agency",
  canonical: baseUrl,
  openGraph: {
    title: "Rudisn",
    description:
      "Rudisn is a full-service digital company dedicated to helping businesses grow and thrive in the digital age.",
    url: baseUrl,
    site_name: "Rudisn",
    image: logoUrl, // Replace with your image URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rudisn_twi", // Replace with your Twitter handle
    title: "Rudisn",
    description:
      "Rudisn is a full-service digital company dedicated to helping businesses grow and thrive in the digital age.",
    image: logoUrl, // Replace with your Twitter image URL
  },
  icons: {
    icon: logoUrl,
    appleTouchIcon: logoUrl, // Optional, replace if you have a different apple touch icon
    favicon32: "/favicon-32x32.png",
    favicon16: "/favicon-16x16.png",
    maskIcon: "/safari-pinned-tab.svg",
    themeColor: "#ffffff",
  },
};

export const emailConfig = {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_TO: process.env.EMAIL_TO,
  SMTP_PASS: process.env.SMTP_PASS,
};

export const faqs = [
  {
    question: "What services does Rudisn offer?",
    answer:
      "Rudisn offers a wide range of services including UI/UX Design, Web Development, App Development, Cloud Services, SEO, and Cyber Security.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "To get started, you can contact us via phone at +91 90752 74002 or email at rudisn2002@gmail.com. We'll schedule an initial consultation to understand your goals and requirements.",
  },
  {
    question: "What are your payment methods?",
    answer:
      "We offer two payment plans: \nPlan 1: \n30% Advance Payment to initiate the work. \n40% Payment after Completing half of the Modules. \n30% Payment after Project Delivery. \nPlan 2: Divide the payment into monthly instalments.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The duration of a project depends on its complexity and requirements. After the initial consultation, we provide a timeline that outlines the key milestones and estimated completion date.",
  },
  {
    question: "What is your process for developing a project?",
    answer:
      "Our process includes four steps: Discovery and Consultation, Design and Architecture, Development, and Documentation and Launch. We emphasize understanding client goals, creating user-centric designs, following best development practices, and providing comprehensive support.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your project continues to perform optimally and meets your evolving needs.",
  },
  {
    question: "How do you ensure the security of my project?",
    answer:
      "We implement advanced security measures and best practices to protect your project from digital attacks. Our cyber security services include vulnerability assessment, penetration testing, threat intelligence, security audits, and incident response.",
  },
  {
    question: "Can you help with SEO for my website?",
    answer:
      "Yes, we offer comprehensive SEO services including keyword research, on-page SEO, off-page SEO, content optimization, and technical SEO to help your website rank higher on search engines and attract more organic traffic.",
  },
  {
    question: "What platforms do you develop mobile apps for?",
    answer:
      "We develop mobile applications for iOS, Android, and cross-platform solutions. We also provide maintenance and user testing services to ensure the best performance and user experience.",
  },
  {
    question: "How do you handle privacy and data protection?",
    answer:
      "Your privacy is important to us. We collect and use personal information only to provide and improve our services. We implement security measures to protect your information from unauthorized access and ensure compliance with privacy regulations.",
  },
];

// ------------- Sitemaps ---------------

const mainPaths = navBarData.map((data) => {
  return {
    url: baseUrl + data.path,
    lastModified: new Date(),
    changeFrequency: data.changefreq,
    priority: data.priority,
  };
});

const servicesPaths = navBarData
  .find((data) => data.name === "Services")
  .subPaths.map((data) => {
    return {
      url: baseUrl + data.path,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

export const basePathsSitemap = [
  ...mainPaths,
  ...servicesPaths,
  {
    url: baseUrl + "/terms-and-conditions",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: baseUrl + "/faq",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
];

export const generateSharableLink = () => {};
