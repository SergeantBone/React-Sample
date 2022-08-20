import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';  

// END OF NPM IMPORTS

import cr_01 from './cr_01.jpg'
import cr_02 from './cr_02.jpg'
import cr_03 from './cr_03.jpg'
import cr_04 from './cr_04.jpg'
import cr_05 from './cr_05.jpg'
import cr_06 from './cr_06.jpg'
import cr_07 from './cr_07.jpg'
import cr_08 from './cr_08.jpg'
import cr_09 from './cr_09.jpg'
import cr_10 from './cr_10.jpg'
import cr_11 from './cr_11.jpg'

// END OF MEDIA 

import './carousel.css'

// END OF IMPORTS


function Carousel()
{
  return(
    
    // OWL CROUSEL IS USED WITH NPM


<div className="owl-body">
<OwlCarousel className='owl-theme' loop  dots={false} autoplay autoplayTimeout={1950} autoplayHoverPause>
    <div className='item'>
        <img src={cr_01} alt="cr01"></img>
    </div>
    <div className='item'>  
    <img src={cr_02} alt="cr02"></img>
    </div>
    <div className='item'>
    <img src={cr_03} alt="cr03"></img>
    </div>
    <div className='item'>
    <img src={cr_04} alt="cr04"></img>
    </div>
    <div className='item'>
    <img src={cr_05} alt="cr05"></img>
    </div>
    <div className='item'>
    <img src={cr_06} alt="cr06"></img> 
    </div>
    <div className='item'>
    <img src={cr_07} alt="cr07"></img>
    </div>
    <div className='item'>
    <img src={cr_08} alt="cr08"></img>
    </div>
    <div className='item'>
    <img src={cr_09} alt="cr09"></img>
    </div>
    <div className='item'>
    <img src={cr_10} alt="cr10"></img>
    </div>
    <div className='item'>
    <img src={cr_11} alt="cr11"></img>
    </div>

</OwlCarousel>
</div>
  )
  
}

export default Carousel;