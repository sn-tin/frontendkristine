import { StyledContact } from './Contact.style.js'

const Contact = () => {
    return (
        <StyledContact>
            <h1>Contact</h1>
            <h2>Interested in working together?</h2>
            <p>Please don’t hesistate to reach out. I’d be glad to work with you!</p>
            <div className='contacts'>
                <div className='email'>
                    <img src />
                    <span>kristinemaydj.work@gmail.com</span>
                </div>
                <div className='number'>
                    <img src />
                    <span>(+63) 915 945 4515</span>
                </div>
            </div>
        </StyledContact>
    )
}

export default Contact;