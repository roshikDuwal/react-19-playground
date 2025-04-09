import { memo, useCallback, useState } from "react";

interface ButtonProps {
    children: string;   
    onClick: () => void;
}

const Button=memo(({children,onClick}:ButtonProps)=>{
    console.log(`Button Rendered + ${children}`);
   return(
    <button className={`${children.toLowerCase()==="increment"?"bg-green-500":"bg-red-500"}`} onClick={onClick}>
        {children}
    </button>
   )
});

const UseCallback = () => {
    //useCallback is used to memoize the function so that it does not get recreated on every render.
    const [count, setCount] = useState(0);

    const increment =useCallback( () => {
        setCount((prev) => prev + 1);
    },[])

    const decrement =useCallback( () => {
        setCount((prev) => prev - 1);
    },[]);

  return (
    <div className="flex-center flex-col gap-4">
        <h1 className="text-2xl font-bold">UseCallback</h1>
        <p className="text-2xl font-bold">{count}</p>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}

export default UseCallback
