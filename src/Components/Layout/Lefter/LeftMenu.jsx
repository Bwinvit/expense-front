import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    UserOutlined,
    LineChartOutlined,
    HomeOutlined,
} from "@ant-design/icons";

const LeftMenu = ({ collapsed }) => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("1");

    const onClick = (e) => {
        switch (e.key) {
            case "1":
                navigate("/home");
                break;
            case "2":
                navigate("/summary");
                break;
            case "3":
                navigate("/profile");
                break;
            default:
                break;
        }
        setCurrent(e.key);
    };

    const getItem = (label, key, icon, children) => {
        return {
            label,
            key,
            icon,
            children,
        };
    };

    const items = [
        getItem("Home", "1", <HomeOutlined />),
        getItem("Summary", "2", <LineChartOutlined />),
        getItem("Profile", "3", <UserOutlined />),
    ];

    return (
        <>
            <Menu
                items={items}
                defaultSelectedKeys={[current]}
                selectedKeys={[current]}
                mode="inline"
                inlineCollapsed={collapsed}
                onClick={onClick}
                style={{ backgroundColor: "#dcedf7", border: "none" }}
            />
        </>
    );
};

export default LeftMenu;
