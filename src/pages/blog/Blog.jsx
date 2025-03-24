import { useEffect } from 'react'
import './Blog.css'
import { Link } from 'react-router-dom';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='blog-container'>
            <img src='/blog/color2.png' className='blog-image' width={400} height={267} />
            <div className='blog-content'>
                <Link to={'/guide-to-modern-software-development'}><div className='blog-heading'>Breaking the Code: Uncovering Innovations, Practices, and Industry Trends for Success</div></Link>
                <p>In today&apos;s rapidly evolving technological landscape, software development has become a cornerstone of innovation and progress across industries. From mobile applications to enterprise solutions, the demand for cutting-edge software continues to...</p>
            </div>
            <img src='/blog/color3.png' className='blog-image' width={400} height={267} />
            <div className='blog-content'>
                <Link to={'/mastering-online-advertising'}><div className='blog-heading'>Mastering the Art of Online Advertising: Strategies for Success in the Digital Age</div></Link>
                <p>In the fast-paced and ever-evolving landscape of digital marketing, mastering the art of online advertising is essential for businesses seeking to thrive in the digital age. As consumers increasingly turn to the internet for information, entertainment, and commerce, the opportunities for businesses to connect with their target audience online have never been greater...</p>
            </div>
            <img src='/blog/color1.jpg' className='blog-image' width={400} height={267} />
            <div className='blog-content'>
                <Link to={'/design-dynamics'}><div className='blog-heading'>Design Dynamics: Navigating the Creative Realm of Graphic Design</div></Link>
                <p>In the realm of visual communication, graphic design stands as a dynamic and multifaceted discipline that plays a pivotal role in shaping our world. From the branding of household names to the layout of our favorite websites, graphic designers are the architects of visual storytelling, utilizing a blend of creativity, technical skill, and strategic thinking to...</p>
            </div>

        </div>
    )
}

export default Blog