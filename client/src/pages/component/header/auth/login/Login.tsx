import { Flex, Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import "./Login.scss"

const { Text } = Typography

export const Login: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <Flex className='login'>
      <Text className='login--text' onClick={handleClick}>{t("page.header.login")}</Text>
    </Flex>
  )
}
