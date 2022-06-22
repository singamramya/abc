import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`hai ${this.state.parentname} ${childName}`)
    }
  render() {
    return (
      <div>
          <ChildComponent greetAttribute={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
