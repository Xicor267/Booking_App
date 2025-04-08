import { Flex } from 'antd'
import { FC } from 'react'
import { Images } from '~/utils/imageLoader'
import "./Logo.scss"

export const Logo: FC = () => {
  return (
    <Flex vertical={false}>
      {/* <Image
        width={290}
        height={80}
        src={Images['logo1']}
        alt='logo'
      /> */}
      <a href='/'>
        <img src={Images['logo1']} alt='' style={{ width: 290, height: "100%" }} />
      </a>
    </Flex>
  )
}
