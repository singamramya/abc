import React, { Component } from 'react'

 class LifecycleB extends Component {
    //  constructor(props) {
    //    super(props)
     
       state = {
          name:'ramya'
       }
       //console.log('lifecycleB constructor')
    //  }

     static getDerivedStateFromProps(props,state){
         console.log("B getDerivedStateFromProps")
     }

     componentDidMount(){
         console.log("B component didmount")
     }
     
    render() {
   
        console.log('B Render method')
      
        return  <div>LifecycleB</div>    
  }
}

export default LifecycleB
