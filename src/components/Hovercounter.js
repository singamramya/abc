import React, { Component } from 'react'
import Withcounter from './Withcounter'

class Hovercounter extends Component {

    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
      
    // incrementcount=()=>{
    //       this.setState(prevState=>{
    //          return {count:prevState.count+1}
    //       })
    //   }
  render() {
      const {count,incrementcount}=this.props
    return (
      <div>
        {/* <h2 onMouseOver={incrementcount}>{this.props.name} Hover {count} times</h2> */}
        <h2 onMouseOver={incrementcount}>Hover {count} times</h2>
      </div>
    )
  }
}

export default Withcounter(Hovercounter,20)
