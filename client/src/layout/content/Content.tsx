import { Flex } from 'antd'
import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { RegisterRoom } from '~/pages/component/content-body/registerroom/RegisterRoom'
import { Banner } from '../banner/Banner'
import "./Content.scss"

export const Content: FC = () => {
  const location = useLocation()

  return (
    <Flex vertical className='content'>
      {location.pathname.startsWith('/content')
        ? (
          <Flex vertical>
            <RegisterRoom />
            <Outlet />
          </Flex>
        )
        : (
          <Flex vertical>
            <Banner />
            <RegisterRoom />
          </Flex>
        )
      }
    </Flex>
  )
}
