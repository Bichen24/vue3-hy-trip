import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMianStore from "@/stores/modules/main.js";
const mianStore = useMianStore();
class hyRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use(
      (config) => {
        mianStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        mianStore.isLoading = false;
        return res;
      },
      (err) => {
        mianStore.isLoading = false;
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new hyRequest(BASE_URL, TIMEOUT);
