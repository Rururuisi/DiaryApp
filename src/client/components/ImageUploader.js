import "../styles/imageUploader.css";
import React, { useRef } from "react";

function ImageUploader() {
    const ref = useRef(null);

    const handleAdd = (evt) => {
        evt.preventDefault();
        const addFile = ref.current;
        addFile.click();
    };

    return (
        <form className="Image">
            <input
                ref={ref}
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
            />
            <button id="addImageBtn" onClick={handleAdd}>
                +
            </button>
        </form>
    );
}

export default ImageUploader;
