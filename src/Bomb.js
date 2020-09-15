import React from 'react';

export default class Bomb extends React.Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render () {
        return (
            <div>
                { this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!` }
            </div>
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