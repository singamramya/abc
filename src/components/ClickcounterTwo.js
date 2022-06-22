import React, { Component } from 'react'

class ClickcounterTwo extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }

    // incrementcount=()=>{
    //     this.setState(prevstate=>{
    //         return {count:prevstate.count+1}
    //     })
    // }
    
  render() {
    //   const {count}=this.state
    const {count,incrementcount}=this.props
    return (
      <div>
        {/* <button onClick={this.incrementcount}>click {count} times</button> */}
        <button onClick={incrementcount}>click {count} times</button>
      </div>
    )
  }
}

export default ClickcounterTwo
