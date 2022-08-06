import Input from "../components/Input";
import React from "react";
import { useState } from "react";
import { HandleCommand } from "../utils/Functions";

export default function Home() {

    const [resultList, setResultList] = useState([]);

    let handleInput = (value) => {
        HandleCommand({ value: value, result: resultList, setResult: setResultList })
    }

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Home</h2>
            {resultList.map((val) => {
                return val;
            })}
            <Input callBack={handleInput}></Input>
        </main>
    );
}