import "../styles/imageUploader.css";
import React, { useState, useEffect, useRef } from "react";
import ImageToggleFullScreen from "./ImageToggleFullScreen";

function ImageUploader() {
    const ref = useRef(null);
    const [images, setImages] = useState({ files: [] });
    const [imagesForDisplay, setImagesForDisplay] = useState([]);

    useEffect(() => {
        console.log(images, imagesForDisplay);
    }, [images]);

    const handleAdd = (evt) => {
        evt.preventDefault();
        const addFile = ref.current;
        addFile.click();
    };

    const handleImages = (evt) => {
        setImages((prevData) => ({
            files: [...prevData.files, ...evt.target.files],
        }));
        setImagesForDisplay((prevData) => {
            const urls = [...evt.target.files].map((file) => ({
                url: URL.createObjectURL(file),
                filename: file.name,
            }));
            return [...prevData, ...urls];
        });
    };

    const removeImage = (filename) => {
        setImages((prevData) => ({
            files: prevData.files.filter((file) => file.name !== filename),
        }));
        setImagesForDisplay((prevData) =>
            prevData.filter((img) => img.filename !== filename)
        );
    };

    return (
        <div className="ImageUploader">
            {imagesForDisplay.length > 0 &&
                imagesForDisplay.map((img, idx) => (
                    <div className="Image">
                        <button
                            onClick={() => removeImage(img.filename)}
                            className="removeBtn"
                            type="button"
                        >
                            &times;
                        </button>
                        <ImageToggleFullScreen
                            url={img.url}
                            filename={img.filename}
                        />
                    </div>
                ))}
            <div className="Image">
                <input
                    ref={ref}
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleImages}
                />
                <button id="addImageBtn" onClick={handleAdd}>
                    +
                </button>
            </div>
        </div>
    );
}

export default ImageUploader;
