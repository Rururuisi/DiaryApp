import React, { useState } from "react";
import EntranceSelection from "./EntranceSelection";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function AppEntrance({ onLogged }) {
    const getRegisterForm = () => {
        setComponent(<RegisterForm />);
    };
    const getLoginForm = () => {
        setComponent(<LoginForm />);
    };

    const entranceSelection = (
        <EntranceSelection
            onRegister={getRegisterForm}
            onLogin={getLoginForm}
        />
    );
    const [component, setComponent] = useState(entranceSelection);

    return <div>{component}</div>;
}

export default AppEntrance;
