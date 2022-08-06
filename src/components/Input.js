import React from "react";
export default function Input({ callBack }) {

    let _handleKeyDown = (e) => {
        if (e.key === "Enter") {
            callBack(e.target.value);
            e.target.value = "";
        }
    }
    return (
        <div className="command-input">
            <input type="text" onKeyDown={_handleKeyDown}></input>
        </div>
    );
}