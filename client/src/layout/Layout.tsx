import { Flex, notification } from 'antd'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../redux/slice/notificationSlice'
import { RootState } from '../redux/store'
import "./Layout.scss"
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout: FC = () => {
  const { message, description, icon, visible } = useSelector((state: RootState) => state.notification);
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) {
      api.open({
        message,
        description,
        icon,
        showProgress: true,
        onClose: () => dispatch(hideNotification()),
      });
    }
  }, [visible, api, message, description]);

  return (
    <Flex vertical className='layout'>
      {contextHolder}
      <Header />
      <Content />
      <Footer />
    </Flex>
  )
}
