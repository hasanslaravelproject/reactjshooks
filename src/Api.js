import axios from "axios";
const BaseUrl = 'http://127.0.0.1:8000/api/';
const yourConfig = {
    headers: {
       Authorization: "Bearer " + "1|gq3dTK1elWclrKJZhL64C9oktf4jmbxM49yqqaiU"
    }
 };
const API = {
    makeGetRequest(url) {
        return axios.get(BaseUrl+url, yourConfig);
    } 
    } 
  export default API;