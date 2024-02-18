import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "77c4049156e24e2e9477e972fbf9c91e",
  },
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getFetchRespones = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRespones<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  };
  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRespones<T>>(this.endpoint, requestConfig)
      .then((res) => res.data.results);
  };
  post = (data: T) => {
    return axiosInstance.post(this.endpoint, data).then((res) => res.data);
  };
}
export default APIClient;

export interface FetchRespones<T> {
  count: number;
  next: string | null;
  results: T[];
}
