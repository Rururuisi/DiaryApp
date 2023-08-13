import "../styles/announcement.css";
import React, { useState } from "react";

export default function Announcement({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    const closeAnnouce = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="AnnouncementBg">
                    <div className="Announcement">
                        {children}
                        <button onClick={closeAnnouce} className="close">
                            &times;
                        </button>
                        <button onClick={closeAnnouce} className="closeBtn">
                            关闭
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
