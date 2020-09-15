import React from 'react';

export default class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <h1>
                I am on slide { this.state.currentSlideIndex }
            </h1>
        )
    }
}

// class currentSlideIndex extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }

//     increment = () => {
//         const newCount = this.state.count + 1
//         this.setState({
//             count: newCount 
//         })
//     }

//     render() {
//         return (
//             <div >
//                 { this.state.count }
//             </div>
//         )
//     }
// }