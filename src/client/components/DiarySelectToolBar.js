import "../styles/diary.css";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function DiarySelectToolBar({
    selectNum,
    selectAll,
    displayDiaries,
    handleDelete,
}) {
    return (
        <nav className="ToolBar">
            <Checkbox onClick={selectAll} />
            <div style={{ lineHeight: "42px", color: "#b86f00" }}>
                ({selectNum}) Items Selected
            </div>
            <div>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: "16px" }}
                    onClick={displayDiaries}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<DeleteForeverIcon />}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </div>
        </nav>
    );
}

export default DiarySelectToolBar;
