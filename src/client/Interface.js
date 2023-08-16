import "./styles/interface.css";
import React from "react";
import Tabs from "./components/Tabs";
import PopupPage from "./components/PopupPage";
import AddDiaryIcon from "./components/AddDiaryIcon";

export default function Interface() {
    return (
        <div>
            <Tabs />
            <PopupPage
                pageContent={"WriteForm"}
                toggleComponent={<AddDiaryIcon />}
            />
        </div>
    );
}
