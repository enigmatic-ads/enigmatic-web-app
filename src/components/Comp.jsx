import './Comp.css'
import { FaPencilRuler, FaRegCommentAlt, FaGlobe } from 'react-icons/fa'
function Comp() {
    return (
        <div className='comp-container'>
            <div className='comp-column-1'>
                <div className='comp-box'><div><FaPencilRuler className='comp-icon' /><h4 className='comp-heading'>Business Solutions</h4><div className='comp-content'>If it can be designed, printed or put online we can do IT!!!</div></div></div>
                <div className='comp-box'><div><FaRegCommentAlt className='comp-icon' /><h4 className='comp-heading'>Brand & Communication</h4><div className='comp-content'>You can&apos;t push your sales messages on your fans too often.</div></div></div>
                <div className='comp-box'><div style={{
                    marginTop: "-17%"
                }}><FaGlobe className='comp-icon' /><h4 className='comp-heading'>Creative Strategy</h4><div className='comp-content'>The importance of gratitude is never forgotten.</div></div></div>
                <div className='comp-box'><div><FaRegCommentAlt className='comp-icon' /><h4 className='comp-heading'>Social Marketing</h4><div className='comp-content'>Going viral is not an outcome; it is a happening. Sometimes it happens; sometimes it doesn&apos;t. Just remember, fans are vanity and sales are sanity.</div></div></div>
            </div>
            <div className='comp-column-2'></div>
        </div>
    )
}

export default Comp