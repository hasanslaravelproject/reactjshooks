import axios from "axios";
const BaseUrl = "http://127.0.0.1:8000/api/";
const yourConfig = {
  headers: {
    Authorization: "Bearer " + "2|r5sxnIjVZat2190Igwrg01lJCzcyRd4csePBrBkc",
  },
};
const API = {
  makeGetRequest(url1, url2) {
    const clientApi = axios.get(BaseUrl + url1, yourConfig);
    const reportApi = axios.get(BaseUrl + url2, yourConfig);

    return axios.all([clientApi, reportApi]);
  },
};
export default API;
