import React from 'react';
import ReactPLayer from 'react-player/file'
import video1 from './video1.mp4'
import video2 from './video2.mp4'
function Player() {
   
    // STATE FOR VIDEO WITH ARRAY 

       let     videos=[video1,video2]
       const [current, setCurrent] = React.useState(0);
//    this.state={vid:videos[1]}
    //this.setState({vid:videos[0]})
    
    
   


    return(
        <div style={{height:`630px`,backgroundColor:`black`}}>
            <ReactPLayer
            playing={true}
            muted={true}
            controls={true}

            // ARRAY WITHIN ARRAY URL={ARRAY1[ARRAY2]} BASICALL MEANS VIDEOS[0]..VIDEOS[1] BCOZ WE HAVE 2 VIDS SO YEAH
    
            url={[videos[current]
            

                
            ]}
            onEnded={() => setCurrent(current < 1 ? current + 1 : 0)}
            width='100%'
            height='640px'
            
            
            >

            </ReactPLayer>
        </div>
    )
        }
export default Player