// your ImageSlider code here!
import React, {Component} from 'react';
import { render } from 'enzyme';

export default class ImageSlider extends Component {
constructor(){
    super()
    this.state = {
        currentSlideIndex: 0
    }
}


    render(){
        return (
            
                `I am on slide ${this.state.currentSlideIndex}`
        
        )
    }
}