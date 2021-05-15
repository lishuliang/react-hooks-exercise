import React, { useState } from 'react';
import Button from '../component/Button';
import Display from '../component/Dispaly';

export default function Mypage() {
    const [count, setCount] = useState(0);

    const clickHandle = (value) => {
        setCount(count + value);
    };

    return (
        <>
            <Button clickEvent={clickHandle} value={1} />
            <Button clickEvent={clickHandle} value={3} />
            <Button clickEvent={clickHandle} value={5} />
            <Display count={count} />
        </>
    );
}
