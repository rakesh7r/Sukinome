import React, { memo } from "react"
import { useDispatch } from "react-redux"
import useCounter from "../hooks/useCounter"
import { signin, signout } from "../redux/profileReducer"

const Test = () => {
    const dispatch = useDispatch()
    const [count, increment, decrement, reset] = useCounter(4)

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => dispatch(signin())}>signin</button>
            <button onClick={() => dispatch(signout())}>signout</button>
        </div>
    )
}

export default memo(Test)
