import "./styles/app.css";
import React from "react";
import { UserContextProvider } from "./utils/UserContextProvider";
import Entrance from "./Entrance";
import Announcement from "./components/Announcement";

export default function App() {
    return (
        <UserContextProvider>
            {/* <Announcement>
                <h2>更新日志</h2>
                <p style={{ color: "red" }}>
                    目前进度：可创建、查看、修改、删除日记
                </p>
                <p style={{ color: "grey" }}>下一更新内容：用户注册登录</p>
                <p style={{ textAlign: "center" }}>后续功能敬请期待！</p>
            </Announcement> */}
            <Entrance />
        </UserContextProvider>
    );
}
