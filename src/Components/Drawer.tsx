import React, {useRef, useContext, useState} from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Image,
  Icon,
  Box,
} from '@chakra-ui/core';

import {ThemeContext, themes} from '../App';

const CustomDrawer: React.FC = () => {
  const [choosenColor, setChoosenColor] = useState('');
  const [choosenBg, setChoosenBg] = useState('');

  const {bg, color, setTheme} = useContext(ThemeContext);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();

  const changeColor = (theme: {bg: string; color: string}) => {
    setChoosenBg(theme.bg);
    setChoosenColor(theme.color);
  };

  const saveColor = () => {
    setTheme(choosenColor, choosenBg);
  };

  return (
    <React.Fragment>
      <Button ref={btnRef} onClick={onOpen} position="fixed" left="0px" top="0px">
        <Icon name="arrow-right" />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerHeader
            alignSelf="center"
            fontSize="35px"
            mt="50px"
            color={color}
            textShadow={'5px 5px 5px' + color}>
            Corona Virus
          </DrawerHeader>

          <DrawerBody>
            <Image
              rounded="full"
              size="275px"
              src={require('../assets/images/icon.jpg')}
              alt="Segun Adebayo"
            />

            <Box d="flex" flexDir="column" mt="100px">
              <Button onClick={() => changeColor(themes.blue)} mt="10px" bg="#00F" color="#FFF">
                Blue
              </Button>
              <Button
                onClick={() => changeColor(themes.green)}
                border="1px solid #555"
                mt="10px"
                bg="#00FF00">
                Green
              </Button>
              <Button
                onClick={() => changeColor(themes.light)}
                border="1px solid #555"
                mt="10px"
                bg="#FFF">
                Light
              </Button>
              <Button
                onClick={() => changeColor(themes.dark)}
                border=".5px solid #EEE"
                mt="10px"
                bg="#111"
                color="#FFF">
                Dark
              </Button>
              <Box display="flex" justifyContent="space-between" mt="35px">
                <Button onClick={onClose} w={1 / 2.1} border="1px solid #BBB">
                  Cancel
                </Button>
                <Button onClick={saveColor} w={1 / 2.1} border="1px solid #BBB">
                  Save
                </Button>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default CustomDrawer;
