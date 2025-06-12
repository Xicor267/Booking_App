import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

export const BackToHome: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      icon={<HomeOutlined style={{ paddingTop: 12 }} />}
      onClick={() => navigate('/')}
      style={{
        position: 'fixed',
        top: '24px',
        left: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #eee',
        borderRadius: '8px',
        padding: '8px 16px',
      }}
    >
      Back to Home
    </Button>
  );
};
