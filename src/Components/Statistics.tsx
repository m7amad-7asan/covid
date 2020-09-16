import React from 'react';
import {Box, Text} from '@chakra-ui/core';

interface Props {
  name: string;
  count: any;
  boxStyling?: object;
  titleStyling?: object;
  descriptionStyling?: object;
}

const Statistics: React.FC<Props> = ({
  name,
  count,
  boxStyling,
  titleStyling,
  descriptionStyling,
}) => {
  return (
    <Box {...boxStyling}>
      <Text {...titleStyling}>{name}</Text>
      <Text {...descriptionStyling}>{count}</Text>
    </Box>
  );
};

export default Statistics;
