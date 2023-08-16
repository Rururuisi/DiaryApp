import "../styles/announcement.css";
import React, { useState } from "react";

export default function Announcement({ onClose, children }) {
    return (
        <div className="AnnouncementBg">
            <div className="Announcement">
                {children}
                <button onClick={() => onClose()} className="close">
                    &times;
                </button>
                <button onClick={() => onClose()} className="closeBtn">
                    关闭
                </button>
            </div>
        </div>
    );
}
