import { Flex, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '~/pages/common/header/menuitem/MenuItem';
import { menuCategory } from '~/pages/mockup/header';
import "./Menu.scss";

const { Title } = Typography;
export const Menu: FC = () => {
  const { t } = useTranslation();

  return (
    <Flex vertical={false} align='center' gap={16} className='menu-item'>
      {menuCategory?.map((item, index) => (
        <MenuItem
          key={index}
          items={item.items}
          children={<Title className='menu-item--text'>{`${t(item.name)}+`}</Title>}
        />
      ))}
    </Flex>
  )
}
