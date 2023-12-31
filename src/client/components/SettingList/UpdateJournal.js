import React from "react";

function UpdateJournal() {
    return (
        <div
            style={{
                margin: "10px 20px 80px 20px",
                padding: "20px",
                color: "#555",
                backgroundColor: "#fff",
                borderRadius: "20px",
            }}
        >
            <p>
                <b>目前进度：</b>
                <br />
                <br />
                可注册登录退登注销账号，日记为用户私有，其他用户不可见;
                已初步完成 Dashboard，Diary，Calendar 界面内容的开发;
                <br />
                <br />
                <b>-- Dashboard界面:</b> 日记总数与每月日记数统计图
                <br />
                <br />
                <b>-- Diary界面:</b> 可创建、查看、修改、删除日记，
                含有过滤器和根据创建时间排序功能，可批量删除日记;
                <br />
                <small style={{ color: "red" }}>
                    (目前已加入心情选择，图片添加功能也已完成)
                </small>
                <br />
                <br />
                <b>-- Calendar界面:</b> 用花朵标记了含有日记内容的日期
                <br />
                <br />
                <b>-- Account界面:</b> 目前只完成了 update journal
                选项用于查看开发进度
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <p style={{ color: "blue" }}>
                下一更新内容：
                <br />
                -- 待通知;
            </p>
            <br />
            <br />
            <p style={{ textAlign: "center" }}>后续功能敬请期待！</p>
        </div>
    );
}

export default UpdateJournal;
