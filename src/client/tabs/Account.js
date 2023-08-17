import "../styles/account.css";
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";
import Profile from "../components/Profile";
import SettingList from "../components/SettingList";

const settingOne = ["待定", "待定"];
const settingTwo = ["待定", "待定", "待定"];
const settingThree = ["待定"];

export default function Account() {
    const { logout } = useContext(UserContext);

    return (
        <div className="Account" style={{ minHeight: "100vh" }}>
            <Profile />
            <SettingList label="DONT'T KNOW YET" options={settingTwo} />
            <SettingList label="DONT'T KNOW YET" options={settingOne} />
            <SettingList label="DONT'T KNOW YET" options={settingThree} />
            <div className="AccountBtn">
                <button onClick={() => logout()} className="logoutBtn">
                    Logout
                </button>
                <button>Delete Account</button>
            </div>
        </div>
    );
}
