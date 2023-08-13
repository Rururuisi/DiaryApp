import "./styles/app.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Interface from "./Interface";
import { theme } from "./utils/theme";
import Announcement from "./components/Announcement";

export default function App() {
    return (
        <>
            <Announcement>
                <h2>通知</h2>
                <p>
                    深入学习React中，暂停开发。学习完毕后将在一周内完成此App的开发工作。
                </p>
                <p style={{ color: "red" }}>目前进度：可以创建新日记并提交</p>
                <p style={{ textAlign: "center" }}>后续功能敬请期待！</p>
            </Announcement>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Interface />}>
                                <Route index element={<Interface />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        </>
    );
}
