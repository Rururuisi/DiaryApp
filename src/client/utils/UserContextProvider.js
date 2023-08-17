import React, { useState, useEffect, createContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { getUserObj } from "./fetchData";

export const UserContext = createContext(null);

const sessionUser = () => window.sessionStorage.getItem("username");

export const UserContextProvider = ({ children }) => {
    const [session, setSession] = useState(sessionUser());
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [toggle, setToggle] = useState(false);

    const fetchUser = async (username) => {
        const userObj = await getUserObj({ username });
        setUser(userObj);
        setIsAuth(true);
    };

    useEffect(() => {
        if (session) {
            fetchUser(session).catch((err) => {
                console.log(err.message);
            });
        }
    }, [toggle]);

    const login = (userObj) => {
        window.sessionStorage.setItem("username", userObj.username);
        setSession(sessionUser());
        setUser(userObj);
        setIsAuth(true);
    };

    const logout = () => {
        window.sessionStorage.clear();
        setSession(null);
        setUser(null);
        setIsAuth(false);
    };

    const toggleFetch = () => {
        setToggle(!toggle);
    };

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider
                value={{ user, isAuth, toggleFetch, login, logout }}
            >
                {session ? (
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
