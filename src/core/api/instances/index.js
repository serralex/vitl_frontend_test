import axios from "axios";

const instance = axios.create({
  baseURL: "https://vitl-static-api.s3-eu-west-1.amazonaws.com" 
});

export default instance