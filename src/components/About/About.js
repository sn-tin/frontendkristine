import { StyleAbout, AboutContent, AboutPersonal, AboutTools } from '../About/About.styles'

const About = () => {
    return (
        <StyleAbout>
            <h1>About</h1>
            <AboutContent className='about-content'>
                <AboutPersonal className='personal' >
                    <h2>Kristine May de Jesus</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.</p>
                </AboutPersonal>
                <AboutTools className='tools' >
                    <h2>Tools I use</h2>
                    <p>
                    HTML, CSS, Bootstrap,
                    SCSS/SASS, JavaScript,
                    ReactJS, jQuery, Webpack,
                    Parcel, Git, Ubuntu
                    </p>
                </AboutTools>
            </AboutContent>
        </StyleAbout>
    )
}

export default About;