import React, { useState } from 'react';

export default function Button() {
    const [count, setCount] = useState(0);

    const clickHandle = () => {
        setCount(count + 1);
    };
    return <button onClick={clickHandle}>{count}</button>;
}
