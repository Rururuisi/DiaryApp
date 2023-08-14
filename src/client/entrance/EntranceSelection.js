import "../styles/entranceSelection.css";
import React from "react";

function EntranceSelection() {
    return (
        <div className="EntranceSelection">
            <main>
                <div className="AppIcon">
                    <img src="/favicon.ico" />
                    <h1>Diary App</h1>
                </div>
                <div className="btnGroup">
                    <button className="registerBtn">Register</button>
                    <button className="loginBtn">Login</button>
                </div>
            </main>
        </div>
    );
}

export default EntranceSelection;
