import { memo, useMemo, useRef, useState } from 'react'

interface dataProps {
    name: string,
    age: number
}

const ComponentData = memo(({ data }: { data: dataProps }) => {
    const count = useRef(0)
    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.age}</p>
            <p>Render Times {count.current++}</p>
        </>
    );
});

const Difference = () => {
 
    //here even we use memo the component is re-rendering because the data is changing as object are stored in reference
    //To fix this we can use useMemo to memoize the data and pass it as a prop to the component.

    const myData = {
        name: "Roshik231232sadasd",
        age: 22
    }


    const memoizedData=useMemo(()=>{
        return myData
    },[])

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Difference between useMemo and React.memo</h2>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
            <ComponentData data={memoizedData} />
        </div>
    )
}

export default Difference
