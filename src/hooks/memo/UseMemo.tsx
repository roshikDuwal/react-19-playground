import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
    const sum=()=>{
        let i=0;
        for(i=0;i<=1000000000;i++){
            i+=1
        }
        return i    
    }
   
    const total = useMemo(()=>sum(),[]);
    return <p>sum:{total}</p>
}

const UseMemo = () => {
     //useMemo will only re-run the function when the dependencies change
     const [count, setCount] = useState(0);
  return (
    <div className="flex-center flex-col gap-4">
           <h1>Use Memo</h1>
           <p>{count}</p>
         <button onClick={()=>setCount((prev)=>prev + 1)}>Increment</button>
         <button onClick={()=>setCount((prev)=>prev - 1)}>Decrement</button>
         <ExpensiveComponent/>
       </div>
  )
}

export default UseMemo
