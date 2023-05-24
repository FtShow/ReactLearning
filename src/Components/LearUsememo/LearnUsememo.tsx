import React, {useEffect, useMemo, useState} from "react";

export const LearnUsememo = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    let resultA = 1
    let resultB = 1
    console.log("render")
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            console.log("SET A")
            resultA *= i
        }
        return resultA

    }, [a])

    for (let i = 1; i <= b; i++) {
        console.log("SET B")
        resultB *= i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <div>result a {typeof resultA}</div>
            <div>result b {resultB}</div>

        </div>
    );
};
