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
            let text = fromText.value.trim();
            let translateFrom = selectTag[0].value;
            let translateTo = selectTag[1].value;
            if (!text) return;
            toText.setAttribute("placeholder", "Translating...");
            try {
                const response = await fetch(`http://localhost:5000/?text=${text}&source=${translateFrom}&target=${translateTo}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const translateText = await response.text();
                toText.value = translateText;
                toText.setAttribute("placeholder", "Translation");
            } catch (error) {
                console.error("Fetch error:", error);
                toText.setAttribute("placeholder", "Error in translation");
            }
        });

        icons.forEach((icon) => {
            icon.addEventListener("click", ({ target }) => {
                if (!fromText.value || !toText.value) return;
                if (target.classList.contains("fa-copy")) {
                    if (target.id === "from") {
                        navigator.clipboard.writeText(fromText.value);
                    } else {
                        navigator.clipboard.writeText(toText.value);
                    }
            } else {
                let utterance;
                if (target.id === "from") {
                    utterance = new SpeechSynthesisUtterance(fromText.value);
                    utterance.lang = selectTag[0].value;
                } else {
                    utterance = new SpeechSynthesisUtterance(toText.value);
                    utterance.lang = selectTag[1].value;
                }
                speechSynthesis.speak(utterance);
            }
        });
    });
}, []);

    return (
        <div>
            <img src="https://img.icons8.com/ios/50/000000/google-translate.png" className="above-container-content" alt="translate" />
            <h1>Translator</h1>
        </div>
    );
}