import { Button, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../../../../Context/Auth";
import { useState } from "react";
import ModalAuth from "./Modal";

const Menu = () => {
    const { user, signOut } = useAuth();

    const [isShowAuth, setIsShowAuth] = useState(false);

    const items = [
        {
            label: "Profile",
            key: "1",
            icon: <UserOutlined />,
        },
        {
            label: "Logout",
            key: "2",
            icon: <LogoutOutlined />,
            onClick: signOut,
        },
    ];

    const menuProps = {
        items,
    };

    const handleClickSignIn = () => {
        setIsShowAuth(true);
    };

    const handleClickCancel = () => {
        setIsShowAuth(false);
    };

    return (
        <>
            {user ? (
                <Dropdown.Button
                    menu={menuProps}
                    placement="bottom"
                    icon={<UserOutlined />}
                    onClick={!user ? handleClickSignIn : null}
                >
                    {user ? user.name : ""}
                </Dropdown.Button>
            ) : (
                <Button onClick={handleClickSignIn}>Sign In</Button>
            )}
            <ModalAuth
                isShowAuth={isShowAuth}
                handleClickCancel={handleClickCancel}
            />
        </>
    );
};

export default Menu;
