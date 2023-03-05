import noContext from '../../assets/nocontext.png';
import shortly from '../../assets/shortly.png';
import todo from '../../assets/todo.png';
import restCountries from '../../assets/restcountries.jpg';

let works = [
    {
        id: 1,
        img: todo,
        name: "To-Do List",
        date: "August 2022",
        status: "Completed",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/todo-list",
        demoURL: "https://todo-list-sn-tin.vercel.app/",
        description: "A to-do list app to keep track of your tasks.",
        role: "Design & Develop",
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
        role: "Develop",
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
        description: "A website where users can search for, copy-paste and bookmark Filipino memes in a form of text.",
        role: "Design & Develop",
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
        role: "Develop",
    },
]

export default works;