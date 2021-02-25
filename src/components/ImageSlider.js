
import React, { Component } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current:this.props.index
         }
    }
     nextSlide = () => {
         if(this.state.current === this.props.slides.length-1){
             this.setState({current: 0})
         }
        else{
            this.setState({current:this.state.current+1})
        }
      };
    
      prevSlide = () => {
        if(this.state.current === 0){
            this.setState({current: this.props.slides.length-1})
        }
       else{
           this.setState({current:this.state.current-1})
       }
      };
    
      
    
    render() { 
        return (
<section className='slider' style={{margin:"auto"}}>
<FaArrowAltCircleLeft className='left-arrow' onClick={this.prevSlide} style={{float:"left",fontSize:"20px"}}
 />
      <FaArrowAltCircleRight className='right-arrow' onClick={this.nextSlide} style={{float:"right",fontSize:"20px"}}/>
      {this.props.slides.map((slide, index) => {
          console.log("index",index)
        return (
          <div
            className={index === this.state.current ? 'slide active' : 'slide'}
            key={index} style={{paddingLeft:"10px",paddingRight:"10px"}}
          >
            {index === this.state.current && (
              <img src={slide.url} alt='hospital image' className='image' style={{ objectFit:"contain"}} height="300px"  width="100%" />
            )}
            
          </div>
          
        );
      })}
      <div>{this.state.current +1}/{this.props.slides.length}</div>
    </section>
          );
    }
}
 
export default ImageSlider;
