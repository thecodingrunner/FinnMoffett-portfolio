import dickieMellieMarkup from '../assets/dickiemellie-markup.png'
import blogImg from '../assets/Bouken-blog-snap3.png'
import citifiMockup from '../assets/citifi-markup.png'
import boukenMarkup from '../assets/Bouken-markup.png'
import aozoraScraperMarkup from '../assets/aozorascraper-markup.png'

// photos
import aozorascraper1 from '../assets/aozorascraper-1.png'
import aozorascraper2 from '../assets/aozorascraper-2.png'
import aozorascraper3 from '../assets/aozorascraper-3.png'
import aozorascraper4 from '../assets/aozorascraper-4.png'
import aozorascraper5 from '../assets/aozorascraper-5.png'

const data = [
    {
      id: 1,
      image: dickieMellieMarkup,
      title: 'Dickie Mellie',
      description: 'NextJS website designed for a local artist photographer, with an ecommerce shop integrated using stripe.',
      purpose: 'The goal of this project was to create a presentational website for a local artist/photographer with an integrated ecommerce shop. The primary purpose is to present the artists work, with a shop for local businesses to purchase products such as cards and mugs.',
      explanation: 'This project was coded using NextJS, MongoDB for the database, and Stripe for the ecommerce integration. The most difficult aspects of this project were the integration of stripe, and the creation of an admin platform with a simple interface for the artist to add products to the shop.',
      stack: ['NextJS','React','MongoDB','TailwindCSS','HTML','Stripe'],
      github: "https://github.com",
      demo: "www.dickiemellie.com",
      photos: [],
    },
    {
      id: 2,
      image: citifiMockup,
      title: 'Citifi',
      description: 'React website created for city branding company.',
      purpose: 'The goal of this project was to create a sleek and professional website for a local city branding consultancy. The client requested a modern design with a hexagon theme and honeycomb color theme.',
      explanation: 'This project was designed in figma and coded using react js. Features include responsive design for use on all device sizes, smooth css animations, and an emailjs contact form. The most difficult aspects of this project were creating a consistent yet creative design for the clients needs, and implementing responsiveness.',
      stack: ['React','CSS','HTML','EmailJS'],
      github: "https://github.com",
      demo: "www.citifi.biz",
      photos: [],
    },
    {
      id: 3,
      image: boukenMarkup,
      title: 'Bouken',
      description: 'A website presenting my Japanese adventures. Full stack website created using the MERN stack. Includes creative parallax designs, GSAP animations etc.',
      purpose: 'The goal of this project was to create a sleek and professional website for a local city branding consultancy. The client requested a modern design with a hexagon theme and honeycomb color theme.',
      explanation: 'This project was designed in figma and coded using react js. Features include responsiveness for all device sizes, smooth css animations, and an emailjs contact form. The most difficult aspects of this project were creating a consistent yet creative design for the clients needs, and implementing responsiveness.',
      stack: ['React','NodeJS','Express','CSS','HTML'],
      github: "https://github.com",
      demo: "https://github.com",
      photos: [],
    },
    {
      id: 4,
      image: blogImg,
      title: 'MERN Blog',
      description: 'MERN stack blog with authentication etc.',
      purpose: 'The goal of this project was to create a sleek and professional website for a local city branding consultancy. The client requested a modern design with a hexagon theme and honeycomb color theme.',
      explanation: 'This project was designed in figma and coded using react js. Features include responsiveness for all device sizes, smooth css animations, and an emailjs contact form. The most difficult aspects of this project were creating a consistent yet creative design for the clients needs, and implementing responsiveness.',
      stack: ['React','NodeJS','Express','CSS'],
      github: "https://github.com",
      demo: "https://github.com",
      photos: [],
    },
    {
      id: 5,
      image: aozoraScraperMarkup,
      title: 'Aozora Scraper',
      description: 'Next JS application that scrapes an online library resource using puppeteer, analyses the text, and presents it in a readable kindle style.',
      purpose: 'The goal of this project was to create a tool for Japanese language learners that bridges the gap between their current skill level, and an extremely valuable yet difficult to use resource. Aozora Bunko is an online resource of roughly 20,000 Japanese texts/books, but can be difficult to navigate not enjoyable to read on. By simply pasting a book url into Aozora Scraper, the tool then scrapes the website, analyses the text, and provides the text in a much more readable format.',
      explanation: 'This project was coded using NextJS, with Puppeteer and Cheerio used for web scraping. Some challenging aspects of creating this website included: correctly scraping the information from poorly structured html, fetching a large word frequency JSON file and using the data to calculate difficulty scores, integrating Next Auth, integrating a Mongo DB for adding books, integrating CRUD operations for adding and editing books.',
      stack: ['NextJS','React','MongoDB','Puppeteer','TailwindCSS','Cheerio', 'Next Auth'],
      github: "https://github.com",
      demo: "https://github.com",
      photos: [aozorascraper1,aozorascraper2,aozorascraper3,aozorascraper4,aozorascraper5],
    }
]

export default data
