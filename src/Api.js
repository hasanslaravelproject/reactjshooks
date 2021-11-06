import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/';
const yourConfig = {
    headers: {
       Authorization: "Bearer " + "1|TMpZviGCFIsXVIKXOX70e4yyRS6FQ05JJuCnIbFm"
    }
 };
const API = {
    makeGetRequest(url1, url2,url3) {
        const clientApi = axios.get(BaseUrl+url1, yourConfig);
        const allFoodsApi = axios.get(BaseUrl+url2, yourConfig);
        const usersApi = axios.get(BaseUrl+url3, yourConfig);

        return axios.all([clientApi, allFoodsApi,usersApi ])
    
    } 
    } 
  export default API;