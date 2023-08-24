import React from "react";

function UpdateJournal() {
    return (
        <div style={{ padding: "10px" }}>
            <p>
                目前进度：
                <br />
                <br />
                可注册登录退登注销账号,日记为用户私有，其他用户不可见;
                已初步完成 Dashboard, Diary, Calendar 界面内容的开发;
                <br />
                <br />
                <b>-- Dashboard界面:</b> 日记总数与每月日记数统计图
                <br />
                <br />
                <b>-- Diary界面:</b> 可创建、查看、修改、删除日记,
                含有过滤器和根据创建时间排序功能, 可批量删除日记;
                <br />
                <br />
                <b>-- Calendar界面:</b> 用花朵标记了含有日记内容的日期
                <br />
                <br />
                <b>
                    -- Account界面: 目前只完成了 update journal
                    选项用于查看开发进度
                </b>
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <p style={{ color: "blue" }}>
                下一更新内容：
                <br />
                -- 加入日记心情选择;
                <br />
                -- 加入日记添加图片功能;
            </p>
            <br />
            <br />
            <p style={{ textAlign: "center" }}>后续功能敬请期待！</p>
        </div>
    );
}

export default UpdateJournal;
