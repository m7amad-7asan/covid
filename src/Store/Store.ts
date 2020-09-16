import {createSlice} from '@reduxjs/toolkit';

import {StatisticsResponse, CountriesStatisticsResponse} from '../Models/model';
import {getStatistics, countriesStatistics} from './Actions';

const initState = {
  statistics: {} as StatisticsResponse,
  countries: [] as CountriesStatisticsResponse,
};

export const userSlice = createSlice({
  name: 'main',
  initialState: initState,
  reducers: {},
  extraReducers: {
    [getStatistics.fulfilled.toString()]: (state, action) => {
      state.statistics = action.payload;
    },
    [countriesStatistics.fulfilled.toString()]: (state, action) => {
      state.countries = action.payload;
    },
  },
});
