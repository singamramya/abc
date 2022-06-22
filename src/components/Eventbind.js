import React, { Component } from 'react'

export class Eventbind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         msg:'hello world'
      }
    //   this.clickBtn=this.clickBtn.bind(this)
    }

    // clickBtn(){
    //     this.setState({
    //         msg:'hai'
    //     })
    //     console.log(this)
    // }

    clickBtn=()=>{
        this.setState({
            msg:'haiiii'
        })
    }
    

  render() {
    return (
      <div>
          <div>{this.state.msg}</div>
        {/* <button onClick={this.clickBtn.bind(this)}>Click Me</button> */}  
        {/* <button onClick={()=>this.clickBtn()}>Click Me</button> */}
        <button onClick={this.clickBtn}>Click Me</button>
      </div>
    )
  }
}

export default Eventbind
