import { Flex } from 'antd'
import { FC } from 'react'
import { Auth } from '../../pages/component/header/auth'
import { LanguageSelector } from '../../pages/component/header/languageselector/LanguageSelector'
import { Logo } from '../../pages/component/header/logo/Logo'
import { Menu } from '../../pages/component/header/menu/Menu'
import { SearchHeader } from '../../pages/component/header/search/Search'
import "./Header.scss"

export const Header: FC = () => {
  return (
    <Flex vertical={false} justify='space-between' className='header'>
      <Logo />
      <Menu />
      <Flex gap={16}>
        <SearchHeader />
        <LanguageSelector />
      </Flex>
      <Auth />
    </Flex>
  )
}
