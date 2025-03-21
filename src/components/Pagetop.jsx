import { FaClock, FaEnvelope, FaChild, FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Pagetop.css';
import { Link } from 'react-router-dom';




function Pagetop() {
    return (
        <div className="page-top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="top-bar-wrap top-bar-left">
                            <ul className="top-bar-info">
                                <li className="info-item">
                                    <FaClock className="info-icon" />
                                    M-F: 9-4pm
                                </li>
                                <li className="info-item">
                                    <Link to="/contact" className="info-link">
                                        <FaEnvelope className="info-icon" />
                                        Contact
                                    </Link>
                                </li>
                                <li className="info-item">
                                    <Link to="/about" className="info-link">
                                        <FaChild className="info-icon" />
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 top-bar-right">
                        <div className="top-bar-wrap top-bar-right">
                            <div className="top-bar-social-network">
                                <a href="https://www.facebook.com/profile.php?id=61559228814420" target="_blank">
                                    <FaFacebookSquare className="info-icon" />
                                </a>
                                <a href="https://twitter.com/EnigmaticAds" target="_blank">
                                    <FaTwitter className="info-icon" />
                                </a>
                                <a href="https://www.instagram.com/enigmaticads?igsh=dHJoamgwOHpxNXh4" target="_blank">
                                    <FaInstagram className="info-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagetop;
