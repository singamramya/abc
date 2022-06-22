import React,{Component} from "react";

class Message extends Component{

    // constructor(){
    //     super()
    state={
            msg:'welcome'
        }
    //}

    changeMsg(){
        this.setState({
            msg:'welcome to reactjs'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMsg()}>Add</button>
            </div>
        )
    }
}

export default Message