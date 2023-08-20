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
                <Announcement title={"更新日志"} onClose={handleLogClose}>
                    <p style={{ color: "red" }}>
                        目前进度：
                        <br />
                        已完成 Diary, Calendar 界面内容的开发
                        <br />
                        -- 日历界面: 用花朵标记了含有日记内容的日期
                        <br />
                        -- 日记界面: 可创建、查看、修改、删除日记,
                        含有过滤器和根据创建时间排序功能, 可批量删除日记;
                        <br />
                        -- 用户界面:
                        可注册登录退登注销账号,只要不关闭该标签页或浏览器，登录不会过期，无需重登,
                        日记为用户私有，其他用户不可见;
                        <br />
                        -- Dashboard界面: 未开始
                    </p>
                    <p style={{ color: "grey" }}>
                        下一更新内容：
                        <br />
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
