import { CheckOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Row, Typography, notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '~/api/content/auth/authApi';
import { hideNotification, showNotification } from '~/redux/slice/notificationSlice';
import { RootState } from '~/redux/store';
import { BackToHome } from '../backtohome/BackToHome';

const { Title, Text } = Typography;

const ForgotPasswordPage: FC = () => {
  const { t } = useTranslation();
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

  const onFinish = (values: any) => {
    setIsLoading(true)
    const result = authService.forgotPassword(values.email)
      .then(result => {
        console.log('SUCCESS!', result);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.successful"),
          description: "Password reset request successful. Please check your email for further instructions.",
          icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
        }));
      }).catch((error) => {
        console.error('FAILED...', error.text);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.failed"),
          description: "Failed to send password reset email. Please try again.",
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
                loading={isLoading}
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
