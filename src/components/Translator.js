import React, { use, useEffect } from "react";

const Translator = () => {
    useEffect(() => {
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");
        const exchageIcon = document.querySelector(".exchange");
        const selectTag = document.querySelectorAll("select");
        const icons = document.querySelectorAll(".row i");
    }, []);

    return (
        <div>
            <h1>Translator Component</h1>
        </div>
    );
}