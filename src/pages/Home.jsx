import ImageSlider from '../components/ImageSlider'
import Poster from '../components/Poster'
import Comp from '../components/Comp'
import BusinessCards from '../components/BusinessCards'
import { useEffect } from 'react'
import Counter from '../components/Counter'
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            <ImageSlider />
            <Poster />
            <Comp />
            <BusinessCards />
            <Counter />
        </>
    )
}

export default Home