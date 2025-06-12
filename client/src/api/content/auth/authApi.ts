import { IUserType } from "~/api/types/register/IUserType";
import { IVerifyCodeType } from "~/api/types/register/IVerifyCodeType";
import axiosClient from "../../helper/axios/axiosClient";

const authService = {
  getUser: (): Promise<IUserType[]> => {
    return axiosClient.get("/user");
  },

  addUser: (data: IUserType): Promise<IUserType[]> => {
    return axiosClient.post("/user", data);
  },

  signUpUser: (data: IUserType): Promise<IUserType> => {
    const payload = {
      ...data,
      // firstName: btoa(data.firstName),
      // lastName: btoa(data.lastName),
      email: btoa(data.email),
      phoneNumber: data.phoneNumber ? btoa(data.phoneNumber) : null,
      address: data.address ? btoa(data.address) : null,
      password: btoa(data.password),
      confirmPassword: btoa(data.confirmPassword)
    };

    return axiosClient.post("/user/signup", payload);
  },

  verifyCode: (data: IVerifyCodeType): Promise<IVerifyCodeType> => {
    return axiosClient.post("/user/verify", data);
  },

  signInUser: (data: IUserType): Promise<IUserType> => {
    const encodedData = {
      email: btoa(data.email),
      password: btoa(data.password)
    };

    return axiosClient.post("/user/signin", encodedData);
  }
}

export default authService