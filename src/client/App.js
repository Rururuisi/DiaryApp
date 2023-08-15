import "./styles/app.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Interface from "./Interface";
import { theme } from "./utils/theme";
import AppEntrance from "./entrance/AppEntrance";
import Announcement from "./components/Announcement";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const handleLogged = (user) => {
        setIsLoggedIn(true);
        setUser(user);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <Announcement>
                <h2>更新日志</h2>
                <p style={{ color: "red" }}>
                    目前进度：可创建、查看、修改、删除日记
                </p>
                <p style={{ color: "grey" }}>下一更新内容：用户注册登录</p>
                <p style={{ textAlign: "center" }}>后续功能敬请期待！</p>
            </Announcement> */}
                {!isLoggedIn ? (
                    <AppEntrance onLogged={handleLogged} />
                ) : (
                    <div className="App">
                        <Interface user={user} />
                    </div>
                )}
            </ThemeProvider>
        </>
    );
}
