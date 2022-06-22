import React from 'react'

function Memocomponent({name}) {
    console.log("haii")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memocomponent)
