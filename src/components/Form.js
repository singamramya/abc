import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
      
      this.state = {
         name:'',
         topic:''
      }
    }

    changeName=event=>{
        this.setState({
            name:event.target.value
        })
    }

    changeTopic=e=>{
        this.setState({
            topic:e.target.value
        })
    }

    formSubmit=e=>{
   
        <h1>{this.state.name}</h1>
        console.log(this.state.name)
         console.log(this.state.topic)
        e.preventDefault()
    }
   
  render() {
    return (
        <div>
      <form onSubmit={this.formSubmit}>
          <div>
              <label>Name</label>
              <input type='text' value={this.state.name} onChange={this.changeName}/>
          </div>
          <div>
              <select value={this.state.topic} onChange={this.changeTopic}>
                  <option value="react">react</option>
                  <option value='python'>python</option>
                  <option value='js'>js</option>
              </select>
          </div>
          <button type='submit'>submit</button>
      </form>
      
      </div>
    )
  }
}

export default Form
