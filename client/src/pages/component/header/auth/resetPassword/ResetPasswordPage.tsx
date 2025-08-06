import { CheckOutlined, CloseOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, notification, Row, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import authService from '~/api/content/auth/authApi';
import { IUpdatePassword } from '~/api/types/register/IUpdatePassword';
import { hideNotification, showNotification } from '~/redux/slice/notificationSlice';
import { RootState } from '~/redux/store';

const { Title, Text } = Typography;
const { Password } = Input;

interface IResetPassword {
  newPassword: string;
  confirmPassword: string;
}

const ResetPasswordPage: FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { message, description, icon, visible } = useSelector((state: RootState) => state.notification);

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const email = queryParams.get('email');

  useEffect(() => {
    if (!token || !email) {
      navigate('/forgot-password');
      dispatch(showNotification({
        message: t("error.invalid_reset_link"),
        description: "The password reset link is invalid or expired.",
        icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
      }));
    }
  }, [token, email, navigate, dispatch]);

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

  const onFinish = async (values: IResetPassword) => {
    if (!token || !email) return;

    const payload: IUpdatePassword = {
      email: email,
      token: token,
      newPassword: values.newPassword
    };

    setIsLoading(true);
    const result = authService.resetPassword(payload)
      .then(() => {
        dispatch(showNotification({
          message: t("password.reset_success"),
          description: "Your password has been updated successfully. You can now login with your new password.",
          icon: <CheckOutlined style={{ background: '#52c41a', borderRadius: '50%', color: '#fff' }} />,
        }));

        navigate("/login")
      })
      .catch(() => {
        setTimeout(() => navigate('/login'), 3000);
        dispatch(showNotification({
          message: t("password.reset_failed"),
          description: "Failed to reset password. The link may be expired or invalid.",
          icon: <CloseOutlined style={{ background: '#ff4d4f', borderRadius: '50%', color: '#fff' }} />,
        }));
      })
      .finally(() => {
        setIsLoading(false);
      })

    return result;
  }

  return (
    <>
      {contextHolder}
      <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#fafafa' }}>
        <Card style={{ width: 400, borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>Reset Password</Title>
          <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
            Create a new password for {email}
          </Text>

          <Form
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="newPassword"
              label={<span style={{ color: '#333333' }}>New password</span>}
              rules={[
                { required: true, message: 'Please input your new password!' },
                { min: 8, message: 'Password must be at least 8 characters!' },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character!'
                }
              ]}
              hasFeedback
            >
              <Password
                prefix={<LockOutlined />}
                placeholder="New password"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label={<span style={{ color: '#333333' }}>Confirm password</span>}
              dependencies={['newPassword']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Password
                prefix={<LockOutlined />}
                placeholder="Confirm new password"
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
                RESET PASSWORD
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default ResetPasswordPage;