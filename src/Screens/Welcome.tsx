import React, {useEffect, useContext, useCallback} from 'react';
import {Box, Button, Text, Icon} from '@chakra-ui/core';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {statisticsSelector} from '../Store/Selectors';
import {getStatistics} from '../Store/Actions';

import Statistics from '../Components/Statistics';
import {ThemeContext} from '../App';

const BOXSTYLE = {
  w: '25%',
  h: '200px',
  bg: '#EEE',
  margin: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '50px',
};
const TITLESTYLE = {fontSize: '25px', fontWeight: 'bold'};
const DESCRIPTIONSTYLE = {mt: '15px'};

const Welcome: React.FC = () => {
  const {bg, color} = useContext(ThemeContext);

  const apiStatisctis = useSelector(statisticsSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  const ShowCountries = useCallback(() => {
    history.push('/countries');
  }, [history]);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Box height="100vh" bg={bg} color={color}>
        <Box display="flex" justifyContent="center" p="70px 0 45px">
          <Text fontSize="50px" fontWeight="bold">
            Covid-19 Statistics
          </Text>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          height="50vh"
          justifyContent="space-around"
          alignItems="flex-end">
          {[
            {name: 'Total Cases', numberOf: apiStatisctis?.cases},
            {name: 'Today Cases', numberOf: apiStatisctis?.todayCases},
            {name: 'Total Deaths', numberOf: apiStatisctis?.deaths},
            {name: 'Today Deaths', numberOf: apiStatisctis?.todayDeaths},
            {name: 'Active Cases', numberOf: apiStatisctis?.active},
            {name: 'Critical Cases', numberOf: apiStatisctis?.critical},
          ].map((item, statsindex) => (
            <Statistics
              key={`statistic-${statsindex}`}
              name={item.name}
              count={item.numberOf}
              boxStyling={BOXSTYLE}
              titleStyling={TITLESTYLE}
              descriptionStyling={DESCRIPTIONSTYLE}
            />
          ))}
        </Box>

        <Button position="fixed" right="25px" bottom="25px" onClick={ShowCountries}>
          Countries Statistics &nbsp; <Icon name="arrow-right" />
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Welcome;
