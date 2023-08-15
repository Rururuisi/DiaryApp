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

    const registerForm = (
        <RegisterForm
            onCancel={getEntranceSelection}
            onLogin={getLoginForm}
            onLogged={onLogged}
        />
    );

    const loginForm = (
        <LoginForm
            onCancel={getEntranceSelection}
            onRegister={getRegisterForm}
            onLogged={onLogged}
        />
    );

    const [component, setComponent] = useState(entranceSelection);

    return <div>{component}</div>;
}

export default AppEntrance;
