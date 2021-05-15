import React, { useState } from 'react';
import useInterval from './useInterval';

export default function Clock() {
    const [count, setCount] = useState(0);

    const changeCount = () => setCount(count => count + 1);

    useInterval(changeCount, 1000);

    return <div>计时:{count}</div>;
}
