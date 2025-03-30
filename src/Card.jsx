import {Title} from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import CountButtons from "./CountButtons.jsx";
import React, {useEffect, useState} from "react";

export function Card() {
    const [number, setNumber] = useState(0);
    const limit = 50;
    const locked = number === limit;

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.code === 'ArrowRight' || event.code === 'ArrowUp') {
                locked === false ? setNumber(number + 1) : null;
            }
        };

        const handleKeyup = (event)=> {
            if (event.code === 'ArrowLeft' || event.code === 'ArrowDown'){
                number > 0 ? setNumber(number - 1) : 0;
            }
        }

        window.addEventListener("keydown", handleKeydown);

        window.addEventListener("keydown", handleKeyup);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
            window.removeEventListener("keydown", handleKeyup);
        };
    }, [number]);

    return (
        <div className={`card ${locked ? 'card--limit' : ''}`}>
            <Title locked={locked} limit={limit}/>
            <Count number={number}/>
            <ResetButton setNumber={setNumber}/>
            <CountButtons setNumber={setNumber} locked={locked}/>
        </div>
    )
}