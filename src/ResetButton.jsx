import React from "react";
import {ResetIcon} from "@radix-ui/react-icons"

export default function ResetButton({setNumber}) {
    const ResetCounter = (event) => {
        setNumber(0);
        event.currentTarget.blur();
    }
    return (
        <button className="reset-btn" onClick={ResetCounter}>
            <ResetIcon className="reset-btn-icon"/>
        </button>
    )

}
