import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from '~/layout/Layout'
import RoomDetails from '~/pages/common/content/roomdetails/RoomDetail'
import { RoomList } from '~/pages/component/content-body/roomlist/RoomList'
import ForgotPasswordPage from '~/pages/component/header/auth/forgotpassword/ForgotPasswordPage'
import LoginPage from '~/pages/component/header/auth/login/loginpage/LoginPage'
import RegisterPage from '~/pages/component/header/auth/register/registerpage/RegisterPage'
import VerifyAccountPage from '~/pages/component/header/auth/verifyaccount/VerifyAccountPage'

export const RouteConfig: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/content/room' element={<RoomList />} />
          <Route path='/content/room/:roomId' element={<RoomDetails />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/verify-account' element={<VerifyAccountPage />} />
      </Routes>
    </Router>
  )
}
