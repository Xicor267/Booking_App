import { FC } from 'react'
import "./Header.scss"
import { Flex } from 'antd'
import { Logo } from '../../pages/component/header/logo/Logo'

export const Header: FC = () => {
  return (
    <Flex vertical={false} className='header'>
      <Logo />
    </Flex>
  )
}
