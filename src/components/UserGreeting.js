import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         a:10,b:20,isLoggedin:false
      }
    }
    
  render() {
    //   const {a,b}=this.state
    //   var sum=(a+b)
                                           //if/else
    //   if(sum==30){
    //       return<div>True</div>
    //   }else{
    //       return <div>False</div>
    //   }

    // let msg;                            //variable Approach
    // if(this.state.isLoggedin){
    //     msg=<div>Logged In</div>
    // }else{
    //     msg=<div>Logged out</div>
    // }
    // return<div>{msg}</div>


    // return(                                     //ternary method
    //     this.state.isLoggedin?<div>LoggedIn</div>:<div>Loggedout</div>
    // )

    return this.state.isLoggedin && <div>welcome</div> //short circuit
    // return (
    //   <div>
    //       <h1>conditional rendering</h1>
    //   </div>
    // )
  }
}

export default UserGreeting