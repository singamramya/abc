import React from 'react'

const Updatedcomponent=(WrappedComponent,incrementNumber)=>{
    class Withcounter extends React.Component{

        constructor(props) {
              super(props)
            
              this.state = {
                 count:0
              }
            }
            
            incrementcount=()=>{
                this.setState(prevState=>{
                   return {count:prevState.count+incrementNumber}
                })
            }

        render(){

            console.log(this.props.name)
            // return <OriginalComponent name='abc'/>

            // return <OriginalComponent count={this.state.count} incrementcount={this.incrementcount}/>
            return(
                <WrappedComponent count={this.state.count} 
                incrementcount={this.incrementcount} 
                {...this.props}/>
            )
        
        }

    }
    return Withcounter
}
export default Updatedcomponent