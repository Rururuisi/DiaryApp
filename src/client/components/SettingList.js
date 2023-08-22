import React, { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const labelStyle = {
    padding: "3px 16px",
    textAlign: "left",
    fontSize: "10px",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    boxShadow: "inset 0 0 20px 0 #ddd",
};

const listStyle = {
    width: "100%",
    padding: 0,
    bgcolor: "background.paper",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
};

function SettingList({ label, options }) {
    return (
        <div>
            <div style={labelStyle}>{label}</div>
            <List sx={listStyle} component="nav" aria-label="mailbox folders">
                {options.map((opt, idx) => (
                    <>
                        <ListItem key={idx} button>
                            <ListItemText primary={opt} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </div>
    );
}

export default SettingList;
