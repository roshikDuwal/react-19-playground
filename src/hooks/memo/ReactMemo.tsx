import { useState } from "react";
import RenderCount from "./RenderCount"


const ReactMemo = () => {
  // React.memo is a higher order component that will only re-render the component when the props change
    const [count, setCount] = useState(0);
  return (
    <div className="flex-center flex-col gap-4">
        <h1>React Memo</h1>
        <p>{count}</p>
      <button onClick={()=>setCount((prev)=>prev - 1)}>Increment</button>
      <button onClick={()=>setCount((prev)=>prev - 1)}>Decrement</button>
      <RenderCount/>
    </div>
  )
}

export default ReactMemo
