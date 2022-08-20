import './Navbar.css'
import { useState } from 'react';

// END OF IMPORT

// SMALL CODE FOR NAV BAR DISPLAYING ON SCROLL

function Navabar(){
  const [navbar,setNavbar]=useState(false);


  const changeBackground =()=>{
    if(window.scrollY >=100)
      {
        setNavbar(true)
      }
    else 
      {
        setNavbar(false)
      }
  }
  window.addEventListener('scroll',changeBackground)

    return(
        // ITS BASIC TRUE FALSE WITH CSS USING STATE
      
        <nav className={navbar ? 'Navvbar' : 'navvbar1'}>
  <p className="logo">image</p>
  <ul className="nav-links">
    <li><a href="http://www.google.com">google</a></li>
    <li><a href="http://www.youtube.com">youtube</a></li>
    <li><a href="http://www.twitch.tv">twitch</a></li>
    <li><a href="http://www.spotify.com">spotify</a></li>
    <li><a href="https://www.youtube.com/user/PewDiePie/videos">PewDiePie</a></li>
    <li><a href="Home/">Home</a></li>
    <li><a href="about/">About</a></li>
    
  </ul>
</nav>
    );
};

export default Navabar;