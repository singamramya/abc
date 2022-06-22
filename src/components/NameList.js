import React from 'react'

function NameList() {
    const names=["a","b","c","d","a"]
    const list=names.map((name,index)=><h1 key={index}>{index} {name}</h1>)
  return (
    <div>
     {/* {names.map((name,index)=><h1 key={index}>{index} {name}</h1>)} */}
     {list}
    </div>  
  )
}

export default NameList
