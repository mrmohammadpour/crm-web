import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';


type option = {
  id?: string,
  label?: string,
  placeholder?: string,
  value?: string;
  multiline?: boolean;
}
function Textinput({ ...option }: option): any {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
        
        <input className={styles.search_inout} { ...option }/>
        
  );
}

export default Textinput;