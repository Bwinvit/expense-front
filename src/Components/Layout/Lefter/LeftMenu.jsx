import { Menu } from "antd";
import {
    UserOutlined,
    LineChartOutlined,
    HomeOutlined,
} from "@ant-design/icons";

const LeftMenu = ({ collapsed }) => {
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
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                inlineCollapsed={collapsed}
                style={{ backgroundColor: "#dcedf7", border: "none" }}
            />
        </>
    );
};

export default LeftMenu;
