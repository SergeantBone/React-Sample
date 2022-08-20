import test_about from './test_about`.jpg'
import './about.css'

// END OF IMPORTS

function Aboutme(){
    return(
        <div className="about-body">
            <img src={test_about} alt="mn" width="40%" height="500px"></img>
            <div className="about-text-body">
            <h1 className="about-heading">A 100V</h1>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis repellat dolorem esse soluta in? Quam doloribus laboriosam impedit. 
                Fugiat magnam doloremque cumque molestias animi repellat sequi, sed eveniet esse et. Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Impedit similique cum nesciunt et, velit praesentium aperiam magnam qui 
                itaque placeat. Iste odit, explicabo tempora consectetur commodi magnam eum perferendis error?</p>
                <button className="about-button">See More</button>
                </div>
        </div>
    )
}
export default Aboutme