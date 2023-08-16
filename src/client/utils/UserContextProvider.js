import React, { useState, useEffect, createContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { getUserObj } from "./fetchData";

export const UserContext = createContext(null);

const sessionUser = window.sessionStorage.getItem("username");

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(async () => {
        if (sessionUser) {
            const userObj = await getUserObj({ username: sessionUser });
            login(userObj);
        }
    });

    const login = (userObj) => {
        setIsAuth(true);
        setUser(userObj);
        window.sessionStorage.setItem("username", userObj.username);
    };

    const logout = () => {
        window.sessionStorage.setItem("username", null);
        setUser(null);
        setIsAuth(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider
                value={{ user, isAuth, setUser, login, logout }}
            >
                {sessionUser ? (
                    isAuth && user ? (
                        children
                    ) : (
                        <Box
                            sx={{
                                marginTop: "5vh",
                                textAlign: "center",
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    )
                ) : (
                    children
                )}
            </UserContext.Provider>
        </ThemeProvider>
    );
};
