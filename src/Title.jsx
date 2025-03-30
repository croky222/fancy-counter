import React from "react";

export function Title({locked, limit}) {
    return (
        <h1 className='title'>
            {
                locked ? (<span> Limit! Buy <b>Pro</b> for &gt; {limit} </span>) : ("Fancy Counter")
            }
        </h1>
    )
}

