//  These are the constants for project categories
const uiDevelopment = { value: "ui-ux", label: "UI-UX" };
const cloud = { value: "cloud", label: "Cloud" };
const frontend = { value: "frontend", label: "Frontend" };
const backend = { value: "backend", label: "Backend" };
const fullStack = { value: "fullstack", label: "Full Stack" };
const eCommerce = { value: "e-commerce", label: "E-Commerce" };

const projects = [
  {
    projectCategory: fullStack.value,
    name: "Entytle",
    slug: "entytle",
    tags: ["OEMs", "Aftermarket growth", "Installed Base Intelligence"],
    path: "/our-work/entytle",
    mainImgSrc: "/assets/img/home2/entytle-01.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "Aftermarket Growth",
      client: "Entytle",
      links: [
        {
          type: "Website",
          url: "https://entytle.com/",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/entytle-details-thumb-img.jpg",
      "/assets/img/innerpage/entytle-details-thumb-img.jpg",
      "/assets/img/innerpage/entytle-details-thumb-img.jpg",
      "/assets/img/innerpage/entytle-details-thumb-img.jpg",
      "/assets/img/innerpage/entytle-details-thumb-img.jpg",
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
      imageSrc: "/assets/img/innerpage/entytle-details-page-img1.jpg",
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
      imageSrc: "/assets/img/innerpage/entytle-details-counter-img.png",
    },
    footerImage: "/assets/img/innerpage/entytle-details-page-img2.jpg",
  },
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
    mainImgSrc: "/assets/img/home2/caves-studio-02.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "Design and Architecture",
      client: "Caves Studio",
      links: [
        {
          type: "Website",
          url: "https://cavesstudio.com",
        },
        {
          type: "Design",
          url: "https://cavesstudio.com/ui-ux",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/caves-studio-details-thumb-img2.jpg",
      "/assets/img/innerpage/caves-studio-details-thumb-img2.jpg",
      "/assets/img/innerpage/caves-studio-details-thumb-img2.jpg",
      "/assets/img/innerpage/caves-studio-details-thumb-img2.jpg",
      "/assets/img/innerpage/caves-studio-details-thumb-img2.jpg",
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
      imageSrc: "/assets/img/innerpage/caves-studio-details-page-img2.jpg",
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
      imageSrc: "/assets/img/innerpage/caves-studio-details-counter-img2.png",
    },
    footerImage: "/assets/img/innerpage/caves-studio-details-page-img3.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Anand Industry",
    slug: "anand-industry",
    tags: ["Light Bulbs", "E-commerce", "Lighting Solutions"],
    path: "/our-work/anand-industry",
    mainImgSrc: "/assets/img/home2/anand-industry-03.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "Light Bulbs Manufacturing",
      client: "Anand Industry",
      links: [
        {
          type: "Website",
          url: "https://anandindustry.com",
        },
        {
          type: "Design",
          url: "https://anandindustry.com/ui-ux",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/anand-industry-details-thumb-img3.jpg",
      "/assets/img/innerpage/anand-industry-ui-ux-details-thumb-img1.jpg",
      "/assets/img/innerpage/anand-industry-ui-ux-details-thumb-img2.jpg",
      "/assets/img/innerpage/anand-industry-ui-ux-details-thumb-img3.jpg",
      "/assets/img/innerpage/anand-industry-ui-ux-details-thumb-img4.jpg",
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
      imageSrc:
        "/assets/img/innerpage/anand-industry-ui-ux-details-page-img2.jpg",
    },
    solution: {
      points: [
        "Crafted a clean and attractive UI design that effectively showcases the light bulb products in an engaging manner.",
        "Implemented an intuitive layout that simplifies navigation, making it easy for users to find and purchase products.",
        "Ensured a fully responsive design, providing a consistent look and feel on all devices to enhance user experience.",
        "Developed a functional e-commerce platform with WooCommerce, ensuring smooth online transactions and user-friendly product management.",
        "Focused on usability and performance, ensuring the website operates efficiently and remains user-friendly across different devices.",
      ],
      imageSrc:
        "/assets/img/innerpage/anand-industry-ui-ux-details-counter-img1.png",
    },
    footerImage:
      "/assets/img/innerpage/anand-industry-ui-ux-details-page-img3.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Ghugra Wala",
    slug: "ghugra-wala",
    tags: [
      "Food Website",
      "Food Product",
      "Food Website Design",
      "Food Industry",
    ],
    path: "/our-work/ghugra-wala",
    mainImgSrc: "/assets/img/home2/ghugra-wala-05.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "Food Industry",
      client: "Ghugra Wala",
      links: [
        {
          type: "Website",
          url: "https://ghugrawala.com/",
        },
        {
          type: "Design",
          url: "https://ghugrawala.com/ui-ux",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/ghugra-wala-details-thumb-img1.jpg",
      "/assets/img/innerpage/ghugra-wala-ui-ux-details-thumb-img1.jpg",
      "/assets/img/innerpage/ghugra-wala-ui-ux-details-thumb-img2.jpg",
      "/assets/img/innerpage/ghugra-wala-ui-ux-details-thumb-img3.jpg",
      "/assets/img/innerpage/ghugra-wala-ui-ux-details-thumb-img4.jpg",
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
      imageSrc: "/assets/img/innerpage/ghugra-wala-ui-ux-details-page-img2.jpg",
    },
    solution: {
      points: [
        "Designed a clean and engaging interface that highlights the food offerings in an appealing manner.",
        "Used responsive design techniques to ensure the site looks great and functions well on all devices.",
        "Developed a straightforward layout that makes it easy for users to navigate and find information about the food.",
        "Implemented features that effectively communicate the company’s offerings and enhance the overall user experience.",
      ],
      imageSrc:
        "/assets/img/innerpage/ghugra-wala-ui-ux-details-counter-img1.png",
    },
    footerImage:
      "/assets/img/innerpage/ghugra-wala-ui-ux-details-page-img3.jpg",
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
    path: "/our-work/siddhidatri-aahar-design",
    mainImgSrc: "/assets/img/home2/siddhidatri-aahar-01.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "Food Industry",
      client: "Siddhidatri Aahar",
      links: [
        {
          type: "Design",
          url: "https://siddhidatriaahar.com/ui-ux",
        },
        {
          type: "Website",
          url: "https://siddhidatriaahar.com/",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/siddhidatri-aahar-details-thumb-img1.jpg",
      "/assets/img/innerpage/siddhidatri-aahar-details-thumb-img2.jpg",
      "/assets/img/innerpage/siddhidatri-aahar-details-thumb-img3.jpg",
      "/assets/img/innerpage/siddhidatri-aahar-details-thumb-img4.jpg",
      "/assets/img/innerpage/siddhidatri-aahar-details-thumb-img5.jpg",
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
      imageSrc: "/assets/img/innerpage/siddhidatri-aahar-details-page-img2.jpg",
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
      imageSrc:
        "/assets/img/innerpage/siddhidatri-aahar-details-counter-img1.png",
    },
    footerImage:
      "/assets/img/innerpage/siddhidatri-aahar-details-page-img3.jpg",
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
    mainImgSrc: "/assets/img/home2/penny-wise-01.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "Expense Tracking",
      client: "Open source Personal Project",
      links: [
        {
          type: "Website",
          url: "https://pennywise.com",
        },
        {
          type: "Design",
          url: "https://pennywise.com/ui-ux",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/penny-wise-details-thumb-img1.jpg",
      "/assets/img/innerpage/penny-wise-details-thumb-img2.jpg",
      "/assets/img/innerpage/penny-wise-details-thumb-img3.jpg",
      "/assets/img/innerpage/penny-wise-details-thumb-img4.jpg",
      "/assets/img/innerpage/penny-wise-details-thumb-img5.jpg",
    ],
    projectOverview: [
      "Designed and developed a landing page for a open source project Penny Wise, an expense tracking website.",
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
      imageSrc: "/assets/img/innerpage/penny-wise-details-page-img1.jpg",
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
      imageSrc: "/assets/img/innerpage/penny-wise-details-counter-img1.png",
    },
    footerImage: "/assets/img/innerpage/penny-wise-details-page-img2.jpg",
  },
  {
    projectCategory: eCommerce.value,
    name: "Richee Agrotech",
    slug: "richee-agrotech",
    tags: ["E-commerce", "Organic Products", "Shopify"],
    path: "/our-work/richee-agrotech",
    mainImgSrc: "/assets/img/home2/richee-agrotech-01.jpg",
    showCaseColumnWidth: "col-lg-6",
    metaData: {
      category: "E-commerce",
      client: "Richee Agrotech",
      links: [
        {
          type: "Website",
          url: "https://richeeagrotech.com",
        },
        {
          type: "Design",
          url: "https://richeeagrotech.com/ui-ux",
        },
      ],
    },
    sliderImages: [
      "/assets/img/innerpage/richee-agrotech-details-thumb-img1.jpg",
      "/assets/img/innerpage/richee-agrotech-details-thumb-img2.jpg",
      "/assets/img/innerpage/richee-agrotech-details-thumb-img3.jpg",
      "/assets/img/innerpage/richee-agrotech-details-thumb-img4.jpg",
      "/assets/img/innerpage/richee-agrotech-details-thumb-img5.jpg",
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
      imageSrc: "/assets/img/innerpage/richee-agrotech-details-page-img1.jpg",
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
      imageSrc:
        "/assets/img/innerpage/richee-agrotech-details-counter-img1.png",
    },
    footerImage: "/assets/img/innerpage/richee-agrotech-details-page-img2.jpg",
  },
];
