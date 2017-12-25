import axios from 'axios';
import { AxiosInstance } from 'axios';
import { BASE_URL } from '../constants/index';

export const axiosInstance: () => AxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-type': 'application/json'
    }
  });
};