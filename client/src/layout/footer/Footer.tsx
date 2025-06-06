import { Flex, Typography } from 'antd'
import { FC } from 'react'
import { ActiveUser } from '~/pages/component/footer/activeuser/ActiveUser'
import { Contact } from '~/pages/component/footer/contact/Contact'
import { Copyright } from '~/pages/component/footer/copyright/Copyright'
import { FormFooter } from '~/pages/component/footer/form/Form'
import { Links } from '~/pages/component/footer/links/Links'
import { Network } from '~/pages/component/footer/network/Network'
import { Room } from '~/pages/component/footer/room/Room'
import { Images } from '~/utils/imageLoader'
import "./Footer.scss"

export const Footer: FC = () => {
  const { Title } = Typography

  return (
    <Flex
      className="footer"
      vertical
      style={{ background: `url(${Images["footer"]}) 50% center / cover no-repeat local` }}
    >
      <Flex vertical={false} justify="space-between" className="footer--network">
        <Title level={1} style={{ color: "#fff", marginBottom: 0 }}>HOTEL BOOKING</Title>
        <Network />
      </Flex>
      <Flex vertical={false} justify="space-between" gap={16} className="footer--info">
        <div className="footer--item"><Contact /></div>
        <div className="footer--item"><Room /></div>
        <div className="footer--item"><Links /></div>
        <div className="footer--item"><FormFooter /></div>
        <div className="footer--item"><ActiveUser /></div>
      </Flex>
      <Copyright />
    </Flex>
  )
}
