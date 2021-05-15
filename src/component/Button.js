import React from 'react';

export default function Button({ clickEvent, value }) {
    return <button onClick={() => clickEvent(value)}>+{value}</button>;
}
