import { CheckOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, notification, Row, Space, Typography } from 'antd';
import { t } from 'i18next';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import authService from '~/api/content/auth/authApi';
import { IVerifyCodeType } from '~/api/types/register/IVerifyCodeType';
import { hideNotification, showNotification } from '~/redux/slice/notificationSlice';
import { RootState } from '~/redux/store';
import { BackToHome } from '../backtohome/BackToHome';

const { Title, Text } = Typography;

const VerifyAccountPage: FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email ?? '';
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

  // Handle verification code submission
  const onFinish = (values: IVerifyCodeType) => {
    setIsLoading(true);
    const payload: IVerifyCodeType = {
      email,
      code: values?.code,
    }

    console.log('Verification code:', values.code);
    const result = authService.verifyCode(payload)
      .then(result => {
        console.log('SUCCESS!', result);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.successful"),
          description: "You have successfully verified your email. You can login now.",
          icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
        }));
        navigate('/login');
      }).catch((error) => {
        console.error('FAILED...', error.text);
        dispatch(showNotification({
          message: t("page.footer.form.submit.send.failed"),
          description: "Your email verification failed. Please try again.",
          icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
        }));
      }).finally(() => {
        setIsLoading(false);
      });

    return result
  };

  // Handle resend verification code
  const handleResendCode = () => {
    if (countdown > 0) return;

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
      {contextHolder}
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
                  loading={isLoading}
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
