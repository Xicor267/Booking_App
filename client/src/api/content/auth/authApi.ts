import { IUserType } from "~/api/types/register/IUserType";
import { IVerifyCodeType } from "~/api/types/register/IVerifyCodeType";
import axiosClient from "../../helper/axios/axiosClient";
import CryptoJS from 'crypto-js';

const authService = {
  getUser: (): Promise<IUserType[]> => {
    return axiosClient.get("/user");
  },

  addUser: (data: IUserType): Promise<IUserType[]> => {
    return axiosClient.post("/user", data);
  },

  signUpUser: (data: IUserType): Promise<IUserType> => {
    const obfuscatePayload = (data: any) => {
      const payload = { ...data };
      
      // if (payload.password) {
      //   payload.password = btoa(payload); // Base64 encode
      // }
      
      return btoa(payload);
    };
 
    return axiosClient.post("/user/signup", obfuscatePayload(data));
  },

  verifyCode: (data: IVerifyCodeType): Promise<IVerifyCodeType> => {
    return axiosClient.post("/user/verify", data);
  },

  signInUser: (data: IUserType): Promise<IUserType> => {
    const hashPassword = (password: string): string => {
      return CryptoJS.SHA256(password).toString();
    };
    const secureData = {
      ...data,
      password: hashPassword(data.password),
    }

    return axiosClient.post("/user/signin", data);
  }
}

export default authService