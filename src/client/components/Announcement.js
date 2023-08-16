import "../styles/announcement.css";
import React, { useState } from "react";

export default function Announcement({ title, onClose, children }) {
    return (
        <div className="AnnouncementBg">
            <div className="Announcement">
                <header>
                    <h2>{title}</h2>
                    <p>
                        <small>-- 滑动查看 --</small>
                    </p>
                </header>
                <div>{children}</div>
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
