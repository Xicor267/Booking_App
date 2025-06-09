import { CheckOutlined, CloseOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, notification, Row, Typography } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '~/api/content/auth/authApi';
import { IUserType } from '~/api/types/register/IUserType';
import { hideNotification, showNotification } from '~/redux/slice/notificationSlice';
import { RootState } from '~/redux/store';
import { BackToHome } from '../../backtohome/BackToHome';
import './RegisterPage.scss';

const { Title, Text } = Typography;

const RegisterPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUserType[]>([]);
  console.log("🚀 ~ userData:", userData)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { message, description, icon, visible } = useSelector((state: RootState) => state.notification);
  const [api, contextHolder] = notification.useNotification();

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

  useEffect(() => {
    getUser();
  }, []);

  const getUser = useCallback(() => {
    authService.getUser()
      .then(result => {
        setUserData(result);
      })
  }, [])

  const onFinish = async (values: any) => {
    setIsLoading(true);
    const result = await authService.addUser(values)
      .then(result => {
        console.log('SUCCESS!', result);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.successful"),
          description: "You have successfully registered an account. Please check your email for verification.",
          icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
        }));
        navigate('/verify-account');
      }).catch((error) => {
        console.error('FAILED...', error.text);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.failed"),
          description: "Your account registration was unsuccessful.",
          icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
        }));
      }).finally(() => {
        setIsLoading(false);
      });

    return result;
  };

  return (
    <>
      {contextHolder}
      <BackToHome />
      <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#fafafa' }} className='register-page'>
        <Card style={{ width: 400, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>Sign Up</Title>
          <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
            Create your account
          </Text>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label={<span style={{ color: '#333333' }}>First Name</span>}
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input placeholder="Nam" />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: '#333333' }}>Last Name</span>}
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input placeholder="Nguyen" />
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
              label={<span style={{ color: '#333333' }}>Phone Number</span>}
              name="phoneNumber"
              rules={[
                { required: true, message: 'Please input your phone number!' },
              ]}
            >
              <Input placeholder='1900561252' style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: '#333333' }}>Address</span>}
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input placeholder="Viet Nam" />
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
                loading={isLoading && { icon: <SyncOutlined spin /> }}
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
