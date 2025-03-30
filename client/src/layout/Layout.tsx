import { FC, useEffect } from 'react'
import "./Layout.scss"
import { Banner } from './banner/Banner'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { notification } from 'antd'
import { hideNotification } from '../redux/slice/notificationSlice'

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
    <div className='layout'>
      {contextHolder}
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  )
}
