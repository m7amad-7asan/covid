import React, {createContext, useCallback, useState, useMemo} from 'react';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';

import Routes from './Components/Routes';

export const themes = {
  light: {
    bg: '#FFF',
    color: '#000',
    setTheme: (newColor: string, newBg: string) => {},
  },
  dark: {
    bg: '#000',
    color: '#555',
    setTheme: (newColor: string, newBg: string) => {},
  },
  green: {
    bg: '#00FF00',
    color: '#000',
    setTheme: (newColor: string, newBg: string) => {},
  },
  blue: {
    bg: '#00BFFF',
    color: '#555',
    setTheme: (newColor: string, newBg: string) => {},
  },
};

export const ThemeContext = createContext(themes.light);
const {Provider} = ThemeContext;

function App() {
  const [color, setColor] = useState('#000');
  const [bg, setBg] = useState('#FFF');

  const setTheme = useCallback((newColor: string, newBg: string) => {
    setColor(newColor);
    setBg(newBg);
  }, []);

  const value = useMemo(() => ({bg, color, setTheme}), [bg, color, setTheme]);

  return (
    <ThemeProvider>
      <CSSReset />
      <Provider value={value}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
