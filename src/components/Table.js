import React from 'react'

const a={
   border:'2px solid',
   textAlign:'center'
}

let obj=[
    {
    name:'a',
    email:'a@gmail.com',
    age:10
},
{
    name:'b',
    email:'b@gmail.com',
    age:20
},
{
    name:'c',
    email:'c@gmail.com',
    age:30
},
{
    name:'d',
    email:'d@gmail.com',
    age:25 
}
]

localStorage.setItem("obj",JSON.stringify(obj))
let b=JSON.parse(localStorage.getItem("obj"))

//console.log(st)
 function Table() {    
   
  return (
    <table style={a}>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
            {b.map((row,key)=>{
                return (
                <tr key={key}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.age}</td>
                </tr>
                )   
            })}
        </tbody>

    </table>
  )
}
export default Table