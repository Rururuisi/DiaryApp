import "../styles/account.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContextProvider";
import Profile from "../components/Profile";
import SettingList from "../components/SettingList";
import DeleteAlert from "../components/DeleteAlert";
import { deleteUser } from "../utils/fetchData";

const settingTwo = ["Account", "Photos Library"];
const settingOne = ["Theme", "Dark Mode"];
const settingThree = ["Unsaved Draft"];

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
                <SettingList label="PERSONAL" options={settingTwo} />
                <SettingList label="APPEARANCE" options={settingOne} />
                <SettingList label="DRAFT" options={settingThree} />
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
