import axiosClient from "../../helper/axios/axiosClient";
import { IBookingRoomType } from "../../types/bookingroom/IBookingRoom";

const bookingRoomService = {
  getBookingRoom: () => {
    return axiosClient.get("/Booking");
  },

  postBookingRoom: (param: IBookingRoomType) => {
    return axiosClient.post("Booking", param)
  }
}

export default bookingRoomService