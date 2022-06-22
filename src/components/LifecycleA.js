import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'ramya'
       }
       console.log('lifecycleA constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log("A getDerivedStateFromProps")
     }

     componentDidMount(){
         console.log("A component didmount")
     }
     
    render() {
   
        console.log('A Render method')
      
        return(
            <div>
                <div>LifecycleA</div>
                <LifecycleB/>
                </div>   
        )   
  }
}

export default LifecycleA
