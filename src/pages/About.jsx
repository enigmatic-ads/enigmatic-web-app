import { useEffect } from 'react'
import './About.css'
function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='about-container'>
            <div className="image-container">
                <img src="/about.jpg" className="carousel-image" />
                <div className="centered">Enigmatic Ads</div>
            </div>
            <div className='about-content'>
                <div className='about-upper'>
                    <div className='about-tagline'>A creative agency specialized in brand strategy and digital creation.</div>
                    <div>
                        <h4 >Our Mission</h4>
                        <p className='about-upper-content'>Our mission at Enigmatic Ads is to empower brands and advertisers with the tools, insights, and capabilities they need to thrive in the digital age. We believe in harnessing the power of technology to deliver targeted, personalized advertising experiences that resonate with audiences, drive meaningful interactions, and deliver tangible business outcomes.</p>
                    </div>
                    <div><h4>What we are</h4><p className='about-upper-content'>At Enigmatic Ads, we&apos;re passionate about transforming the landscape of digital advertising through cutting-edge technology and innovative solutions. With a dedicated team of industry experts and a commitment to excellence, we&apos;re revolutionizing the way brands connect with consumers, drive engagement, and achieve measurable results in the dynamic world of AdTech.</p></div>
                </div>
                <div className='about-lower'><h2 style={{ overflow: "visible", color: "#1E73BE" }}>Our Solutions</h2>
                    <ol className='about-list'>
                        <li>
                            <p>1.Programmatic Advertising</p>
                            <p> Our programmatic advertising platform leverages advanced algorithms, real-time data insights, and machine learning technology to deliver highly targeted, personalized advertising campaigns across digital channels.</p>
                        </li>
                        <li>
                            <p>2.Audience Targeting</p>
                            <p> Our audience targeting solutions enable advertisers to reach the right audience, at the right time, with the right message. We offer advanced targeting capabilities based on demographics, interests, behaviors, and more, to ensure maximum relevance and effectiveness.</p>
                        </li>
                        <li>
                            <p>3.Creative Optimization</p>
                            <p>Our creative optimization tools empower advertisers to create, test, and optimize their ad creatives for maximum impact and engagement. From dynamic ad formats to A/B testing and multivariate testing, we provide the tools and insights needed to drive better performance and ROI.</p>
                        </li>
                        <li>
                            <p>4.Analytics and Reporting</p>
                            <p>Our analytics and reporting platform provides advertisers with real-time insights into the performance of their advertising campaigns. With customizable dashboards, advanced metrics, and actionable insights, we help advertisers make data-driven decisions and optimize their campaigns for success.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default About