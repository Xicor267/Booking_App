import { Flex, Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import "./Register.scss"

const { Text } = Typography

export const Register: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <Flex className='register'>
      <Text className='register--text' onClick={handleClick}>
        {t("page.header.register")}
      </Text>
    </Flex >
  )
}
