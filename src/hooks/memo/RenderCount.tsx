import React, { useRef } from "react"

const RenderCount =() => {
    const count=useRef(0);
    
    
  return (
    <div>
     <p>Component rendered {count.current ++} times</p>
    </div>
  )
}

export default  React.memo(RenderCount)
