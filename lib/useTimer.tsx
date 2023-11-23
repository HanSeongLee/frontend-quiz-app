import React, { useEffect } from 'react';

const useTimer = (initialTime: number) => {
    const isRunningRef = React.useRef(false);
    const [time, setTime] = React.useState(initialTime);

    const start = () => {
        isRunningRef.current = true;
    };

    const stop = () => {
        isRunningRef.current = false;
    };

    const reset = () => {
        setTime(initialTime);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isRunningRef.current) return;
            setTime(time => time > 0 ? time - 100 : 0);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return {
        isRunning: isRunningRef.current,
        time,
        start,
        stop,
        reset,
    };
};

export default useTimer;
