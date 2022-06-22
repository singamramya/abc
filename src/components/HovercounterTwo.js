import React, { Component } from 'react'

 class HovercounterTwo extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
  
    //   incrementcount=()=>{
    //       this.setState(prevstate=>{
    //           return {count:prevstate.count+1}
    //       })
    //   }
     
  render() {
    //   const {count}=this.state
    const {count,incrementcount}=this.props
    return (
    //   <h1 onMouseOver={this.incrementcount}>click {count}</h1>
    <h1 onMouseOver={incrementcount}>click {count}</h1>
    )
  }
}

export default HovercounterTwo
