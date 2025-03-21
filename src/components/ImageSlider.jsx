import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'
export default function ImageSlider() {
    var settings = {
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };
    return (
        <Slider {...settings}>
            <div className="image-container">
                <img src="./crousel11.jpg" className="carousel-image" />
                <div className="centered">KickStart Your Business.</div>
            </div>
            <div className="image-container">
                <img src="./crousel12.jpg" className="carousel-image" />
                <div className="centered">KickStart Your Business.</div>
            </div>
            <div className="image-container">
                <img src="./crousel13.jpg" className="carousel-image" />
                <div className="centered">KickStart Your Business.</div>
            </div>




        </Slider>
    );
}