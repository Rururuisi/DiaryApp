import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const login = (userObj) => {
        setIsAuth(true);
        setUser(userObj);
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, isAuth, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
