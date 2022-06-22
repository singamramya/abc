import React, { Component } from 'react'

import Withcounter from './Withcounter'

class Clickcounter extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    

    // incrementcount=()=>{
    //     this.setState(prevState=>{
    //        return {count:prevState.count+1}
    //     })
    // }
  render() {
      const {count,incrementcount}=this.props
    return (
      <div>
        <button onClick={incrementcount}> {this.props.name} click {count}</button>
      </div>
    )
  }
}

export default Withcounter(Clickcounter,10)
