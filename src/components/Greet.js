import React from 'react'

// function Greet(){
//     return <h1>Functional Components</h1>
// }

// export const Greet=()=><h1>Functional Components</h1>

// export default Greet


const Greet=(props)=>{
    const {name,address,children}=props
    //console.log(props)

    return (
    <div>
    <h1>Hello {name} From {address}</h1>
    {children}
    </div>
    )
}

export default Greet