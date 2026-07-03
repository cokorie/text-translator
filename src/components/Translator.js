import React, { useEffect } from "react";
import countries from "./data.js";

const Translator = () => {
    useEffect(() => {
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");
        const exchageIcon = document.querySelector(".exchange");
        const selectTag = document.querySelectorAll("select");
        const icons = document.querySelectorAll(".row i");
        const translateBtn = document.querySelector("button");
        selectTag.forEach((tag, id) => {
            for (const country_code in countries) {
                let selected = id === 0 ? country_code === "en-GB" ? "selected" : "" : country_code === "hi-IN" ? "selected" : "";
                
            }
        })}
    }, []);

    return (
        <div>
            <h1>Translator Component</h1>
        </div>
    );
}