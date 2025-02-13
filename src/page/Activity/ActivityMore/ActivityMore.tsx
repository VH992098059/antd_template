import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 监听路由变化
import { Menu, MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import ActivityPicMore from "./ActivityPicMore/ActivityPicMore.tsx";
import ActivityUserRate from "./ActivityUserRate/ActivityUserRate.tsx";
import ActivityRecommend from "./ActivityRecommend/ActivityRecommend.tsx";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    { label: "图文详情", key: "more", icon: <MailOutlined /> },
    { label: "用户评价", key: "rate", icon: <MailOutlined /> },
    { label: "活动推荐", key: "recommend", icon: <MailOutlined /> },
];

const ActivityMore: React.FC = () => {
    const location = useLocation(); // 获取当前路由
    const [current, setCurrent] = useState(() => {
        return localStorage.getItem("selectedKey") || "more";
    });

    // 点击菜单项时更新状态，并存入 localStorage
    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
        localStorage.setItem("selectedKey", e.key);
    };

    // 监听路由变化，如果切换到首页，则清除 localStorage
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/home") {
            localStorage.removeItem("selectedKey");
            setCurrent("more"); // 重置选中项
        }
    }, [location.pathname]);

    // 监听 beforeunload 事件，在**关闭浏览器**时清除 localStorage
    useEffect(() => {
        const handleBeforeUnload = () => {
            const [navigationEntry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];

            if (navigationEntry && navigationEntry.type === "reload") return; // 页面刷新时不清除 localStorage

            localStorage.removeItem("selectedKey"); // 关闭浏览器时清除
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* 顶部菜单 */}
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

            {/* 内容区域 */}
            <div style={{ marginTop: 20 }}>
                {current === "more" && <ActivityPicMore />}
                {current === "rate" && <ActivityUserRate />}
                {current === "recommend" && <ActivityRecommend />}
            </div>
        </div>
    );
};

export default ActivityMore;
