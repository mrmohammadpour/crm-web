import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Textavatar from "../../../component/avatar/avatar";
import Avatar from '@mui/material/Avatar';
import { green, pink } from '@mui/material/colors';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Searchbutton from "../../../component/search/search";
import Pulse from "../../../component/pulse-icon/pulse";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function Header() {

  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <Grid sx={{  }} container className={styles.header}>
        {/* <Grid sx={{ p:1, }} item xs={12} sm={2.2} >
          <div className={styles.img_header}>
            <img width={200} src={"./images/weblimner2.png"}/>
          </div>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Grid container sx={{  pr: 2 ,pt:2}}  >
            {/* <Searchbutton/> */}

          </Grid>
        </Grid>
        <Grid container item xs={5} sm={4.5} sx={{ p: 1 }} direction="row-reverse">
          <Grid xs={3} sm={1.2}>
            <div className={styles.pulse_icon} >
              <AddAlertIcon  className={styles.bg_icon} />
              <Pulse/>
            </div>
          </Grid>
          <Grid xs={3} sm={1.2}>
            <div className={styles.pulse_icon} >
              <BroadcastOnPersonalIcon className={styles.bg_icon}/>
              <Pulse/>
            </div>
          </Grid>
          <Grid xs={3} sm={1.2}>
            <div className={styles.pulse_icon} >
              <CardMembershipIcon className={styles.bg_icon}/>
              <Pulse/>
            </div>
          </Grid>
          
        </Grid>

        <Grid item xs={7} sm={1.5}>
          <Grid container sx={{  pr: 2 ,pt:1.5}}  direction="row-reverse">
            <Avatar sx={{ bgcolor: '#1f344bc2' }}>ح</Avatar>
            <Grid  className={styles.text_avatar}>
              <span> حسین محمدپور</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>


  );
}

export default Header;
{/* <Textinput />
<Textbutton/>
<Textavatar/> 
<Icon_fild/> 
<ConfirmationDialog/>
<Countus/> 
<Switchbutton/> */}