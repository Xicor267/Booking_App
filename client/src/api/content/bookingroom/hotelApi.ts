import axiosClient from "../../helper/axios/axiosClient";
import { IHotelRoomType } from "../../types/bookingroom/IHotelRoomType";

const hotelService = {
  getHotelRoom: (): Promise<IHotelRoomType[]> => {
    return axiosClient.get("/Hotel");
  },
  postHotelRoom: (param: IHotelRoomType) => {
    return axiosClient.post("Hotel", param)
  }
}

export default hotelService