import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShowDiary from "./ShowDiary";
import WriteForm from "./WriteForm";

const BackIcon = styled(ArrowBackIosIcon)({
    cursor: "pointer",
});

export default function PopupPage({ diary, pageContent, toggleComponent }) {
    const [open, setOpen] = useState(false);
    const [pageForm, setPageForm] = useState({
        currentDiary: diary,
        form: pageContent,
    });

    const toggleDrawer = (newOpen) => {
        setPageForm({ currentDiary: diary, form: pageContent });
        setOpen(newOpen);
    };

    const changeToReadForm = (currentDiary) => {
        setPageForm({ form: "ShowDiary", currentDiary });
    };

    const changeToWriteForm = (currentDiary) => {
        setPageForm({ form: "WriteForm", currentDiary });
    };

    const getShowForm = () => {
        return (
            <ShowDiary
                diary={pageForm.currentDiary}
                onEditForm={changeToWriteForm}
                onClosePopup={toggleDrawer}
            />
        );
    };

    const getWriteForm = () => {
        return (
            <WriteForm
                diaryCurrentState={pageForm.currentDiary}
                onReadForm={changeToReadForm}
            />
        );
    };

    const page = () => (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                paddingTop: "70px",
            }}
            role="presentation"
        >
            <Toolbar
                color="ternary"
                sx={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    backgroundColor: "#fff",
                    zIndex: 1,
                }}
            >
                <BackIcon
                    sx={{ color: (theme) => theme.palette.primary.dark }}
                    onClick={() => toggleDrawer(false)}
                />
            </Toolbar>
            <Box sx={{ padding: "0 15px" }}>
                {pageForm.form === "WriteForm" ? getWriteForm() : getShowForm()}
            </Box>
        </Box>
    );

    return (
        <React.Fragment>
            <div onClick={() => toggleDrawer(true)}>{toggleComponent}</div>
            <Drawer
                anchor={"top"}
                open={open}
                onClose={() => toggleDrawer(false)}
            >
                {page()}
            </Drawer>
        </React.Fragment>
    );
}
