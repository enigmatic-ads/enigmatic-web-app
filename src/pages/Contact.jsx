import { useEffect } from 'react';
import './Contact.css'
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <div className='contact-container'>
            <h1 style={{ color: "#1E73BE" }}>Get in Touch with us!!</h1>
            <div className='contact-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <label htmlFor="name">Your name</label>
                        <br />
                        <input type="text" id="name" />
                    </div>

                    <div className='form-input'>
                        <label htmlFor="email">Your email</label>
                        <br />
                        <input type="email" id="email" />
                    </div>

                    <div className='form-input'>
                        <label htmlFor="subject">Subject</label>
                        <br />
                        <input type="text" id="subject" />
                    </div>

                    <div className='form-input'>
                        <label htmlFor="message">Your Message</label>
                        <br />
                        <textarea id="message"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>

            </div>

        </div>


    )
}

export default Contact