import React, {useEffect, useContext, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Text,
  Input,
  Select,
  InputGroup,
  InputLeftAddon,
  Icon,
} from '@chakra-ui/core';

import {countriesSelector} from '../Store/Selectors';
import {countriesStatistics} from '../Store/Actions';

import Statistics from '../Components/Statistics';
import {ThemeContext} from '../App';
import {CountriesStatisticsResponse} from '../Models/model';

const BOXSTYLE = {
  w: '28.5%',
  mx: '10px',
  bg: '#EEE',
  borderRadius: '10px',
  p: '5px',
  m: '10px auto 0',
};

const Countries: React.FC = () => {
  const {bg, color} = useContext(ThemeContext);

  const apiStatisctis = useSelector(countriesSelector);
  const [countries, setCountries] = useState(apiStatisctis);
  const [orderingBy, setOrderingBy] = useState<string>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesStatistics());
  }, [dispatch]);

  useEffect(() => {
    setCountries(apiStatisctis);
  }, [apiStatisctis]);

  let filteredCountries;
  const changeHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    filteredCountries = apiStatisctis.filter((country) => {
      return country?.country?.toLowerCase().startsWith(event.currentTarget.value.toLowerCase());
    });
    orderingBy ? sortBy(orderingBy, filteredCountries) : setCountries(filteredCountries);
  };

  const sortBy = (sortingBy: string, countriesToOrder: CountriesStatisticsResponse): void => {
    setOrderingBy(sortingBy);
    sortingBy === '1'
      ? (filteredCountries = countriesToOrder.slice().sort((a, b) => a.cases - b.cases))
      : sortingBy === '2'
      ? (filteredCountries = countriesToOrder.slice().sort((a, b) => a.deaths - b.deaths))
      : (filteredCountries = countriesToOrder.slice().sort((a, b) => a.active - b.active));
    setCountries(filteredCountries);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        py="50px"
        bg={bg}
        color={color}
        minH="100vh">
        <Text marginBottom="50px" fontSize="40px" fontWeight="bold">
          Countries Statistics
        </Text>

        <Accordion w={3 / 4} allowToggle>
          <Box display="flex" mb="10px">
            <InputGroup w={3 / 4} mr="5px">
              <InputLeftAddon children={<Icon name="search" />} />
              <Input placeholder="Search" onInput={changeHandler} />
            </InputGroup>

            <Select
              placeholder="Sorting By"
              w={1 / 4}
              onChange={(e) => sortBy(e.currentTarget.value, countries)}>
              <option value="1">Cases</option>
              <option value="2">Deaths</option>
              <option value="3">Active Cases</option>
            </Select>
          </Box>

          {countries.map((country, index) => (
            <AccordionItem key={index} borderRight="1px solid #CCC" borderLeft="1px solid #CCC">
              <AccordionHeader>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {country.country}
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4} display="flex" flexWrap="wrap" textAlign="center">
                <Statistics name="Total Cases" count={country.cases} boxStyling={BOXSTYLE} />
                <Statistics name="Today Cases" count={country.todayCases} boxStyling={BOXSTYLE} />
                <Statistics name="Total Deaths" count={country.deaths} boxStyling={BOXSTYLE} />
                <Statistics name="Today Deaths" count={country.todayDeaths} boxStyling={BOXSTYLE} />
                <Statistics name="Active Cases" count={country.active} boxStyling={BOXSTYLE} />
                <Statistics name="Critical Cases" count={country.critical} boxStyling={BOXSTYLE} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </React.Fragment>
  );
};

export default Countries;
