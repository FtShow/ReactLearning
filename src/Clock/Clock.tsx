import React, {useEffect, useState} from "react";
import cs from "./StyleClock.module.css"

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    let secondsDeg = 6 * time.getSeconds()
    let minutesDeg = 6 * time.getMinutes()
    let hoursDeg = 30 * (time.getHours() % 12)
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return (
        <div className={cs.clockBody}>
            <div className={cs.hours} style={{transform: `rotate(${hoursDeg}deg)`}}></div>
            <div className={cs.minutes} style={{transform: `rotate(${minutesDeg}deg)`}}></div>
            <div className={cs.seconds} style={{transform: `rotate(${secondsDeg}deg)`}}></div>
        </div>
    );
};
