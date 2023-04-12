import React, { useState } from 'react'

const HookCounter2 = () => {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            <button onClick={() => setCount(initialCount)}>RESET {count}</button> <br/>
            <button onClick={() => setCount(count + 1)}>INCREMENT {count}</button> <br/>
            <button onClick={() => setCount(count - 1)}>DECREMENT {count}</button> <br/>
            <button onClick={(incrementByFive)}>INCREMENT BY 5</button> <br/>
        </div>
    )
}

export default HookCounter2