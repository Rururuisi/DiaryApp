import "../styles/imageFullScreen.css";
import React, { useState } from "react";

function ImageToggleFullScreen({ url, filename }) {
    const [isOpen, setIsOpen] = useState(false);

    const openImage = () => {
        setIsOpen(true);
    };

    const closeImage = () => {
        setIsOpen(false);
    };

    return (
        <>
            <img
                onClick={openImage}
                className="imgThumbnail"
                src={url}
                title={filename}
            />
            {isOpen && (
                <div className="imageBG">
                    <img src={url} title={filename} />
                    <button onClick={closeImage} className="back">
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}

export default ImageToggleFullScreen;
