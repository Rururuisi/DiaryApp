import "../styles/entranceSelection.css";
import React from "react";

function EntranceSelection({ onRegister, onLogin }) {
    return (
        <div className="Entrance">
            <main>
                <div className="AppIcon">
                    <img src="/favicon.ico" />
                    <h1>Diary App</h1>
                </div>
                <div className="btnGroup">
                    <button onClick={() => onRegister()} className="leftBtn">
                        Register
                    </button>
                    <button onClick={() => onLogin()} className="rightBtn">
                        Login
                    </button>
                </div>
            </main>
        </div>
    );
}

export default EntranceSelection;
