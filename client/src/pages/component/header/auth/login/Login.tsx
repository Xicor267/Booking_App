import { SmileOutlined } from '@ant-design/icons'
import { Flex, Typography, notification } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import "./Login.scss"

const { Text } = Typography
export const Login: FC = () => {
  const { t } = useTranslation()
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification',
      description:
        'Feature is under development. Please contact Nguyen Phuong Nam.',
      icon: <SmileOutlined style={{ color: 'rgb(0, 214, 144)' }} />,
    });
  };

  return (
    <Flex className='login'>
      {contextHolder}
      <Text className='login--text' onClick={openNotification}>{t("page.header.login")}</Text>
    </Flex>
  )
}
