import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputref=React.createRef()
      this.cbRef=null
      this.setCbRef=(e)=>{
          this.cbRef=e
      }

    }

    componentDidMount(){
        this.inputref.current.focus()
        console.log(this.inputref);

        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickBtn=(e)=>{
        console.log(this.inputref.current.value)
        // console.log(this.id.e.target.value)
        // console.log(e.target.value)
    }

    // change=(e)=>{
    //   // e.target.value;
    //   console.log("haii")
    // }
    
  render() {
    return (
      <div>
          <input type='text' ref={this.inputref}/>
          <input type='text' ref={this.setCbRef}/>
          {/* <input type='text' onChange={(e)=>e.target.value}/> */}

          <button onClick={this.clickBtn}>Click</button>
      </div>
    )
  }
}

export default RefDemo
