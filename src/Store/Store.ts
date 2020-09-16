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
  extraReducers: (builder) => {
    builder.addCase(getStatistics.fulfilled, (state, {payload}) => {
      state.statistics = payload;
    });
    builder.addCase(countriesStatistics.fulfilled, (state, {payload}) => {
      state.countries = payload;
    });
  },
});
