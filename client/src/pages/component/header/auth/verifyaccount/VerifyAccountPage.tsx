import { MailOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Row, Space, Typography } from 'antd';
import { FC, useRef, useState } from 'react';
import { BackToHome } from '../backtohome/BackToHome';

const { Title, Text } = Typography;

const VerifyAccountPage: FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const timerRef = useRef<NodeJS.Timeout>();

    // Handle verification code submission
    const onFinish = (values: { code: string }) => {
        setLoading(true);
        console.log('Verification code:', values.code);
        // TODO: Add your verification logic here
        // After successful verification:
        // navigate('/login');
    };

    // Handle resend verification code
    const handleResendCode = () => {
        if (countdown > 0) return;

        // TODO: Add your resend code logic here
        setCountdown(60); // Start 60 second countdown

        timerRef.current = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <>
            <BackToHome />
            <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#fafafa' }}>
                <Card style={{ width: 400, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <div style={{ textAlign: 'center' }}>
                            <MailOutlined style={{ fontSize: '48px', color: 'rgb(0, 214, 144)', marginBottom: '16px' }} />
                            <Title level={2} style={{ marginBottom: 0 }}>Verify Your Email</Title>
                            <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
                                We've sent a verification code to your email
                            </Text>
                        </div>

                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="code"
                                rules={[
                                    { required: true, message: 'Please input verification code!' },
                                    { len: 6, message: 'Verification code must be 6 digits!' },
                                    { pattern: /^[0-9]+$/, message: 'Please enter numbers only!' }
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter 6-digit code"
                                    maxLength={6}
                                    style={{ textAlign: 'center', letterSpacing: '8px', fontSize: '20px' }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    loading={loading}
                                    style={{
                                        background: 'rgb(0, 214, 144)',
                                        border: 'none',
                                        height: '40px',
                                        fontSize: '16px'
                                    }}
                                >
                                    Verify Account
                                </Button>
                            </Form.Item>
                        </Form>

                        <div style={{ textAlign: 'center' }}>
                            <Text type="secondary">Didn't receive the code? </Text>
                            <Button
                                type="link"
                                onClick={handleResendCode}
                                disabled={countdown > 0}
                                style={{ padding: 0, height: 'auto' }}
                            >
                                {countdown > 0 ? `Resend in ${countdown}s` : 'Resend'}
                            </Button>
                        </div>
                    </Space>
                </Card>
            </Row>
        </>
    );
};

export default VerifyAccountPage;
