import { useState } from "react";

const UseState02 = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </>
    );
};

export default UseState02;
