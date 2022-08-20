import React from 'react';
import ReactModal from 'react-modal';
import './card2.css'

// END OF IMPORTS

// A SMALL STATE PROGRAM WRTITTEN WITH SOME HELP

class  Card2 extends React.Component {
  constructor(){
    super();
    this.state={showModal:false};
    
    this.handleOpenModal=this.handleOpenModal.bind(this);
    this.handleCloseModal=this.handleCloseModal.bind(this);
  }
  handleOpenModal(){
    this.setState({showModal:true});
  }
  handleCloseModal(){
    this.setState({showModal:false});
  }
  
  render(){
    

    return(
      <div>
        
        {/* INSTEAD OF BUTTON WE ARE USING WHOLE DIV TO CLICK OPEN AS TRIGGER */}

    <div className="card-body" onClick={this.handleOpenModal} style={{ width:`100%`}} >
      
     

      {/* THATS WHY CSS WAS MESSING UP WITH DISPLAY IMAGE IN PORTFOLIO TAB LOOK AT IN LINE CSS HEIGHT */}

    <div className="container">
  <img src={this.props.img} alt="Avatar" style={{width:`100%`,height:`auto`}} />
  <div className="overlay2">
    <div className="text">{this.props.text}</div>
  </div>
</div>
    
    
  </div>

       {/* CONTEXT AFTER CLICKING MODAL */}

  <ReactModal 
            isOpen={this.state.showModal} 
            
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            preventScroll={true}
            overlayClassName="overlay">
              
              <div className="grid-container">
                <img src={this.props.img} width="100%" height="500px" style={{objectFit:`contain`}} alt="test"  />
        <p style={{textAlign:`center`,justifyContent:`center`,padding:`0px 0px 0px 0px`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Perferendis repellat dolorem esse soluta in? Quam doloribus laboriosam impedit. Fugiat magnam doloremque cumque molestias animi repellat sequi,
 sed eveniet esse et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique cum nesciunt et, velit praesentium aperiam 
 magnam qui itaque placeat. Iste odit, explicabo tempora consectetur commodi magnam eum perferendis error?</p>
        </div>
       
        </ReactModal>
  </div>
  
  )
    
}
}
export default Card2