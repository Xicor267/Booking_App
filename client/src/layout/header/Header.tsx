import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Grid } from 'antd';
import { FC, useState } from 'react';
import { Auth } from '../../pages/component/header/auth';
import { LanguageSelector } from '../../pages/component/header/languageselector/LanguageSelector';
import { Logo } from '../../pages/component/header/logo/Logo';
import { Menu } from '../../pages/component/header/menu/Menu';
import { SearchHeader } from '../../pages/component/header/search/Search';
import './Header.scss';

export const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const screens = Grid.useBreakpoint();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Flex vertical={false} gap={8} justify="space-between" className="header">
      <Logo />
      <Menu />
      {screens.md ? ( // Show full layout on larger screens (md: >768px)
        <>
          <Flex gap={16}>
            <SearchHeader />
            <LanguageSelector />
          </Flex>
          <Auth />
        </>
      ) : (
        <>
          <Flex gap={16} className="header--actions">
            <SearchHeader />
            <Button
              className="menu-button"
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
            />
          </Flex>
          <Drawer
            title="Menu"
            placement="right"
            onClose={toggleDrawer}
            open={isDrawerOpen}
          >
            <LanguageSelector />
            <Auth />
          </Drawer>
        </>
      )}
    </Flex>
  );
};