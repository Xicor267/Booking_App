import { Card, Form, Input, Button, Typography, Row } from 'antd';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { BackToHome } from '../../backtohome/BackToHome';

const { Title, Text } = Typography;

const RegisterPage: FC = () => {
  const onFinish = (values: any) => {
    console.log('Registration values:', values);
  };

  return (
    <>
      <BackToHome />
      <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#fafafa' }}>
        <Card style={{ width: 400, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>Sign Up</Title>
          <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
            Create your account
          </Text>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label={<span style={{ color: '#333333' }}>Full Name</span>}
              name="fullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: '#333333' }}>E-mail</span>}
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input placeholder="user@gmail.com" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: '#333333' }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: '#333333' }}>Confirm Password</span>}
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
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
                SIGN UP
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
              Already have an account? <Link to="/login">Sign in</Link>
            </Text>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default RegisterPage;
