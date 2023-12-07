import { useState, useEffect } from "react";

const UseEffect01 = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);


  useEffect(() => {
    // The code that we want to run
    console.log('The count is:', count);

    // Optional return function
    return () => {
      console.log("I'm bring cleaned up!!");
    };
  }, [count]);  // The dependency array


  return (
    <>

      <h1> Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement </button>

    </>
  );
};

export default UseEffect01;
