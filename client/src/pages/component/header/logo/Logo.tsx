import { Flex, Image } from 'antd'
import { FC } from 'react'
import "./Logo.scss"
import { Images } from '../../../../utils/imageLoader'

export const Logo: FC = () => {
  return (
    <Flex vertical={false}>
      <Image
        width={290}
        height={80}
        src={Images['logo1']}
        alt='logo'
      />
    </Flex>
  )
}
