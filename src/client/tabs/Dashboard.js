import React from "react";
import GrassIcon from "@mui/icons-material/Grass";

export default function Dashboard() {
    return (
        <div className="">
            <header>
                <h1>
                    Dashboard <GrassIcon color="primary" />
                </h1>
            </header>
            <p>
                （会放一个卡片在这里，显示目前总日记数，下面显示各项统计数据，例如每种天气分别多少篇）
            </p>
        </div>
    );
}
