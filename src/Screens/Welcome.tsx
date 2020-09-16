import React, {useEffect, useContext} from 'react';
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

  const ShowCountries = () => {
    history.push('/countries');
  };

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
          <Statistics
            name="Total Cases"
            count={apiStatisctis?.cases}
            boxStyling={BOXSTYLE}
            titleStyling={TITLESTYLE}
            descriptionStyling={DESCRIPTIONSTYLE}
          />
          <Statistics
            name="Today Cases"
            count={apiStatisctis?.todayCases}
            boxStyling={BOXSTYLE}
            titleStyling={TITLESTYLE}
            descriptionStyling={DESCRIPTIONSTYLE}
          />
          <Statistics
            name="Deaths"
            count={apiStatisctis?.deaths}
            boxStyling={BOXSTYLE}
            titleStyling={TITLESTYLE}
            descriptionStyling={DESCRIPTIONSTYLE}
          />
          <Statistics
            name="Today Deaths"
            count={apiStatisctis?.todayDeaths}
            boxStyling={BOXSTYLE}
            titleStyling={TITLESTYLE}
            descriptionStyling={DESCRIPTIONSTYLE}
          />
          <Statistics
            name="Active Cases"
            count={apiStatisctis?.active}
            boxStyling={BOXSTYLE}
            titleStyling={TITLESTYLE}
            descriptionStyling={DESCRIPTIONSTYLE}
          />
          <Statistics
            name="Critical Cases"
            count={apiStatisctis?.critical}
            boxStyling={BOXSTYLE}
            titleStyling={TITLESTYLE}
            descriptionStyling={DESCRIPTIONSTYLE}
          />
        </Box>

        <Button position="fixed" right="25px" bottom="25px" onClick={ShowCountries}>
          Countries Statistics &nbsp; <Icon name="arrow-right" />
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Welcome;
