import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2',
});
