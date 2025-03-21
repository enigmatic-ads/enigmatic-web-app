import { Link } from 'react-router-dom'
import './BusinessCards.css'
function BusinessCards() {
    return (
        <div className='business-card-container'>
            <div className='indvisual-cards-container'>
                <div className='business-card'><div className='business-item'>
                    <h4 className='item-heading'>Development</h4>
                    <h2 className='item-heading-2'>Breaking the Code: Unveiling the Secrets Behind Modern Software Development Practices, Innovations, and Industry Trends for Success.</h2>
                    <div className='item-date'>March 22, 2024</div>
                    <p className='item-content'>Software development is the intricate process of designing, creating, testing, and maintaining computer programs and applications to fulfill specific user needs or business objectives …</p>
                    <Link to={'/guide-to-modern-software-development'}><div className='item-read'>Read More</div></Link>
                </div></div>

                <div className='business-card'><div className='business-item'>
                    <h4 className='item-heading'>Graphic Design</h4>
                    <h2 className='item-heading-2'>Design Dynamics: Navigating the Creative Realm of Graphic Design</h2>
                    <div className='item-date'>March 23, 2024</div>
                    <p className='item-content'>Graphic design is a dynamic and multifaceted field that involves the creation of visual content to communicate messages, evoke emotions, and solve problems. From branding …</p>
                    <Link to={'/design-dynamics'}><div className='item-read'>Read More</div></Link>
                </div></div>
                <div className='business-card'><div className='business-item'>
                    <h4 className='item-heading'>Online Advertising</h4>
                    <h2 className='item-heading-2'>Mastering the Art of Online Advertising: Strategies for Success in the Digital Age</h2>
                    <div className='item-date'>March 24, 2024</div>
                    <p className='item-content'>Online advertising is a pivotal aspect of modern marketing strategies, enabling businesses to connect with their target audience through …</p>
                    <Link to={'/mastering-online-advertising'}><div className='item-read'>Read More</div></Link>
                </div></div>
            </div>
        </div>
    )
}

export default BusinessCards