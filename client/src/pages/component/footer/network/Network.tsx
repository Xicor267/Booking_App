import { Flex } from 'antd';
import { FC } from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import "./Network.scss";

export const Network: FC = () => {
  const itemNetworks = [
    {
      icon: <FaTwitter />
    },
    {
      icon: <FaFacebookF />
    },
    {
      icon: <FaInstagram />
    },
    {
      icon: <FaYoutube />
    },
  ]

  return (
    <Flex vertical={false} justify='flex-end' className='network' gap={8}>
      {itemNetworks.map((item, index) => (
        <Flex className='network--icon' key={index}>
          {item.icon}
        </Flex>
      ))}
    </Flex>
  )
}
