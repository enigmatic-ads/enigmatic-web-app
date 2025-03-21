import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-column image-colunm'><img src='./lologogo.jpg' style={{
                width: "70%",

            }} /></div>
            <div className='footer-column'><h4 className='footer-column-heading'>Check This Out</h4>
                <div><Link to={'/blog'} style={{ color: "rgb(135, 140, 155)" }}>Our Blog</Link></div>
                <div><Link to={'/privacy'} style={{ color: "rgb(135, 140, 155)" }}>Privacy Policy</Link></div>
                <div ><Link to={'/about'} style={{ color: "rgb(135, 140, 155)" }}>About</Link></div>
                <div><Link to={'/contact'} style={{ color: "rgb(135, 140, 155)" }}>Contact</Link></div>
            </div>
            <div className='footer-column'><h4 className='footer-column-heading'>Connect</h4>
                <div><a href="https://www.facebook.com/profile.php?id=61559228814420" target="_blank" style={{ color: "rgb(135, 140, 155)" }}>Facebook</a></div>
                <div><a href="https://twitter.com/EnigmaticAds" target="_blank" style={{ color: "rgb(135, 140, 155)" }}>Twitter</a></div>
                <div><a href="https://www.instagram.com/enigmaticads?igsh=dHJoamgwOHpxNXh4" target="_blank" style={{ color: "rgb(135, 140, 155)" }}>Instagram</a></div>
            </div>
        </footer>
    )
}

export default Footer