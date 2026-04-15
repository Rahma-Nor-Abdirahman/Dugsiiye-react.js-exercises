import { useState } from "react"
const counter = () => {

     const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
       setCount(count +1)
     
    }
    const handleDecrement = () => {
            if (count > 0) setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter {count} </h2>
        <button onClick={handleIncrement}>increment</button>
        <button disabled={count===0} onClick={handleDecrement}>decrement</button>
        </div>
    )
}
export default counter