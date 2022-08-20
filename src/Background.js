import './Background.css'

// END OF IMPORTS


function Background(props){
    const {adderess=''}=props
    
// ADDERESS IS USE TO ADD BACKGROUND IMAGES WITH INLINE CSS AS PROPS 
    


        return(<div>
            
            <div className="setmeup" id={props.id} style={{backgroundImage:`url(${adderess})`,backgroundAttachment:`fixed`,
            overflow:`hidden`,backgroundRepeat:`no-repeat`,backgroundSize:`100% 100%`,position:`relative`,
            margin:`0 auto`,backgroundPosition:`top center`
            }}>
                {/* PRETTY STUPID NAME FOR A CSS INLINE PROP BUT IT WORKS SO WHO CARES ;D */}
                
                 <div className="image-body" style={props.magicSan}><h1 className="img-text" style={props.magic}> {props.desc}</h1></div>
               </div>
                
                {/* USED TO INSERT THE JS FILES */}

               <div className="files">
               {props.FileName}</div>
               </div>
             
        )
}

export default Background