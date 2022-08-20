import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import test_card from './test_card.jpg'

// END OF IMPORTS

function Card(props){
    
    //DIDN'T NEEDED ENDLESS CARDS SO DIDN'T REALLLY USED PROPS OR STATE HERE

    return(<div style={{backgroundColor:`#3B688C`}}>
    
            {/* NPM OWL IS INSTALLED */}

        <OwlCarousel className='owl-theme' dots={false} pullDrag={false} mouseDrag={false} touchDrag={false}>

                {/* 1ST CARD STARTS HERE */}

            <div className="item">
                <div className="card">
                    <img src={test_card} alt=":D" width="50%" />
                    <div className="card-container">
                     <h3>head1</h3>
                     <p>dtseukjthjasjfsdf this a test again</p>
                    </div>
                </div>
            </div>

                {/* 2ND CARD STARTS HERE */}


            <div className="item">
            <div className="card">
                <img src={test_card} alt=":D" width="50%" />
                <div className="card-container">
                    <h3>header2</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Reprehenderit architecto dolore quas quos quidem veritatis eveniet,
                          itaque aspernatur explicabo autem voluptates in temporibus cumque pariatur asperiores, 
                          laborum saepe inventore quibusdam.</p>
                </div>
            </div>
            </div>
           
            {/* 3ST CARD STARTS HERE */}

            <div className="item">
            <div className="card">
                <img src={test_card} alt=":D" width="50%" />
                <div className="card-container">
                    <h3>head3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Quos consequatur laboriosam perspiciatis iusto, illo, 
                         architecto soluta fugit porro vel quasi modi. Fugit quod vel animi ipsum 
                         quia autem distinctio quasi.</p>
                </div>
            </div>
            </div>
            </OwlCarousel>
            </div>
    )
}
export default Card