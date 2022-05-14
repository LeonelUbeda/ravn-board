import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': { color: 'neutral.100', backgroundColor: 'neutral.500' },
    }),
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    neutral: {
      100: '#FFFFFF',
      200: '#94979A',
      300: '#393D41',
      400: '#2C2F33',
      500: '#222528',
    },
    primary: {
      100: '#F4CCC8',
      200: '#EBA59E',
      300: '#E27D73',
      400: '#DA584B',
    },
    secondary: {
      100: '#C8E1BC',
      200: '#AAD199',
      300: '#8DC275',
      400: '#70B252',
    },
    tertiary: {
      100: '#F9EED7',
      200: '#F2DAAB',
      300: '#EBC77F',
      400: '#E5B454',
    },
  },
});

export default theme;
