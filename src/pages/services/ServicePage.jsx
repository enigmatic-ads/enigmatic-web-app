import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getUrlData } from '../../utils/utils';
import './ServicePage.css'
function ServicePage() {
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const path = useLocation();

    const urlData = getUrlData(path.pathname);

    useEffect(() => {
        window.scrollTo(0, 0);
        setImageUrl(urlData.urlsrc);
        setContent(urlData.content);
        setTitle(urlData.title);
    }, [urlData])

    return (
        <div className='service-container'>
            <div className="image-container">
                <img src={imageUrl} className="carousel-image" />
                <div className="centered">{title}</div>
            </div>
            <div className='service-content'>{content}</div>
        </div>
    )
}

export default ServicePage