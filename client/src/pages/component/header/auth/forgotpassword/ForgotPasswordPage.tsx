import { Card, Form, Input, Button, Typography, Row } from 'antd';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { BackToHome } from '../backtohome/BackToHome';

const { Title, Text } = Typography;

const ForgotPasswordPage: FC = () => {
    const onFinish = (values: any) => {
        console.log('Forgot password email:', values.email);
        // Handle password reset email logic here
    };

    return (
        <>
            <BackToHome />
            <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#fafafa' }}>
                <Card style={{ width: 400, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>Forgot Password</Title>
                    <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
                        Enter your email to reset password
                    </Text>

                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label={<span style={{ color: '#333333' }}>E-mail</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="user@gmail.com"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                style={{
                                    background: 'rgb(0, 214, 144)',
                                    border: 'none',
                                    height: '40px',
                                    fontSize: '16px',
                                    marginTop: '16px'
                                }}
                            >
                                SEND RESET LINK
                            </Button>
                        </Form.Item>

                        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: '24px' }}>
                            Remember your password? <Link to="/login">Back to Sign in</Link>
                        </Text>
                    </Form>
                </Card>
            </Row>
        </>
    );
};

export default ForgotPasswordPage;
