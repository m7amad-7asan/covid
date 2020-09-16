import axiosInstance from './axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const statisticsAPI = {
  get: () => axiosInstance.get('/all').then((response) => response.data),
};
export const getStatistics = createAsyncThunk('main/statistics', async () => {
  const responseData = await statisticsAPI.get();
  return responseData;
});

const countriesStatisticsAPI = {
  get: () => axiosInstance.get('/countries?sort=country').then((response) => response.data),
};
export const countriesStatistics = createAsyncThunk('main/countries', async () => {
  const responseData = await countriesStatisticsAPI.get();
  return responseData;
});
