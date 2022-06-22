import React,{Component} from 'react'

// class St extends Component{

//     state={
//         Name:"",
//         Role:""
//     }

//     changeMsg(){
//         this.setState({
//             Name:"hai",
//             Role:"hello"
//         })

//     }
//     render(){
//         return(
//             <div>
//                 <p>Name:{this.state.Name}</p>
//                 <p>Role:{this.state.Role}</p>
//                 <button onClick={()=>this.changeMsg()}>Add</button>
//             </div>
//         )
//     }
// }

// const St=(props)=>{
//     const{name,Location}=props
   
//     return(
//         <div>
//             <p>Name:{name}</p>
//             <p>Location:{Location}</p>
//             <button onClick={this.Incriment()}>Add</button>
//         </div>
//     )
// }

class St extends Component{

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //     Name:'',
    //     Location:''
    //   }
    // }
    

    state={
        Name:'',
        Location:''
    }

    changeNames=()=>{
        //console.log("fgsf")
        this.setState({
            Name:"hai",
            Location:"hyd"
        })    
    }

    render(){
        const{Name,Location}=this.props
        return( 
            <div>
                <p>Name:{Name}</p>
                <p>Location:{Location}</p>
                <button onClick={()=>this.changeNames()}>Add</button>
            </div>
        )
    }
}
export default St