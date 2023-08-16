import "../styles/dashboard.css";
import React, { useState } from "react";
import GrassIcon from "@mui/icons-material/Grass";
import Announcement from "../components/Announcement";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogOpen = () => {
        setIsOpen(true);
    };
    const handleLogClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <Announcement onClose={handleLogClose}>
                    <h2>更新日志</h2>
                    <p style={{ color: "red" }}>
                        目前进度：
                        <br />
                        -- 可创建、查看、修改、删除日记;
                        <br />
                        -- 可注册登录账号,日记为用户私有，其他用户不可见;
                        <br />
                        --
                        只要不关闭该标签页，登录不会过期，无需重登，手机直接退浏览器不关页面下次就不需要重新登录;
                    </p>
                    <p style={{ color: "grey" }}>
                        下一更新内容：
                        <br />
                        -- 完成Diary界面工作: 排序筛选工具、批量删除; <br />
                        -- 开始Dashboard界面工作: 各类数据统计;
                    </p>
                    <p style={{ textAlign: "center" }}>后续功能敬请期待！</p>
                </Announcement>
            )}
            <div className="Dashboard">
                <header>
                    <h1>
                        Dashboard <GrassIcon color="primary" />
                    </h1>
                    <button onClick={handleLogOpen}>更新日志</button>
                </header>
                <p>
                    （会放一个卡片在这里，显示目前总日记数，下面显示各项统计数据，例如每种天气分别多少篇）
                </p>
            </div>
        </>
    );
}
