import {
  HomeOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Flex,
  Space,
  Typography
} from 'antd';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '~/redux/slice/user/userSlice';
import { RootState } from '~/redux/store';

const { Text, Title } = Typography;

export const Profile: FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleSignOut = () => {
    dispatch(clearUser());
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <Flex
        vertical={false}
        gap={8}
        align="center"
        className="profile"
        onClick={showDrawer}
        style={{ cursor: 'pointer' }}
      >
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        <span>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
      </Flex>

      <Drawer
        title="Profile Information"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        width={400}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Flex justify="center" vertical gap={24} align="center">
            <Avatar
              size={80}
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
            <div>
              <Title level={4}>
                {`${currentUser?.firstName ?? ''} ${currentUser?.lastName ?? ''}`}
              </Title>
            </div>
          </Flex>

          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Divider />

            <Flex align="center" gap={12}>
              <MailOutlined style={{ color: '#1890ff' }} />
              <div>
                <Text type="secondary" style={{ fontSize: '12px' }}>Email</Text>
                <br />
                <Text>{currentUser?.email ?? 'Not provided'}</Text>
              </div>
            </Flex>

            <Flex align="center" gap={12}>
              <PhoneOutlined style={{ color: '#52c41a' }} />
              <div>
                <Text type="secondary" style={{ fontSize: '12px' }}>Phone</Text>
                <br />
                <Text>{currentUser?.phoneNumber ?? 'Not provided'}</Text>
              </div>
            </Flex>

            <Flex align="center" gap={12}>
              <HomeOutlined style={{ color: '#fa8c16' }} />
              <div>
                <Text type="secondary" style={{ fontSize: '12px' }}>Address</Text>
                <br />
                <Text>{currentUser?.address ?? 'Not provided'}</Text>
              </div>
            </Flex>

            <Divider />

            <Button
              type="primary"
              danger
              icon={<LogoutOutlined style={{ paddingTop: 12 }} />}
              onClick={handleSignOut}
              size="large"
              style={{ width: '100%' }}
            >
              Sign Out
            </Button>
          </Space>
        </Space>
      </Drawer>
    </>
  );
};