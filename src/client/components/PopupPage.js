import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackIcon = styled(ArrowBackIosIcon)({
    cursor: "pointer",
});

export default function PopupPage({
    pageContentFunc,
    pageContentCompo,
    toggleComponent,
}) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
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
                sx={{ position: "fixed", top: 0, width: "100%" }}
            >
                <BackIcon
                    sx={{ color: (theme) => theme.palette.primary.dark }}
                    onClick={() => toggleDrawer(false)}
                />
            </Toolbar>
            <Box sx={{ padding: "0 15px" }}>
                {pageContentCompo || pageContentFunc(toggleDrawer)}
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
