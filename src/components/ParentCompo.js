import React, { Component } from 'react'
import Memocomponent from './Memocomponent'
import PureCompo from './PureCompo'
import RegCompo from './RegCompo'

 class ParentCompo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:"ramya"
       }
     }

     componentDidMount(){
         setInterval(()=>{this.setState({
            name:'ramya'
         })
        },3000)
     }
     
  render() {
      console.log("......parent component.......")
    return (
      <div>
        parent component
        <Memocomponent name={this.state.name}/>
        {/* <RegCompo name={this.state.name}></RegCompo>
        <PureCompo name={this.state.name}></PureCompo> */}
      </div>
    )
  }
}

export default ParentCompo
