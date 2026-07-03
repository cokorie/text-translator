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
                let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });

        exchageIcon.addEventListener("click", () => {
            let tempText = fromText.value;
            let tempLang = selectTag[0].value;
            fromText.value = toText.value;
            toText.value = tempText;
            selectTag[0].value = selectTag[1].value;
            selectTag[1].value = tempLang;
        });

        fromtext.addEventListener("keyup", () => {
            if (!fromText.value) {
                toText.value = "";
            }
        });

        translateBtn.addEventListener("click", () => {
            
        });

        })}
    }, []);

    return (
        <div>
            <h1>Translator Component</h1>
        </div>
    );
}