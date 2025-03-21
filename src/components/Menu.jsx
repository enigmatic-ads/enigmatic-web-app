import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './Menu.css'
import { Link } from 'react-router-dom';
const Menu = () => {
    const [isSticky, setIsSticky] = useState(false);
    const yourHeaderHeight = 50; // Adjust this value to match the height of your header


    // Event handler to toggle the dropdown


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > yourHeaderHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <nav className={`nav ${isSticky ? 'sticky' : ''} `}>
        //     {/* Add your navigation items here */}
        //     <div className="nav-item">Home</div>
        //     <div className="nav-item">About</div>
        //     <div className="nav-item">Contact</div>
        //     {/* More navigation items */}
        // </nav>
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
            <div className="navbar-container container">
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="/">Home</a></li>

                    {/* Dropdown menu */}
                    <li>
                        <a href="#">Web Solutions</a>
                        <MdKeyboardArrowDown />

                        <div className="submenu">
                            <div className="submenu-items-container">
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Build a Website</h4>
                                    <ul>
                                        <li><Link to={'/by-industry'}>By Industry</Link></li>
                                        <li><Link to={'/custom-plugins'}>Custom Plugins</Link></li>
                                        <li><Link to={'/api-integration'}>API Integration</Link></li>

                                    </ul>
                                </div>
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Maintain a website</h4>
                                    <ul>
                                        <li><Link to={'/maintenance-plans'}>Maintenance Plans</Link></li>
                                        <li><Link to={'/content-generation'}>Content Generation</Link></li>
                                        <li><Link to={'/hosting'}>Hosting</Link></li>

                                    </ul>
                                </div>
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Grow your web presence</h4>
                                    <ul>
                                        <li><Link to={'/go-viral'}>Go Viral</Link></li>
                                        <li><Link to={'/online-advertising'}>Online Advertising</Link></li>
                                        <li><Link to={'/web-presence'}>Web Presence Review</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li><a href="#">Software Development</a><MdKeyboardArrowDown />
                        <div className="submenu">
                            <div className="submenu-items-container">
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Business Software</h4>
                                    <ul>
                                        <li><Link to={'/custom-business'}>Custom Business Software</Link></li>
                                    </ul>
                                </div>
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>&nbsp;&nbsp;Apps</h4>
                                    <ul>
                                        <li><Link to={'/web-apps'}>Web Apps</Link></li>
                                        <li><Link to={'/android-apps'}>Android Apps</Link></li>
                                        <li><Link to={'/ios-apps'}>IOS Apps</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li><a href="#">Marketing Agency</a><MdKeyboardArrowDown />
                        <div className="submenu">
                            <div className="submenu-items-container">
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Web Marketing</h4>
                                    <ul>
                                        <li><Link to={'/seo'}>SEO</Link></li>
                                        <li><Link to={'/online-advertising'}>Online Advertising</Link></li>
                                        <li><Link to={'/web-presence'}>Web Presence</Link></li>
                                    </ul>
                                </div>
                                <div className='submenu-item'><h4 style={{ color: "#1E73BE", marginBottom: "1rem" }}>Viral Marketing</h4>
                                    <ul>
                                        <li><Link to={'/social-media'}>Social Media</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <h1 className="logo">
                    <Link to={'/'}><img src="/logonew.jpg" width={100} height={100} alt="Logo" /></Link>
                </h1>
            </div>
        </nav>
    );
};

export default Menu;
