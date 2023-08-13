import "../styles/deleteAlert.css";
import React from "react";

export default function Announcement({ onClose, onDelete }) {
    return (
        <div className="AlertBg">
            <div className="Alert">
                <h3>Are you sure you want to delete the diary?</h3>
                <div className="btnGroup">
                    <button onClick={() => onClose()}>Cancel</button>
                    <button onClick={() => onDelete()} id="deleteBtn">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
