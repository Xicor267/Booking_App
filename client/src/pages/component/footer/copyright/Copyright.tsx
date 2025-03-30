import { Flex, Typography } from 'antd';
import { FC } from 'react';
import "./Copyright.scss";

export const Copyright: FC = () => {
  const { Text } = Typography;
  const currentYear = new Date().getFullYear();

  const itemPolicy = [
    {
      title: "Privecy",
      onClick: () => { }
    },
    {
      title: "PolicyTerms & ConditionCookies",
      onClick: () => { }
    },
    {
      title: "Cookies",
      onClick: () => { }
    },
  ]

  return (
    <Flex vertical={false} justify='space-between' align='center' className='copyright'>
      <Flex vertical={false} gap={16}>
        {itemPolicy.map((item, index) => (
          <Text key={index} onClick={item.onClick} className='copyright--text'>{item.title}</Text>
        ))}
      </Flex>
      <Text className='copyright--author'>© {currentYear}. Made by Nguyen Phuong Nam</Text>
    </Flex>
  )
}
