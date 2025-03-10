export const detailPageData = [
    {
        id: 1,
        title: "North American Dating App",
        summarize: "A feature-rich dating platform leveraging AI-powered matchmaking, real-time communication, and secure payment processing to create meaningful connections through an intuitive interface, complete with video calling capabilities and automated workflow management.",
        technologies: ["Make.com", "Node.js", "Websocket", "Google Sheet", "Twilio", "Stripe", "OpenAI"],
        contents: [
            {
                tag: "Modern & Responsive UI",
                description: "Intuitive and visually appealing user interface across all devices",
            },
            {
                tag: "Real-Time Communication",
                description: "WebSocket-powered chat rooms for seamless interactions"
            },
            {
                tag: "AI-Powered Matchmaking",
                description: "OpenAI-integrated chatbot gathers user preferences dynamically"
            },
            {
                tag: "Video Calling",
                description: "Twilio integration for direct video calls between partners"
            },
            {
                tag: "Subscription Management",
                description: "Stripe-powered payment system for monthly subscriptions"
            },
            {
                tag: "Automated Workflows",
                description: "Make.com integration for workflow automation and data handling"
            }
        ],
        image: "/projectimg/dateApp.png",
		platform: "Web",
		deploy_link: "https://passportclub.netlify.app/",
        video_link: "https://www.youtube.com/watch?v=demo1"
    },
    {
        id: 2,
        title: "WhatsApp AI Coaching Integration",
        summarize: "A conversational AI coaching platform leveraging Zapier's webhook and code capabilities to seamlessly connect WhatsApp messaging with ChatGPT, providing personalized coaching conversations while maintaining user privacy and delivering actionable analytics to the project owner.",
        technologies: ["Zapier", "Twilio WhatsApp API", "OpenAI API", "JavaScript", "Webhook Integration"],
        contents: [
            {
                tag: "Event-Driven Architecture",
                description: "Webhook-based system capturing and processing WhatsApp messages"
            },
            {
                tag: "Context-Aware AI Responses",
                description: "OpenAI integration with conversation history management"
            },
            {
                tag: "Custom JavaScript Processing",
                description: "Middleware for transforming inputs and managing API interactions"
            },
            {
                tag: "Secure Data Transmission",
                description: "POST endpoint implementation for reliable message delivery"
            },
            {
                tag: "Privacy-Focused Design",
                description: "Limited data storage with selective metrics collection"
            },
            {
                tag: "Analytics Integration",
                description: "Session tracking with engagement monitoring capabilities"
            },
            {
                tag: "Scalable Infrastructure",
                description: "Modular workflow design supporting future voice integration"
            }
        ],
        image: "/projectimg/webhook_zap.png",
		platform: "Automation",
        video_link: "https://www.youtube.com/watch?v=demo5"
    },
    {
        id: 3,
        title: "Data Pipeline Workflow Automation",
        summarize: "A sophisticated data integration platform that orchestrates complex ETL processes across multiple business dimensions, featuring modular JavaScript transformations, conditional processing paths, and automated workflows to convert raw data inputs into actionable business insights",
        technologies: ["n8n", "Workflow Automation Platform", "JavaScript", "ETL Tools", "API Integration", "Webhook Triggers"],
        contents: [
            {
                tag: "Comprehensive Data Processing",
                description: "End-to-end pipeline for extracting, transforming, and loading data"
            },
            {
                tag: "Multi-dimensional Analytics",
                description: "Processing across Date, Customer, Sales Type, Role, Geography, Order, and Product dimensions"
            },
            {
                tag: "Code-based Transformations",
                description: "Custom JavaScript modules for complex data manipulation and enrichment"
            },
            {
                tag: "Modular Architecture",
                description: "Reusable components connected through a visual workflow interface"
            },
            {
                tag: "Conditional Processing Paths",
                description: "Branching logic for different data categories and requirements"
            },
            {
                tag: "Automated Data Validation",
                description: "Built-in verification steps to ensure data quality and consistency"
            },
            {
                tag: "Webhook Integration",
                description: "Event-triggered workflows for real-time data processing"
            }
        ],
        image: "/projectimg/n8n.png",
		platform: "Web",
        video_link: "https://www.youtube.com/watch?v=demo4"
    },
    // A.V.M Auto Portfolio
    {
        id: 4,
        title: "A.V.M Auto Portfolio",
        summarize: "A visually appealing and user-friendly portfolio website for an automotive business, developed using WordPress with integrated Google Translate functionality for multilingual support.",
        technologies: ["WordPress", "Google Translate", "Responsive Design", "Custom Theme", "Multi-language Support"],
        contents: [
            {
                tag: "Custom WordPress Implementation",
                description: "Tailored WordPress site with customized theme and functionality"
            },
            {
                tag: "Multilingual Support",
                description: "Google Translate integration for serving diverse customer base"
            },
            {
                tag: "Automotive Showcase",
                description: "Optimized presentation of automotive services and products"
            },
            {
                tag: "Responsive Design",
                description: "Mobile-friendly layout adapting to all screen sizes"
            },
            {
                tag: "Performance Optimization",
                description: "Fast loading times with optimized media and resources"
            }
        ],
        image: "/projectimg/avm.webp",
		platform: "Wordpress",
		deploy_link: "https://avmauto.in/",
    },
    {
        id: 5,
        title: "Celebrity Link – PR & Social Media Growth",
        summarize: "A celebrity PR & media platform with secure Stripe-powered payments and a responsive UI built with modern web technologies.",
        technologies: ["Next.js", "Django", "Stripe", "TailwindCSS", "Docker"],
        contents: [
            {
                tag: "Celebrity PR Platform",
                description: "Developed a comprehensive PR platform connecting users with celebrity opportunities"
            },
            {
                tag: "Responsive UI",
                description: "Built with Next.js & TailwindCSS for optimal viewing across all devices"
            },
            {
                tag: "Secure Transactions",
                description: "Integrated Stripe for secure payments and subscription management"
            },
            {
                tag: "Backend Infrastructure",
                description: "Powered by Django with containerized deployment via Docker"
            }
        ],
        image: "/projectimg/celeblink.png",
		platform: "Web",
		deploy_link: "https://celeblink.com/",
        video_link: "https://www.youtube.com/watch?v=demo6"
    },
    {
        id: 6,
        title: "Roasted Revolution – E-Commerce Coffee Store",
        summarize: "A modern and responsive coffee e-commerce platform built with Laravel and Vue 3, featuring secure payment processing and a custom admin panel.",
        technologies: ["Laravel", "Vue 3", "Vite", "Tailwind CSS", "MySQL"],
        contents: [
            {
                tag: "E-Commerce Platform",
                description: "Designed a modern & responsive coffee e-commerce platform"
            },
            {
                tag: "Secure Payments",
                description: "Integrated multiple payment gateways including Stripe & PayPal"
            },
            {
                tag: "Custom Admin Panel",
                description: "Built a comprehensive Laravel admin system for product & order management"
            },
            {
                tag: "Performance Optimization",
                description: "Leveraged Vite and Vue 3 for optimal frontend performance"
            }
        ],
        image: "/projectimg/roastedrevolution.png",
		platform: "Web",
		deploy_link: "https://roastedrevolution.ca/",
        video_link: "https://www.youtube.com/watch?v=demo9"
    },
    {
        id: 7,
        title: "Betwatch Site Scraping – Real-Time Data Automation",
        summarize: "A real-time data scraping solution for automated sports data collection, featuring GraphQL and RESTful API integration with Google Sheets synchronization.",
        technologies: ["Python", "GraphQL", "MongoDB", "Google Sheets API"],
        contents: [
            {
                tag: "Real-Time Data Scraper",
                description: "Designed for automated sports data collection with minimal latency"
            },
            {
                tag: "API Integration",
                description: "Implemented GraphQL & RESTful APIs for efficient data retrieval"
            },
            {
                tag: "Live Data Synchronization",
                description: "Built Google Sheets API sync for real-time updates and reporting"
            },
            {
                tag: "Database Architecture",
                description: "Leveraged MongoDB for flexible storage of structured and unstructured data"
            }
        ],
        image: "/projectimg/betwatch.png",
		platform: "Web",
		deploy_link: "https://www.betwatch.com/",
        video_link: "https://www.youtube.com/watch?v=demo7"
    },
    {
        id: 8,
        title: "Shopify to HubSpot Event Sync – Laravel Webhook Integration",
        summarize: "A Laravel-based system that captures real-time Shopify events through webhooks, processes the data, and seamlessly updates HubSpot CRM for synchronized customer management.",
        technologies: ["Laravel", "Shopify Webhooks", "HubSpot API", "MySQL", "REST API"],
        contents: [
            {
                tag: "Real-time Event Detection",
                description: "Captures new orders, customer updates, product changes, etc., from Shopify"
            },
            {
                tag: "Webhook Processing",
                description: "Efficiently handles Shopify webhooks and ensures data integrity"
            },
            {
                tag: "HubSpot CRM Integration",
                description: "Automatically updates customer information, orders, and interactions in HubSpot"
            },
            {
                tag: "Error Handling & Logging",
                description: "Ensures reliability with fail-safe mechanisms and comprehensive logging"
            },
            {
                tag: "Scalable & Secure Architecture",
                description: "Built with best Laravel practices for performance and security"
            }
        ],
        image: "/projectimg/shopify-webhook.png",
		platform: "Web",
        // video_link: "https://www.youtube.com/watch?v=demo10"
    },
    {
        id: 9,
        title: "Sparkbright Engineering Portfolio",
        summarize: "A visually appealing and user-friendly portfolio website designed and developed using Next.js, showcasing engineering projects with a clean and modern interface enhanced by Next UI components and Tailwind CSS styling.",
        technologies: ["Next.js", "Next UI", "Tailwind CSS", "React", "Responsive Design"],
        contents: [
            {
                tag: "Modern UI Design",
                description: "Clean and professional interface with attention to typography and visual hierarchy"
            },
            {
                tag: "Responsive Layout",
                description: "Fully responsive design that adapts seamlessly to all device sizes"
            },
            {
                tag: "Next UI Components",
                description: "Leveraging Next UI library for consistent and accessible UI elements"
            },
            {
                tag: "Performance Optimization",
                description: "Optimized loading times and resource management for smooth user experience"
            },
            {
                tag: "Interactive Elements",
                description: "Dynamic content presentation with subtle animations and transitions"
            }
        ],
        image: "/projectimg/sparkbright.png",
		platform: "Web",
		deploy_link: "https://sparkbright.in/",
        source_code_link: "https://github.com/marko6677/react-dashboard"
    },
    {
        id: 10,
        title: "VOLT.WIN – Blockchain Auction Platform",
        summarize: "A blockchain-powered auction system built with React and FastAPI, featuring seamless TitanX blockchain integration for secure and transparent bidding.",
        technologies: ["React", "FastAPI", "MongoDB", "Web3.js", "TitanX Blockchain"],
        contents: [
            {
                tag: "Blockchain Auction System",
                description: "Developed a transparent and secure blockchain-powered auction platform"
            },
            {
                tag: "React Frontend",
                description: "Created an intuitive user experience with modern React architecture"
            },
            {
                tag: "Smart Contract Integration",
                description: "Implemented TitanX blockchain integration for secure transactions"
            },
            {
                tag: "API Backend",
                description: "Built with FastAPI for high-performance data processing and MongoDB storage"
            }
        ],
        image: "/projectimg/volt.png",
		platform: "Web",
		deploy_link: "https://app.volt.win",
        video_link: "https://www.youtube.com/watch?v=demo8"
    },


    // HooBank
    {
        id: 11,
        title: "HooBank",
        summarize: "A responsive bank homepage showcasing various payment gateway integrations, easy money transfer features, and advanced security protocols, all presented through a beautiful interface built with Tailwind CSS and React.",
        technologies: ["Next.js", "Tailwind CSS", "React", "Responsive Design", "UI/UX"],
        contents: [
            {
                tag: "Feature Showcase",
                description: "Visual presentation of banking features including payment gateways and money transfers"
            },
            {
                tag: "Security Visualization",
                description: "Illustrations and descriptions of advanced security protocols"
            },
            {
                tag: "Responsive Design",
                description: "Fully adaptive layout that works perfectly on all devices"
            },
            {
                tag: "Modern UI",
                description: "Clean, contemporary interface with intuitive navigation"
            },
            {
                tag: "Performance Optimization",
                description: "Optimized for fast loading and smooth interactions"
            }
        ],
        image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/marko6677/hookbank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
    },

    // MERN Dashboard
    {
        id: 12,
        title: "MERN Dashboard",
        summarize: "A visually appealing and user-friendly data analytics dashboard built using the MERN stack (MongoDB, Express, React, Node.js) with Material UI for styling, offering comprehensive data visualization and management capabilities.",
        technologies: ["React", "Material UI", "MongoDB", "Express", "Node.js", "Data Visualization"],
        contents: [
            {
                tag: "Full Stack Architecture",
                description: "Complete MERN implementation with frontend and backend integration"
            },
            {
                tag: "Data Visualization",
                description: "Interactive charts and graphs for effective data representation"
            },
            {
                tag: "Material UI Components",
                description: "Polished interface using Material Design principles"
            },
            {
                tag: "MongoDB Integration",
                description: "Efficient data storage and retrieval using MongoDB"
            },
            {
                tag: "RESTful API",
                description: "Well-structured Express backend with comprehensive API endpoints"
            },
            {
                tag: "Responsive Layout",
                description: "Adaptive design for optimal viewing on any device"
            }
        ],
        image: "/projectimg/mern.png",
		source_code_link: "https://github.com/marko6677/dashboard",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
    },

    // Metaverse Web 3.0
    {
        id: 13,
        title: "Metaverse Web 3.0",
        summarize: "A modern UI/UX landing page using Framer Motion and Tailwind CSS that captures the futuristic feel and aesthetic of Web 3.0, featuring smooth animations and an immersive user experience.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Web 3.0", "Responsive Design"],
        contents: [
            {
                tag: "Advanced Animations",
                description: "Smooth, physics-based animations using Framer Motion"
            },
            {
                tag: "Futuristic UI",
                description: "Modern interface with Web 3.0 aesthetic and design principles"
            },
            {
                tag: "Responsive Design",
                description: "Fully adaptive layout that works on all devices"
            },
            {
                tag: "Performance Optimization",
                description: "Efficient rendering and animation for smooth user experience"
            },
            {
                tag: "Interactive Elements",
                description: "Engaging user interactions with responsive feedback"
            }
        ],
        image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/marko6677/web3-integration",
		platform: "Vercel",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
    },

    // Issue Tracker
    {
        id: 14,
        title: "Issue Tracker",
        summarize: "A full-stack issue tracking application built with Next.js, featuring server components, serverless functionality, ShadCN UI for styling, Prisma ORM, and MySQL database for efficient issue management and tracking.",
        technologies: ["Next.js", "Tailwind CSS", "ShadCN UI", "Prisma", "MySQL", "Server Components"],
        contents: [
            {
                tag: "Full Stack Implementation",
                description: "Complete solution with frontend, backend, and database integration"
            },
            {
                tag: "Next.js Server Components",
                description: "Utilizing the latest Next.js features for optimal performance"
            },
            {
                tag: "Serverless Architecture",
                description: "Leveraging serverless functions for scalability and efficiency"
            },
            {
                tag: "ShadCN UI Integration",
                description: "Modern, accessible interface components with consistent styling"
            },
            {
                tag: "Prisma ORM",
                description: "Type-safe database queries and schema management"
            },
            {
                tag: "MySQL Database",
                description: "Robust relational database for structured data storage"
            }
        ],
        image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/marko6677/issue-tracker",
		platform: "Vercel",
		deploy_link: "https://project-issue-tracker.vercel.app/",
    },
];