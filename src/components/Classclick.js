import React, { Component } from 'react'

class Classclick extends Component {

    clickButton(){
        console.log("click")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Click</button>
      </div>
    )
  }
}
export default Classclick