import { Flex } from 'antd'
import { FC } from 'react'
import "./Layout.scss"
import { Banner } from './banner/Banner'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout: FC = () => {
  return (
    <Flex vertical>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </Flex>
  )
}
