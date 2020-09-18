// your Bomb code here!
import React from 'react';
class Bomb extends React.Component{
    state = {
        secondsLeft: this.props.initialCount
    }
    render(){
        return(
        <div>
            {(this.state.secondsLeft==0)? <div>Boom!</div>:<div>{this.state.secondsLeft} seconds left before I go boom!</div>}
        </div>
        )
    }

}
export default Bomb