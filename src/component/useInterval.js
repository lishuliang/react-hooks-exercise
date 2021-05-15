import { useRef, useEffect } from 'react';

export default function useInterval(callback, delay = 1000) {
    const intervalFn = useRef();
    useEffect(() => {
        intervalFn.current = callback;
    });
    useEffect(() => {
        const timer = setInterval(() => intervalFn.current(), delay);

        return () => clearInterval(timer);
    }, [delay]);
}
