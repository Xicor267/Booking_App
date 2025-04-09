import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from '~/layout/Layout'
import RoomDetails from '~/pages/common/content/roomdetails/RoomDetail'
import { RoomList } from '~/pages/component/content-body/roomlist/RoomList'

export const RouteConfig: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/content/room' element={<RoomList />} />
          <Route path='/content/room/:roomId' element={<RoomDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}
