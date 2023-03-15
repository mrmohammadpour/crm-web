import React from "react";
import styles from './style.module.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Cross as Hamburger } from 'hamburger-react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textinput from "../component/textfild/textfild";
import Textbutton from "../component/button/button";
import Textavatar from "../component/avatar/avatar";
import Icon_fild from "../component/icon/icon";
import ConfirmationDialog from "../component/selector-popup/selector_pup";
import Countus from "../component/count-us/count-us";
import Switchbutton from "../component/switch/switch";
import Header from "../page/menu/header/header";
import Sidebar from "../page/menu/sidebar/sidebar";
import Dashbord from "../page/center/dashbord/dashbord";
import Searchbutton from "../component/search/search";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Layout = (props:any):any => {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.root}>

          {/* <Header /> */}
        <Grid container>
            <Grid xs={12} sm={2}><Sidebar /> </Grid>
            <Grid xs={12} sm={10}>
              <Header />
              <div className={styles.box_center}>
                {props.children}
              </div>
            </Grid>
        </Grid>
    </div>
  );
};
export default Layout;


{/* <Textinput />
<Textbutton/>
<Textavatar/> 
<Icon_fild/> 
<ConfirmationDialog/>
<Countus/> 
<Switchbutton/> */}