import dickieMellieMarkup from '../assets/dickiemellie-markup.png'
// import blogImg from '../assets/Bouken-blog-snap3.png'
import citifiMarkup from '../assets/citifi-markup.png'
// import boukenMarkup from '../assets/bouken markup.png'
import aozoraScraperMarkup from '../assets/aozorascraper-markup.png'
// import martialChartsMarkup from '../assets/martialcharts-markup.png'
import hatsugenMarkup from '../assets/hatsugen-markup.png'

import boukenMockup from '../assets/bouken-mockup-2.png'
import dickiemellieMockup from '../assets/dickiemellie-mockup-2.png'
import citifiMockup from '../assets/citifi-mockup-2.png'

// photos
import aozorascraper1 from '../assets/aozorascraper-1.png'
import aozorascraper2 from '../assets/aozorascraper-2.png'
import aozorascraper3 from '../assets/aozorascraper-3.png'
import aozorascraper4 from '../assets/aozorascraper-4.png'
import aozorascraper5 from '../assets/aozorascraper-5.png'

import citifi1 from '../assets/citifi-1.png'
import citifi2 from '../assets/citifi-2.png'
import citifi3 from '../assets/citifi-3.png'
import citifi4 from '../assets/citifi-4.png'
import citifi5 from '../assets/citifi-5.png'

import dickiemellie1 from '../assets/dickiemellie-1.png'
import dickiemellie2 from '../assets/dickiemellie-2.png'
import dickiemellie3 from '../assets/dickiemellie-3.png'
import dickiemellie4 from '../assets/dickiemellie-4.png'
import dickiemellie5 from '../assets/dickiemellie-5.png'
import dickiemellie6 from '../assets/dickiemellie-6.png'

import martialcharts1 from '../assets/martial-charts-1.png'
import martialcharts2 from '../assets/martial-charts-2.png'
import martialcharts3 from '../assets/martial-charts-3.png'

import bouken1 from '../assets/bouken-1.png'
import bouken2 from '../assets/bouken-2.png'
import bouken3 from '../assets/bouken-3.png'
import bouken4 from '../assets/bouken-4.png'
import bouken5 from '../assets/bouken-5.png'

import hatsugen1 from '../assets/hatsugen-1.png'
import hatsugen2 from '../assets/hatsugen-2.png'
import hatsugen3 from '../assets/hatsugen-3.png'
import hatsugen4 from '../assets/hatsugen-5.png'
import hatsugen5 from '../assets/hatsugen-6.png'

const data = [
    {
      id: 1,
      image: citifiMockup,
      title: 'Citifi',
      description: 'React website created for city branding company.',
      purpose: 'The goal of this project was to create a sleek and professional website for a local city branding consultancy. The client requested a modern design with a hexagon theme and honeycomb color theme.',
      explanation: 'This project combines thoughtful design and robust functionality. Initially conceptualized in Figma, it was then developed using React. Key features include a fully responsive layout optimized for all device sizes, smooth CSS animations to enhance user engagement, and an integrated EmailJS contact form for efficient communication. The primary challenges involved striking a balance between creativity and consistency to meet the client\'s vision, while ensuring seamless responsiveness across various screens. These obstacles were successfully overcome, resulting in a polished, user-friendly website that effectively serves its purpose.',
      stack: ['React','CSS','HTML','EmailJS'],
      github: "https://github.com/thecodingrunner/citifi-vite",
      demo: "https://www.citifi.biz",
      photos: [citifi1, citifi2, citifi3, citifi4, citifi5],
      category: ['Frontend', 'All'],
    },
    {
      id: 2,
      image: dickiemellieMockup,
      title: 'Dickie Mellie',
      description: 'A Next.js-powered website showcasing a local artist\'s work, featuring an integrated e-commerce shop.',
      purpose: 'This project aims to showcase a local artist/photographer\'s portfolio while providing a seamless e-commerce experience. The website serves dual purposes: it acts as a digital gallery, highlighting the artist\'s diverse body of work, and functions as an online storefront. Local businesses can easily browse and purchase customized products featuring the artist\'s imagery, such as greeting cards and mugs. By combining artistic presentation with practical commerce, the site creates a platform that not only promotes the artist\'s talent but also facilitates direct sales to a targeted local market.',
      explanation: 'This e-commerce project leverages Next.js for robust front-end and server-side rendering, coupled with MongoDB for efficient data management. Stripe integration enables secure online transactions, adding a professional payment gateway to the platform. Two significant challenges were overcome during development: first, seamlessly incorporating Stripe\'s complex payment system, and second, designing an intuitive admin interface that simplifies product management. The resulting admin platform allows for easy addition and modification of shop items, streamlining the backend operations. This combination of technologies and user-friendly design creates a powerful, yet manageable e-commerce solution. \n 1. Developed and deployed a Next.js website with Stripe-integrated e-commerce functionality \n 2. Built an admin dashboard using Next.js, MongoDB, and AWS S3 for image storage \n 3. Utilized responsive design and accessibility best practices, achieving a 96% accessibility score on Lighthouse \n 4. Utilized Figma for iterative design process, collaborating closely with clients and completing the project 2 weeks ahead of schedule',
      stack: ['NextJS','React','MongoDB','TailwindCSS','HTML','Stripe'],
      github: "https://github.com/thecodingrunner/ecommerce-front-tailwind",
      demo: "https://www.dickiemellie.com",
      photos: [dickiemellie1, dickiemellie2, dickiemellie3, dickiemellie4, dickiemellie5, dickiemellie6],
      category: ['Frontend', 'Fullstack', 'All'],
    },
    {
      id: 3,
      image: boukenMockup,
      title: 'Bouken Blog',
      description: 'Experience Japan Through My Eyes: A Full-Stack Next.js Adventure Blog. Note: The live demo may take up to 15 seconds to initialize. If you encounter any issues, please refresh the page.',
      purpose: 'Immerse yourself in my journey across Japan through this dynamic, full-stack Next.js blog. Dive into vivid stories, stunning photos, and personal insights from my travels. This project aims to create an interactive platform for adventure enthusiasts to share their experiences. Inspired by my own journey cycling across Japan, I developed a website that not only showcases my personal blog but also invites others to contribute their unique adventures. The platform offers rich features for bloggers, including support for both landscape and portrait photos, categorization options, location tagging, and a favoriting system. On the homepage, a dynamic carousel displays featured (favorited) posts, complemented by a section highlighting recent entries. For easy navigation, separate pages are dedicated to each blog category, allowing users to explore content tailored to their interests. This versatile design encourages a vibrant community of travelers to document and share their explorations in a visually appealing and organized manner.',
      explanation: 'This full-stack project leverages Next.js to implement a comprehensive blog platform with complete CRUD functionality. Users can create, read, update, and delete blog posts seamlessly. The site\'s design, originally conceptualized in Figma, incorporates a range of fluid animations powered by Framer Motion. Firebase integration enables photo uploads for each blog post, while MongoDB serves as the database for storing user information and post content. To ensure security, Next Auth has been implemented, providing Google login functionality and restricting post creation, editing, and deletion to authenticated users only.',
      stack: ['NextJS','React','MongoDB','Next Auth','Framer Motion','TailwindCSS'],
      github: "https://github.com",
      demo: "https://bouken-blog.fly.dev",
      photos: [bouken2, bouken1, bouken3, bouken4, bouken5],
      category: ['Fullstack', 'All'],
    },
    {
      id: 4,
      image: aozoraScraperMarkup,
      title: 'Aozora Scraper',
      description: 'Next JS application that scrapes an online library resource using puppeteer, analyses the text, and presents both the book statistics and the text in a readable kindle style.',
      purpose: 'The goal of this project was to create a tool for Japanese language learners that bridges the gap between their current skill level, and an extremely valuable yet difficult to use library resource. Aozora Bunko is an online resource of roughly 20,000 Japanese texts/books, but can be complicated to navigate and difficult to read texts on. By simply pasting a book url into Aozora Scraper, the application scrapes the website, analyses the text, provides statistics on the text, and displays the text in a much more readable format.',
      explanation: 'This project was coded using NextJS, with Puppeteer and Cheerio used for web scraping. Some challenging aspects of creating this website included: correctly scraping the information from poorly structured html, fetching a word frequency JSON files and using the data to calculate difficulty scores, integrating Next Auth, integrating a Mongo DB for adding books, integrating CRUD operations for adding and editing books.',
      stack: ['NextJS','React','MongoDB','Puppeteer','TailwindCSS','Cheerio', 'Next Auth'],
      github: "https://github.com/thecodingrunner/aozora-scraper",
      demo: "",
      photos: [aozorascraper1,aozorascraper2,aozorascraper3,aozorascraper4,aozorascraper5],
      category: ['Fullstack', 'All'],
    },
    {
      id: 5,
      image: hatsugenMarkup,
      title: 'Hatsugen',
      description: 'Text-to-Audiobook Converter: A Next.js app leveraging OpenAI\'s API to transform written content into high-quality audiobooks.',
      purpose: 'This web application transforms text into audiobooks with a Spotify-like listening experience. Key features include: \n 1. AI voice selection \n 2. Text-to-speech conversion \n 3. AI-generated book covers \n 4. Personal audiobook library \n 5. Seamless playback interface \n 6. User authentication (username/password and Google login) \n Users can effortlessly create, store, and enjoy custom audiobooks, complete with AI-generated covers, all within a user-friendly interface.',
      explanation: 'This robust application seamlessly combines modern web technologies with AI capabilities to deliver a comprehensive audiobook creation and management platform. \n 1. Stack: Next.js with TypeScript \n 2. AI Integration: OpenAI API for audio and cover generation \n 3. Database: MongoDB for user and book data storage \n 4. Authentication: NextAuth for secure user management \n 5. Features: Text-to-speech conversion, AI cover creation, user library',
      stack: ['NextJS','React','MongoDB','OpenAI API','TailwindCSS','Firebase','TypeScript'],
      github: "https://github.com/thecodingrunner/hatsugen",
      demo: "",
      photos: [hatsugen1,hatsugen2,hatsugen3,hatsugen4,hatsugen5],
      category: ['Fullstack', 'All','TypeScript'],
    },
    // {
    //   id: 5,
    //   image: martialChartsMarkup,
    //   title: 'Martial Charts',
    //   description: 'A NextJS web application combining a fullstack platform for measuring and analysing workouts, and a stylish frontend website demonstrating Martial Charts (the platform) as a brand, with dynamic animations using Framer motion.',
    //   purpose: 'The goal of this project was twofold. The first was to create a fullstack platform capable of measuring workouts, providing in-depth analysis, and allowing workouts to be saved on a database. The second was express the platforms brand and ethos in the form of a stylish frontend landing page.',
    //   explanation: 'This is a fullstack NextJS project that implements ... for connecting to external arduino devices, CRUD methods for saving and viewing workouts, and framer motion for animations. The website was was designed in figma, and brought to life using framer motion animations. Many framer motion principles were implemented to create a dynamic interface.',
    //   stack: ['NextJS','React','Framer Motion','TailwindCSS'],
    //   github: "https://github.com/thecodingrunner/martial-charts",
    //   demo: "https://github.com",
    //   photos: [martialcharts1, martialcharts2, martialcharts3],
    // },
    // {
    //   id: 6,
    //   image: blogImg,
    //   title: 'Atina Networks & Renewables',
    //   description: 'Frontend Networks and Renewables company website.',
    //   purpose: 'The goal of this project was to design and develop a website for a Telecommunications and Renewables company. The website includes a dynamic and stylish landing page, seperate pages for the Networks (mobile telecoms) and Renewables (heat pumps) services, and an AI chatbot.',
    //   explanation: 'This is a frontend project that was designed in figma and developed in NextJS. Dynamic animations were created using Framer Motion.',
    //   stack: ['NextJS','React','Framer Motion','TailwindCSS'],
    //   github: "https://github.com",
    //   demo: "https://github.com",
    //   photos: [],
    // }
]

export default data
