import { useReducer } from "react"

const initialState = {
    count: 0
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex-center flex-col gap-4">

            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
        </div>
    )
}

export default Reducer
