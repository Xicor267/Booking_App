import { IActiveUserCount } from "~/api/types/activeusercount/IActiveUserCount";
import axiosClient from "../../helper/axios/axiosClient";

const activeUserCountService = {
  getActiveUserCount: (): Promise<IActiveUserCount> => {
    return axiosClient.get("/visitor-count");
  },

  getActiveUserData: (): Promise<IActiveUserCount> => {
    return axiosClient.get("/visitor-data");
  },
}

export default activeUserCountService