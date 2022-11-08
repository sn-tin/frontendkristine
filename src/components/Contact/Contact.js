import { StyledContact, FlexContact } from './Contact.style.js'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'

const Contact = () => {
    return (
        <StyledContact>
            <h1>Contact</h1>
            <h2>Interested in working together?</h2>
            <p>Please don’t hesistate to reach out. I’d be glad to work with you!</p>
            <div className='contacts'>
                <FlexContact className='email'>
                    <img src={mail} alt="Mail icon"/>
                    <span>kristinemaydj.work@gmail.com</span>
                </FlexContact>
                <FlexContact className='number'>
                    <img src={phone} alt="Phone icon" />
                    <span>(+63) 915 945 4515</span>
                </FlexContact>
            </div>
        </StyledContact>
    )
}

export default Contact;