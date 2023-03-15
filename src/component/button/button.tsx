import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


type option = {
  id?: string,
  label?: string,
  placeholder?: string,
  value?: string;
  multiline?: boolean;
}
function Textbutton({ ...option }: option): any  {
    return (
      <div className={styles.root}>
        <Stack spacing={2} direction="row">
            <Button variant="contained">ثبت</Button>
        </Stack>
      </div>
    );
  }
  
  export default Textbutton;