import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, notification, Row, Typography } from 'antd';
import { t } from 'i18next';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '~/api/content/auth/authApi';
import { hideNotification, showNotification } from '~/redux/slice/notificationSlice';
import { setUser } from '~/redux/slice/user/userSlice';
import { RootState } from '~/redux/store';
import { BackToHome } from '../../backtohome/BackToHome';

const { Title, Text } = Typography;

const LoginPage: FC = () => {
  const { message, description, icon, visible } = useSelector((state: RootState) => state.notification);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      api.open({
        message,
        description,
        icon,
        showProgress: true,
        onClose: () => dispatch(hideNotification()),
      });
    }
  }, [visible, api, message, description]);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
  //   if (storedUser) {
  //     const user = JSON.parse(storedUser);
  //     form.setFieldsValue({ email: user.email })
  //     dispatch(setUser(user));
  //   }
  // }, [dispatch, form])

  const onFinish = (values: any) => {
    const result = authService.signInUser(values)
      .then(result => {
        console.log('SUCCESS!', result);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.successful"),
          description: "You have successfully logged into your account.",
          icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
        }));
        dispatch(setUser(result))
        localStorage.setItem('user', JSON.stringify(result));

        // if (values.rememberMe) {
        //   localStorage.setItem('user', JSON.stringify(result)); // Store in localStorage
        // } else {
        //   sessionStorage.setItem('user', JSON.stringify(result)); // Store in sessionStorage
        // }

        navigate('/');
      }).catch((error) => {
        console.error('FAILED...', error.text);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.failed"),
          description: "Your account or password is incorrect. Please try again.",
          icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
        }));
      }).finally(() => {
        setIsLoading(false);
      });

    return result;
  };

  return (
    <>
      <BackToHome />
      {contextHolder}
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

            <Form.Item name="rememberMe" valuePropName='checked' initialValue={false}>
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
                loading={isLoading}
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