import React, { use, useEffect } from "react";

const Translator = () => {
    useEffect(() => {
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");
    }, []);

    return (
        <div>
            <h1>Translator Component</h1>
        </div>
    );
}