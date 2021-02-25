
import React, { Component } from 'react';
//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
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
<section className='slider'>
      <button className='left-arrow' onClick={this.prevSlide} >left</button> 
      {/* <i class="far fa-angle-left" onClick={this.prevSlide}> </i> */}
      <button className='right-arrow' onClick={this.nextSlide} >right</button>
      {/* <i class="far fa-angle-right" onClick={this.nextSlide}></i> */}
      {this.props.slides.map((slide, index) => {
          console.log("index",index)
        return (
          <div
            className={index === this.state.current ? 'slide active' : 'slide'}
            key={index} style={{margin:"10px"}}
          >
            {index === this.state.current && (
              <img src={slide.url} alt='travel image' className='image' height="300px" width="100%" />
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
