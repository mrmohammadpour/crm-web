import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Switch from '@mui/material/Switch';



function Switchbutton() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
    return (
      <div className={styles.root}>
            <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      </div>
    );
  }
  
  export default Switchbutton;