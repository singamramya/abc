import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetAttribute('child')}>ParentComponent</button>
    </div>
  )
}

export default ChildComponent
