import {RootState} from '../index';

export const statisticsSelector = (state: RootState) => state.user.statistics;
export const countriesSelector = (state: RootState) => state.user.countries;
