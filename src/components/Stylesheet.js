import React from 'react'
import './style.css'

 function Stylesheet(props) {
     const style=props.primary?'a':''
  return (
    <div>
      <h1 className={`${style} b`}>Purpletalk</h1>
    </div>
  )
}
export default  Stylesheet