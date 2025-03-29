import type { MenuProps } from 'antd';
import { Dropdown, Flex, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Images } from '../../../../utils/imageLoader';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const items: MenuProps['items'] = [
    {
      key: 'en',
      label: (
        <Space>
          <img src={Images['united-kingdom']} alt="English" style={{ width: 20, height: 20 }} />
          <div >English</div>
        </Space>
      ),
      onClick: () => changeLanguage('en'),
    },
    {
      key: 'vi',
      label: (
        <Space>
          <img src={Images['vietnam']} alt="Vietnamese" style={{ width: 20, height: 20 }} />
          <div >Việt Nam</div>
        </Space>
      ),
      onClick: () => changeLanguage('vi'),
    },
  ];

  const getCurrentFlag = () => {
    return i18n.language === 'vi' ? (
      <Space>
        <img src={Images['vietnam']} alt="Vietnamese" style={{ width: 20, height: 20 }} />
        <div style={{ color: "rgb(0, 214, 144)" }}>Việt Nam</div>
      </Space>
    ) : (
      <Space>
        <img src={Images['united-kingdom']} alt="English" style={{ width: 20, height: 20 }} />
        <div style={{ color: "rgb(0, 214, 144)" }}>English</div>
      </Space>
    );
  };

  return (
    <Flex align='center'>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          {getCurrentFlag()}
        </a>
      </Dropdown>
    </Flex>
  );
};