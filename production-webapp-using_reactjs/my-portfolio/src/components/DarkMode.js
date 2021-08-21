import React from "react";
import { FaSun } from "react-icons/fa";
import "./DarkMode.css";

export default function DarkMode() {
    const handleDarkMode = () => {
        const btn = document.getElementById("btn");
        btn.addEventListener("click", () => {
            console.log(btn.checked);
            if (btn.checked === true) {
                document.body.setAttribute("data-theme", "dark");
            } else {
                document.body.setAttribute("data-theme", "");
            }
        });
    };
    return (
        <div className="darkMode">
            <input type="checkbox" name="" id="btn" onClick={handleDarkMode} />
            <div className="box">
                <i className="fa fa-moon-o fa-2x" />
                <FaSun fontSize="35px" />
            </div>
        </div>
    );
}
