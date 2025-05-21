import React, {useState, useEffect} from 'react'

export default function HugeMessage() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        // properly updating everything
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // efficiently closing everything
        return () => clearInterval(timerId);
    }, []);

    //const time = new Date();

    let day = String(time.toLocaleDateString(undefined, {weekday: "long"}));
    let month = String(time.toLocaleDateString(undefined, {month: "long"}));
    let date = String(time.getDate());
    let hour = String(time.getHours());
    let second = String(time.getSeconds());
    
    return (
        <>
            <div className="the-whole-thing">
                <h1 className="head-message">{hour > 12 ? "Good Evening" : "Good Morning"}</h1> 
                <p>Today is {day}, </p>
                <p>{month} {date}</p>
            </div>
        </>
    );
}
