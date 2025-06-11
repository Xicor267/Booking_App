import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FC } from 'react';

export const Profile: FC = () => {
  return (
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  )
}
