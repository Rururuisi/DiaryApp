import "./styles/app.css";
import React from "react";
import { UserContextProvider } from "./utils/UserContextProvider";
import Entrance from "./Entrance";

export default function App() {
    return (
        <UserContextProvider>
            <Entrance />
        </UserContextProvider>
    );
}
