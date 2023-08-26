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
                <div onClick={closeImage} className="imageBG">
                    <img src={url} title={filename} />
                    <div onClick={closeImage} className="back">
                        <span>&times;</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageToggleFullScreen;
