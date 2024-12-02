import axios from "axios";

type Params = {
  page?: number;
  count?: number;
  ctime?: string;
  version?: string;
  sig?: string;
  apiKey?: string;
};

export const getHome = (params: Params) => {
  return axios.get("/page/get/home", { params });
};
