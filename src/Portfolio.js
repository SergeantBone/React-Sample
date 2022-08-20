import './port.css'
import Card2 from "./card2";

// END OF IMPORTING FILES

import pr_01 from './pr_01.jpg'
import pr_02 from './pr_02.jpg'
import pr_03 from './pr_03.jpg'
import pr_04 from './pr_04.jpg'
import pr_05 from './pr_05.jpg'

//END OF MEDIA

import { useState } from 'react';

// END OF IMPORTS

function Portfolio(){

   

// DECLARATION OF ARRAY AND STATE WITH VALUES

   var arr=([
    {img:pr_01,grp:'fash',text:"pic 1",id:1},
    {img:pr_02,grp:'fash',text:"pic 2",id:2},
    {img:pr_03,grp:'ads',text:"pic 3",id:3},
    {img:pr_04,grp:'awards',text:"pic 4",id:4},
    {img:pr_05,grp:'none',text:"pic 5",id:5} 
      ])
     const [all,allset]= useState(null)



      // 2ND NAV BAR DESGINED TO BE USED WITH STATE


        return( 
            <div style={{backgroundColor:`#141616`}}>
                
                <nav className="port-nav">
                <ul>
                    <li  onClick={()=> allset(null)}>ALL</li>
                    <li  onClick={()=> allset('fash')}>FASHION</li>    
                    <li  onClick={()=> allset('none')} >RANDOM</li>
                    <li  onClick={()=> allset('ads')}>ADS</li>
                    <li  onClick={()=> allset('awards')}>AWARDS</li>
                </ul>
            </nav>

            {/* MODAL BODY BEGINS */}

            <div className="card-body">

            {/* ON CLICK TEMPLATE IS CARD 2 */}

        <div className="card2" id="#card">      
    
            {/* THIS DIV BELOW IS USED TO SHOW STATE WITH CARD 2 IMAGES AND THE ARRAY */}

  <div className="call_out" >
            
  
  
  
  
 

        {all===null?
            (arr.map(alls=>(<Card2 key={alls.id} img={alls.img} text={alls.text} ></Card2>))):
            (arr.filter(als=>als.grp===all).map(alls=>(<Card2 key={alls.id} img={alls.img} text={alls.text} ></Card2>)))
        }
  </div>
  
</div>
</div></div>
        )
        
}
export default Portfolio