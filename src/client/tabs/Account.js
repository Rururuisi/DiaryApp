import "../styles/account.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContextProvider";
import Profile from "../components/Profile";
import SettingList from "../components/SettingList";
import DeleteAlert from "../components/DeleteAlert";
import { deleteUser } from "../utils/fetchData";
import UpdateJournal from "../components/SettingList/UpdateJournal";

// const personal = ["Account", "Photos Library"];
const personal = [
    { toggleLabel: "Account", content: "" },
    { toggleLabel: "Photo Library", content: "" },
];
const appearance = [
    { toggleLabel: "Theme", content: "" },
    { toggleLabel: "Dark Mode", content: "" },
];
const others = [
    { toggleLabel: "Unsaved Draft", content: "" },
    { toggleLabel: "Update Journal (更新日志)", content: <UpdateJournal /> },
];

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
                <SettingList label="PERSONAL" options={personal} />
                <SettingList label="APPEARANCE" options={appearance} />
                <SettingList label="OTHERS" options={others} />
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
