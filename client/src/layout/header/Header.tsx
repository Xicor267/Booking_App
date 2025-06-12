import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Grid } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Profile } from '~/pages/component/header/profile/Profile';
import { setUser } from '~/redux/slice/user/userSlice';
import { RootState } from '~/redux/store';
import { Auth } from '../../pages/component/header/auth';
import { LanguageSelector } from '../../pages/component/header/languageselector/LanguageSelector';
import { Logo } from '../../pages/component/header/logo/Logo';
import { Menu } from '../../pages/component/header/menu/Menu';
import { SearchHeader } from '../../pages/component/header/search/Search';
import './Header.scss';

export const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const screens = Grid.useBreakpoint();
  const { isAuthenticated } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

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
          {isAuthenticated ? <Profile /> : <Auth />}
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
            {isAuthenticated ? <Profile /> : <Auth />}
          </Drawer>
        </>
      )}
    </Flex>
  );
};