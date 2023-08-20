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
        <div
            className="DiarySelectToolBar"
            style={{ padding: "20px 24px 0 24px" }}
        >
            <nav className="ToolBar">
                <Checkbox onClick={selectAll} />
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
            <div
                style={{
                    lineHeight: "42px",
                    color: "#b86f00",
                    textAlign: "center",
                }}
            >
                ({selectNum}) Items Selected
            </div>
        </div>
    );
}

export default DiarySelectToolBar;
