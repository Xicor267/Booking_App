import { Flex } from 'antd'
import { FC } from 'react'
import { Login } from './login/Login'
import { Register } from './register/Register'

export const Auth: FC = () => {

  return (
    <Flex className='auth' vertical={false} align='center' gap={8}>
      <Register />
      <Flex> / </Flex>
      <Login />
    </Flex>
  )
}
