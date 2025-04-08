import { IRoomList } from "~/api/types/bookingroom/IRoomList";
import axiosClient from "../../helper/axios/axiosClient";

const roomService = {
  getRoomList: (): Promise<IRoomList[]> => {
    return axiosClient.get("/room")
  },

  postRoom: (param: IRoomList[]) => {
    return axiosClient.post("room", param)
  }
}

export default roomService