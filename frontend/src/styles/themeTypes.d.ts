import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  theme: {
    mainTheme: '#fff',
    secondTheme: '#212121, 100%',
  },
  button: {
    background: '#212121',
    textColor: '#fff',
  },
  label: {
    textColor: '#212121',
  },
  input: {
    textColor: '#212121',
    border: '#424242',
    normal: '#424242',
    active: '#424242',
    error: '#8F0109',
    placeholder: '#9E9E9E',
  },
  icon: {
    white: '#fff',
    grey: '#212121',
  },
  text: {
    white: '#ffffff',
    grey: '#212121',
  },
};

export { lightTheme };