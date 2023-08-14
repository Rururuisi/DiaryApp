import React, { useState } from "react";
import EntranceSelection from "./EntranceSelection";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function AppEntrance({ onLogged }) {
    const getEntranceSelection = () => {
        setComponent(entranceSelection);
    };

    const getRegisterForm = () => {
        setComponent(registerForm);
    };
    const getLoginForm = () => {
        setComponent(loginForm);
    };

    const entranceSelection = (
        <EntranceSelection
            onRegister={getRegisterForm}
            onLogin={getLoginForm}
        />
    );

    const registerForm = <RegisterForm onCancel={getEntranceSelection} />;
    const loginForm = <LoginForm onCancel={getEntranceSelection} />;

    const [component, setComponent] = useState(entranceSelection);

    return <div>{component}</div>;
}

export default AppEntrance;
