import { useEffect, useState } from 'react';

const Counter = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
    // }, []);
    return (
        <div className="counter">
            <h2>Counter</h2>
            <p>It has been counted {count} times</p>
            <button
                className="increase-btn"
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Increment
            </button>
            <button
                className="decrease-btn"
                onClick={() =>
                    count > 0 && setCount((prevCount) => prevCount - 1)
                }
            >
                Decrement
            </button>
            <button
                className="reset-btn"
                onClick={() => setCount(initialValue)}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
