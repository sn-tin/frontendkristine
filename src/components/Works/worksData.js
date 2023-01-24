import noContext from '../../assets/nocontext.png';
import shortly from '../../assets/shortly.png';
import todo from '../../assets/todo.png';
import rps from '../../assets/rps.png';
import restCountries from '../../assets/restcountries.jpg';

let works = [
    {
        id: 1,
        img: rps,
        name: "Rock Paper Scissors",
        date: "July 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/rock-paper-scissors",
        demoURL: "https://odin-rock-paper-scissors-pi.vercel.app/",
        description: "A simple grade-school game of Rock Paper, and Scissors."
    },
    {
        id: 2,
        img: todo,
        name: "To-Do List",
        date: "August 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/todo-list",
        demoURL: "https://todo-list-sn-tin.vercel.app/",
        description: "A to-do list app to keep track of your tasks.",
    },
    {
        id: 3,
        img: shortly,
        name: "Shortly",
        date: "September 2022",
        category: "Solution",
        codeURL: "https://github.com/sn-tin/shorten-url",
        demoURL: "https://shorten-url-delta.vercel.app/",
        description: "Shortly URL shortening API returns a shorten link of a URL from the user."
    },
    {
        id: 4,
        img: noContext,
        name: "No Context",
        date: "October 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/no-context-app",
        demoURL: "https://no-context.vercel.app/",
        description: "A website where users can search for, copy-paste and bookmark Filipino memes in a form of text.",
    },
    {
        id: 5,
        img: restCountries,
        name: "Countries",
        date: "December 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/rest-countries",
        demoURL: "https://rest-countries-sn-tin.vercel.app/",
        description: "REST countries web app allows you to search for countries and filter the selection of countries by region.",
    },
]

export default works;