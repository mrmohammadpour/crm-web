import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

type option = {
  id?: string,
  label?: string,
  placeholder?: string,
  value?: string;
  multiline?: boolean;
}
function Radioinput({ ...option }: option): any {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
        
        <input className={styles.search_inout} { ...option }/>

  );
}

export default Radioinput;