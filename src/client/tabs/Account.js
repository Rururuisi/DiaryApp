import "../styles/account.css";
import React from "react";
import Profile from "../components/Profile";
import SettingList from "../components/SettingList";
import AccountPage from "../components/SettingList/AccountPage";
import PhotoLibrary from "../components/SettingList/PhotoLibrary";
import UpdateJournal from "../components/SettingList/UpdateJournal";

// const personal = ["Account", "Photos Library"];
const personal = [
    { toggleLabel: "Account", content: <AccountPage /> },
    { toggleLabel: "Photo Library", content: <PhotoLibrary /> },
];
const appearance = [
    { toggleLabel: "Theme", content: "" },
    { toggleLabel: "Dark Mode", content: "" },
];
const others = [
    { toggleLabel: "Unsaved Draft", content: "" },
    { toggleLabel: "Update Journal", content: <UpdateJournal /> },
];

export default function Account() {
    return (
        <div className="Account" style={{ minHeight: "100vh" }}>
            <Profile />
            <SettingList label="PERSONAL" options={personal} />
            <SettingList label="APPEARANCE" options={appearance} />
            <SettingList label="OTHERS" options={others} />
        </div>
    );
}
