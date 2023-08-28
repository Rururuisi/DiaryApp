import "../styles/imageUploader.css";
import React, { useState, useEffect, useRef } from "react";
import ImageToggleFullScreen from "./ImageToggleFullScreen";

function ImageUploader({ totalImages, imagesSetter }) {
    const ref = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesForDisplay, setImagesForDisplay] = useState([]);

    useEffect(() => {
        imagesSetter(images);
    }, [images]);

    const handleAdd = (evt) => {
        evt.preventDefault();
        const addFile = ref.current;
        addFile.click();
    };

    const handleImages = (evt) => {
        setImages((prevData) => [...prevData, ...evt.target.files]);
        setImagesForDisplay((prevData) => {
            const urls = [...evt.target.files].map((file) => ({
                url: URL.createObjectURL(file),
                filename: file.name,
            }));
            return [...prevData, ...urls];
        });
    };

    const removeImage = (filename) => {
        setImages((prevData) =>
            prevData.filter((file) => file.name !== filename)
        );
        setImagesForDisplay((prevData) =>
            prevData.filter((img) => img.filename !== filename)
        );
    };

    return (
        <>
            {imagesForDisplay.length > 0 &&
                imagesForDisplay.map((img, idx) => (
                    <div key={idx} className="Image">
                        <div
                            onClick={() => removeImage(img.filename)}
                            className="removeBtn"
                            type="button"
                        >
                            <span>&times;</span>
                        </div>
                        <ImageToggleFullScreen
                            url={img.url}
                            filename={img.filename}
                        />
                    </div>
                ))}
            {totalImages < 9 && (
                <div className="Image">
                    <input
                        ref={ref}
                        type="file"
                        accept="image/*"
                        multiple
                        style={{ display: "none" }}
                        onChange={handleImages}
                    />
                    <div id="addImageBtn" onClick={handleAdd}>
                        <div>+</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageUploader;
