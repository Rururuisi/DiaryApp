import "../styles/diarySortFilter.css";
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";

export default function SortDiary({ onRecent, onOldest, onMultiDelete }) {
    const [isSelect, setIsSelect] = useState("recent");

    const handleRecent = () => {
        setIsSelect("recent");
        onRecent();
    };

    const handleOldest = () => {
        setIsSelect("oldest");
        onOldest();
    };

    const handleMultiDelete = () => {
        onMultiDelete();
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip
                label="Recent"
                size="small"
                variant={isSelect === "recent" ? "filled" : "outlined"}
                onClick={handleRecent}
                clickable
            />
            <Chip
                label="Oldest"
                size="small"
                variant={isSelect === "oldest" ? "filled" : "outlined"}
                onClick={handleOldest}
                clickable
            />
            <DeleteSweepRoundedIcon
                className="deleteIcon"
                onClick={handleMultiDelete}
            />
        </Stack>
    );
}
