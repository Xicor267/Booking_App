import { SmileOutlined } from '@ant-design/icons'
import { Flex, Typography, notification } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import "./Register.scss"

const { Text } = Typography
export const Register: FC = () => {
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
    <Flex className='register'>
      {contextHolder}
      <Text className='register--text' onClick={openNotification}>{t("page.header.register")}</Text>
    </Flex>
  )
}
