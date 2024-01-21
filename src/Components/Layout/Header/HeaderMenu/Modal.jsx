import { Modal, Tabs, Button, Form, Input, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../../Service/Auth";
import { useAuth } from "../../../../Context/Auth";

const { TabPane } = Tabs;

const ModalAuth = ({ isShowAuth, handleClickCancel }) => {
    const navigate = useNavigate();

    const { signIn } = useAuth();
    const [key, setKey] = useState(1);

    const onFinishSignIn = async (values) => {
        await AuthService.login(values).then((res) => {
            if (res.status === "success") {
                signIn(res);
                handleClickCancel();
                navigate("/home");
            }
        });
    };

    return (
        <Modal open={isShowAuth} onCancel={handleClickCancel} footer={null}>
            <Tabs defaultActiveKey={key} onChange={setKey}>
                <TabPane tab="Sign In" key="1">
                    <Form name="basic" onFinish={onFinishSignIn}>
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Row gutter={16}>
                            <Col>
                                <Button onClick={handleClickCancel}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col>
                                <Button type="primary" htmlType="submit">
                                    Sign In
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </TabPane>
                <TabPane tab="register" key="2"></TabPane>
            </Tabs>
        </Modal>
    );
};

export default ModalAuth;
