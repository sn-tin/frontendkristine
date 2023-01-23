import noContext from '../../assets/nocontext.png';
import shortly from '../../assets/shortly.png';
import todo from '../../assets/todo.png';
import rps from '../../assets/rps.png';

let works = [
    {
        id: 1,
        img: noContext,
        name: "No Context",
        date: "October 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/no-context-app",
        demoURL: "https://no-context.vercel.app/",
        slug: "no-context",
        description: [
            "As frontend development goes far beyond just coding with plain JavaScript, I’ve decided to learn a framework that I think would suit my work best which is ReactJS. After weeks of studying it, I’ve come up with a project that I and my friends would enjoy using – the No Context app.",
            "This project is a very gen-z Filipino-specific project as it mainly contains Filipino texts. The idea for this project started by reading a thread on Twitter with famous Filipino memes turned into texts (in this case, tweets) or the so-called “copypastas”. My friends and I used these texts to joke around on messages, however, bookmarking the thread and searching it on your bookmarks with tons of tweets saved would be such a hassle so I decided to create a web app where one can easily search, copy and favorite (save on local storage) their texts.",
        ],
        skills: {
            title: "Skills",
            skill: "ReactJS, npmjs, Figma"
        }
    },
    {
        id: 2,
        img: shortly,
        name: "Shortly",
        date: "September 2022",
        category: "Solution",
        codeURL: "https://github.com/sn-tin/shorten-url",
        demoURL: "https://shorten-url-delta.vercel.app/",
        slug: "shortly",
        subtopics: [
            {
                title: "About the project",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.",
            },
            {
                title: "Process",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.",
            },
            {
                title: "Result",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.",
            }
        ]
    },
    {
        id: 3,
        img: todo,
        name: "To-Do List",
        date: "August 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/todo-list",
        demoURL: "https://todo-list-sn-tin.vercel.app/",
        slug: "to-do-list",
        description: [
            "On another month of studying JavaScript, another project was born – a To-Do List. This project focuses on applying what I’ve learned about ES6 modules, Webpack, and OOP (object-oriented programming). As someone who’s relatively new to JavaScript, this challenge was quite difficult and challenging, but it’s also something that I sure have learned a lot about.",            "This project is a very gen-z Filipino-specific project as it mainly contains Filipino texts. The idea for this project started by reading a thread on Twitter with famous Filipino memes turned into texts (in this case, tweets) or the so-called “copypastas”. My friends and I used these texts to joke around on messages, however, bookmarking the thread and searching it on your bookmarks with tons of tweets saved would be such a hassle so I decided to create a web app where one can easily search, copy and favorite (save on local storage) their texts.",
            "This simple to-do list takes the user’s task by clicking the “Add Task” on the upper-right corner of the page. Each task can be categorized on a project-based by clicking on the hamburger menu on the upper-left of the page and adding a new project. Each created project will be added on the project dropdown on the Add Task from. Each finished task will have a strike-through by clicking the checkbox. The user also has options to delete edit or delete a task.",
        ],
        skills: {
            title: "Skills: ",
            skill: "HTML, Vanilla JavaScript, Sass, Webpack, and Vercel (to deploy)",
        }
    },
    {
        id: 4,
        img: rps,
        name: "Rock Paper Scissors",
        date: "July 2022",
        category: "Personal Project",
        codeURL: "https://github.com/sn-tin/rock-paper-scissors",
        demoURL: "https://odin-rock-paper-scissors-pi.vercel.app/",
        slug: "rock-paper-scissors",
        subtopics: [
            {
                title: "About the project",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.",
            },
            {
                title: "Process",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.",
            },
            {
                title: "Result",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.",
            }
        ]
    }
]

export default works;