import dickieMellieMarkup from '../assets/dickiemellie-markup.png'
import blogImg from '../assets/Bouken-blog-snap3.png'
import citifiMarkup from '../assets/citifi-markup.png'
import boukenMarkup from '../assets/bouken markup.png'
import aozoraScraperMarkup from '../assets/aozorascraper-markup.png'
import martialChartsMarkup from '../assets/martialcharts-markup.png'

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

const data = [
    {
      id: 1,
      image: dickieMellieMarkup,
      title: 'Dickie Mellie',
      description: 'NextJS website designed for a local artist, with an ecommerce shop integrated using stripe.',
      purpose: 'The goal of this project was to create a website presenting the work of a local artist/photographer, with an integrated ecommerce shop. The primary purpose is to present the artists work, with a shop for local businesses to purchase products such as cards and mugs.',
      explanation: 'This project was coded using NextJS, with a MongoDB database, and Stripe for the ecommerce integration. The most challenging aspects of this project were the integration of Stripe, and the creation of an admin platform with a simple interface for adding products to the shop.',
      stack: ['NextJS','React','MongoDB','TailwindCSS','HTML','Stripe'],
      github: "https://github.com/thecodingrunner/ecommerce-front-tailwind",
      demo: "https://www.dickiemellie.com",
      photos: [dickiemellie1, dickiemellie2, dickiemellie3, dickiemellie4, dickiemellie5, dickiemellie6],
    },
    {
      id: 2,
      image: citifiMarkup,
      title: 'Citifi',
      description: 'React website created for city branding company.',
      purpose: 'The goal of this project was to create a sleek and professional website for a local city branding consultancy. The client requested a modern design with a hexagon theme and honeycomb color theme.',
      explanation: 'This project was designed in Figma and coded using React. Features include responsive design for use on all device sizes, smooth css animations, and an emailjs contact form. The most difficult aspects of this project were creating a consistent yet creative design for the clients needs, and implementing responsiveness.',
      stack: ['React','CSS','HTML','EmailJS'],
      github: "https://github.com/thecodingrunner/citifi-vite",
      demo: "https://www.citifi.biz",
      photos: [citifi1, citifi2, citifi3, citifi4, citifi5],
    },
    {
      id: 3,
      image: boukenMarkup,
      title: 'Bouken Blog',
      description: 'Fullstack NextJS blog website presenting my adventures in Japan. (live demo takes roughly 15s to boot, please refresh if not loaded)',
      purpose: 'The goal of this project was to create a blog website for myself and others to present their adventures. Having kept a blog to record my adventures cycling the length of Japan, I wanted to make a website to present this blog, and allow others to contribute with their own adventures. Blogs can include many features such as landscape and portrait photos, categories, location, and can also be favourited. The blogs are displayed on the main page in a featured (favourited) carousel, and a recent blogs section. There are also seperate pages for each blog category.',
      explanation: 'This project is fullstack, using all CRUD methods to allow creation, editting, display and deletion of blog posts. The site was designed on figma and used Framer Motion for animations. Firebase was integrated for uploading photos for each blog, and MongoDB was used as the database for saving users and posts. Next Auth was integrated for a secure google login, preventing posts from being created, deleted or editted unless the user is logged in.',
      stack: ['NextJS','React','MongoDB','Next Auth','Framer Motion','TailwindCSS'],
      github: "https://github.com",
      demo: "https://bouken-blog.fly.dev",
      photos: [bouken2, bouken1, bouken3, bouken4, bouken5],
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
      demo: "https://github.com",
      photos: [aozorascraper1,aozorascraper2,aozorascraper3,aozorascraper4,aozorascraper5],
    },
    {
      id: 5,
      image: martialChartsMarkup,
      title: 'Martial Charts',
      description: 'A NextJS web application combining a fullstack platform for measuring and analysing workouts, and a stylish frontend website demonstrating Martial Charts (the platform) as a brand, with dynamic animations using Framer motion.',
      purpose: 'The goal of this project was twofold. The first was to create a fullstack platform capable of measuring workouts, providing in-depth analysis, and allowing workouts to be saved on a database. The second was express the platforms brand and ethos in the form of a stylish frontend landing page.',
      explanation: 'This is a fullstack NextJS project that implements ... for connecting to external arduino devices, CRUD methods for saving and viewing workouts, and framer motion for animations. The website was was designed in figma, and brought to life using framer motion animations. Many framer motion principles were implemented to create a dynamic interface.',
      stack: ['NextJS','React','Framer Motion','TailwindCSS'],
      github: "https://github.com/thecodingrunner/martial-charts",
      demo: "https://github.com",
      photos: [martialcharts1, martialcharts2, martialcharts3],
    },
    {
      id: 6,
      image: blogImg,
      title: 'Atina Networks & Renewables',
      description: 'Frontend Networks and Renewables company website.',
      purpose: 'The goal of this project was to design and develop a website for a Telecommunications and Renewables company. The website includes a dynamic and stylish landing page, seperate pages for the Networks (mobile telecoms) and Renewables (heat pumps) services, and an AI chatbot.',
      explanation: 'This is a frontend project that was designed in figma and developed in NextJS. Dynamic animations were created using Framer Motion.',
      stack: ['NextJS','React','Framer Motion','TailwindCSS'],
      github: "https://github.com",
      demo: "https://github.com",
      photos: [],
    }
]

export default data
