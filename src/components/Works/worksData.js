import noContext from '../../assets/nocontext.jpg';
import shortly from '../../assets/shortly.jpg';
import todo from '../../assets/todo.jpg';
import restCountries from '../../assets/restcountries.jpg';
import cakeShop from '../../assets/cakeshop.jpg';
import portfolio from '../../assets/portfolio.jpg';

let works = [
    {
        id: 1,
        img: todo,
        name: "ToDo List",
        date: "August 2022",
        status: "Completed",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/todo-list",
        demoURL: "https://todo-list-sn-tin.vercel.app/",
        description: "An all-pink todo app to keep track of tasks and stay productive.",
        role: "Designed & Developed",
    },
    {
        id: 2,
        img: shortly,
        name: "Shortly",
        date: "September 2022",
        status: "Completed",
        category: "Solution",
        codeURL: "https://github.com/sn-tin/shorten-url",
        demoURL: "https://shorten-url-delta.vercel.app/",
        description: "Shortly URL shortening API returns a shorten link of a URL from the user.",
        role: "Developed",
    },
    {
        id: 3,
        img: noContext,
        name: "No Context",
        date: "October 2022",
        status: "Completed",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/no-context-app",
        demoURL: "https://no-context.vercel.app/",
        description: "A CRUD web app where users can search for, copy-paste and bookmark Filipino memes in a form of text.",
        role: "Designed & Developed",
    },
    {
        id: 4,
        img: restCountries,
        name: "Countries",
        date: "December 2022",
        status: "Completed",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/rest-countries",
        demoURL: "https://rest-countries-sn-tin.vercel.app/",
        description: "REST countries web app allows you to search for countries and filter the selection of countries by region.",
        role: "Developed",
    },
    {
        id: 5,
        img: portfolio,
        name: "Portfolio",
        date: "January 2023",
        status: "Completed",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/frontendkristine",
        demoURL: "https://frontendkristine.vercel.app/",
        description: "My personal portfolio to showcase the projects that I've completed and yet to complete.",
        role: "Designed & Developed",
    },
    {
        id: 6,
        img: cakeShop,
        name: "Cake Shop",
        date: "April 2023",
        status: "Completed",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/cake-shop",
        demoURL: "https://cakeit-shop.vercel.app/",
        description: "An e-commerce shop for cakes and desserts. This is a work in progress project.",
        role: "Designed & Developed",
    },
]

export default works;