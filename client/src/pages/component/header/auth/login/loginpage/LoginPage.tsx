import { Button, Card, Checkbox, Form, Input, Row, Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BackToHome } from '../../backtohome/BackToHome';

const { Title, Text } = Typography;

const LoginPage: FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <>
            <BackToHome />
            <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#fafafa' }}>
                <Card style={{ width: 400, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>Sign In</Title>
                    <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
                        Sign in to your account
                    </Text>

                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label={<span style={{ color: '#333333' }}>Email</span>}
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="user@gmail.com" />
                        </Form.Item>

                        <Form.Item
                            label={<span style={{ color: '#333333' }}>Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>

                        <Form.Item>
                            <Checkbox>Remember Me</Checkbox>
                            <Link 
                                to="/forgot-password" 
                                style={{ 
                                    float: 'right',
                                    color: 'rgb(0, 214, 144)'
                                }}
                            >
                                Forgot Password?
                            </Link>
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
                                    fontSize: '16px'
                                }}
                            >
                                LOGIN
                            </Button>
                        </Form.Item>

                        <div style={{ textAlign: 'center', marginTop: '16px' }}>
                            <Button
                                icon="f"
                                style={{
                                    background: '#3b5998',
                                    color: '#fff',
                                    marginRight: '8px'
                                }}
                            />
                            <Button
                                icon="t"
                                style={{
                                    background: '#1da1f2',
                                    color: '#fff',
                                    marginRight: '8px'
                                }}
                            />
                            <Button
                                icon="in"
                                style={{
                                    background: '#0077b5',
                                    color: '#fff'
                                }}
                            />
                        </div>

                        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: '24px' }}>
                            Don't have an account? <Link to="/register">Create free account</Link>
                        </Text>
                    </Form>
                </Card>
            </Row>
        </>
    );
};

export default LoginPage;