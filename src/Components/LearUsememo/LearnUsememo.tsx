import React, {useEffect, useMemo, useState} from "react";

export const LearnUsememo = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {

            resultA *= i
        }
        return resultA

    }, [a])

    for (let i = 1; i <= b; i++) {

        resultB *= i
    }
    const aPlus = (value: number)=>{
        return value+1
    }
    return (
        <div>
            <div>{a}</div>
            <button onClick={()=>setA(aPlus)}>+</button>
            <div>result a {typeof resultA}</div>
            <div>result b {resultB}</div>

        </div>
    );
};
