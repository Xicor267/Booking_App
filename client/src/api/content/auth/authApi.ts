import { IUserType } from "~/api/types/register/IUserType";
import axiosClient from "../../helper/axios/axiosClient";

const authService = {
  getUser: (): Promise<IUserType[]> => {
    return axiosClient.get("/user");
  },

  addUser: (data: IUserType): Promise<IUserType[]> => {
    return axiosClient.post("/user", data);
  },
}

export default authService