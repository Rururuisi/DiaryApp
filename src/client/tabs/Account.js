import "../styles/account.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContextProvider";
import Profile from "../components/Profile";
import SettingList from "../components/SettingList";
import DeleteAlert from "../components/DeleteAlert";
import { deleteUser } from "../utils/fetchData";

const settingOne = ["待定", "待定"];
const settingTwo = ["待定", "待定", "待定"];
const settingThree = ["待定"];

export default function Account() {
    const { user, logout } = useContext(UserContext);
    const [alert, setAlert] = useState(false);

    const openAlert = () => {
        setAlert(true);
    };
    const closeAlert = () => {
        setAlert(false);
    };

    const handleDelete = () => {
        deleteUser(user._id).catch((err) => alert(err));
        logout();
    };
    return (
        <>
            <div className="Account" style={{ minHeight: "100vh" }}>
                <Profile />
                <SettingList label="DONT'T KNOW YET" options={settingTwo} />
                <SettingList label="DONT'T KNOW YET" options={settingOne} />
                <SettingList label="DONT'T KNOW YET" options={settingThree} />
                <div className="AccountBtn">
                    <button onClick={() => logout()} className="logoutBtn">
                        Logout
                    </button>
                    <button onClick={openAlert}>Delete Account</button>
                </div>
            </div>
            {alert && (
                <DeleteAlert
                    onClose={closeAlert}
                    onDelete={handleDelete}
                    deleteObjName={"the account"}
                />
            )}
        </>
    );
}
