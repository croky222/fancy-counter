import React from "react";
import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

export default function CountButtons({setNumber, locked}) {

    return (
        <div className="button-container">
            <button className="count-btn" onClick={MinusButtonDecrement({setNumber})}>
                <MinusIcon className="count-btn-icon"/>
            </button>
            <button disabled={locked} className="count-btn" onClick={PlusButtonIncrement({setNumber})}>
                <PlusIcon className="count-btn-icon" />
            </button>
        </div>
    )
}

export function PlusButtonIncrement({setNumber}) {
    return (event) => {
        setNumber((prev) => prev + 1);
        event.currentTarget.blur();
    }
}

export function MinusButtonDecrement({setNumber}){
    return (event) => {
        setNumber((prev) => prev <= 0 ? 0 : prev - 1);
        event.currentTarget.blur();
    }
}