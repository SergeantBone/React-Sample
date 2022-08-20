import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.jpg'
import bg4 from './bg4.jpg'
import bg5 from './bg5.jpg'

//END OF MEDIA IMPORTS

import './parr.css'

// END OF CSS IMPORTS


import Background from './Background';
import Carousel from './Carousel';
import Aboutme from './Aboutme';
import Blog from './Blog'
import Portfolio from './Portfolio';
import Card from './Card'
import Navabar from './Navbar';
import Footer from './footer'

// END OF IMPORTS

function ParallaxImage(){
    return(

        // I KNOW IT LOOKS LIKE UTTER CRAP BUT WHAT THIS DOES IS TO DISPLAY BACKGROUND IMAGE WITH ITS TEXT AND FILENAME IS LIKE ANOTHER DIV WITH EXTRA STEPS TO SHOW PARRALAX WITH HEAD TITLE LIKE HERE IT IS DESC PROPS
        
    <div> 
       <Navabar></Navabar>
        <Background id="01" adderess={bg1} FileName={ <Aboutme/>} desc="ENTER TITLE"
        magic={{top: `36%`,left: `55%`,right:`0px`,transform: `translate(-55%, -36%)`,WebkitTransform: `translate(-55%, -36%)`, textShadow: `0px 0px 20px #E30931`,backgroundColor: `rgba(227, 9, 40, 0.3)`}}/>
        
        
        <Background id="02" adderess={bg2} desc="CAROUSEL TAB"  magic={{top: `30%`,left: `53%`,right:`0px`,transform: `translate(-50%, -30%)`,WebkitTransform: `translate(-55%, -36%)`,textShadow:`2px 4px 20px #fa6ba0`,backgroundColor: `rgba(243,49,92,0.5)`}}
        FileName={<Carousel />}/>


        <Background id="03" adderess={bg3}    FileName={<Card/>} desc="CARDS TAB" 
        magic={{top: `38%`,left: `50%`,right:`0px`,transform: `translate(-40%, -38%)`,WebkitTransform: `translate(-40%, -38%)`,textShadow:`2px 4px 20px #3B688C`,backgroundColor: `rgba(59, 104, 140, 0.6)`}}   />


        <Background id="04" adderess={bg4} FileName={<Blog/>} desc="SOME SMALL VIDS "
         magic={{top: `43%`,left: `55%`,transform: `translate(-5%, -36%)`,WebkitTransform: `translate(-5%, -36%)`, textShadow: `0px 0px 20px black`}}/>


        <Background id="05" adderess={bg5} FileName={<Portfolio />} desc="CATALOG TAB"
        magic={{top: `30%`,left: `15%`,transform: `translate(-15%, -30%)`,WebkitTransform: `translate(-15%, -30%)`, textShadow: `0px 0px 20px #141616`,backgroundColor: `rgba(20, 22, 22, 0.5)`}}/>
    
        <Footer></Footer>

    </div>
    )
}
    

export default ParallaxImage