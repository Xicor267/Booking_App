import { FC } from 'react'
import "./Content.scss"
import { Flex } from 'antd'
import { RegisterRoom } from '../../pages/component/content-body/registerroom/RegisterRoom'

export const Content: FC = () => {
  return (
    <Flex vertical>
      <RegisterRoom />
    </Flex>
  )
}
