import './Counter.css';
function Counter() {
    return (
        <div className="counter-container">
            <img src="/counter1.jpeg" alt="counter" />
            <div className="overlay">Marketing is really Just about sharing your passion</div>
            <div className='counter-main'>
                <div className='counter-main-content'>
                    <div className='counter-head-count'>500 +</div>
                    <div>Websites</div>
                </div>
                <div className='counter-main-content'>
                    <div className='counter-head-count'>1500 +</div>
                    <div>Design Projects</div>
                </div>
                <div className='counter-main-content'>
                    <div className='counter-head-count'>280 +</div>
                    <div>Satified Clients</div>
                </div>
                <div className='counter-main-content'>
                    <div className='counter-head-count'>20 +</div>
                    <div>National Awards</div>
                </div>
            </div>
        </div>
    )
}

export default Counter;