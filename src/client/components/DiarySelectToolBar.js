import "../styles/diary.css";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function DiarySelectToolBar({ displayDiaries }) {
    return (
        <nav className="ToolBar">
            <Checkbox />
            <div>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: "16px" }}
                    onClick={() => displayDiaries()}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<DeleteForeverIcon />}
                >
                    Delete
                </Button>
            </div>
        </nav>
    );
}

export default DiarySelectToolBar;
