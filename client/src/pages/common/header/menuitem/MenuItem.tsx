import { Dropdown, Button, Flex, MenuProps } from 'antd';
import { FC, ReactNode } from 'react';

interface IMenuItemHeader {
  name?: string;
  items: MenuProps['items'];
  children?: ReactNode;
}

export const MenuItem: FC<IMenuItemHeader> = ({ name, items, children }) => {
  return (
    <Flex>
      <Dropdown menu={{ items }} placement="bottom" overlayStyle={{fontSize: 18}}>
        {children || <Button>{name}</Button>}
      </Dropdown>
    </Flex>
  );
};
