import React from "react";
import styles from './style.module.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import CloseIcon from '@mui/icons-material/Close';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import DeleteIcon from '@mui/icons-material/Delete';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import DoneIcon from '@mui/icons-material/Done';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';



import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import HttpsIcon from '@mui/icons-material/Https';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockClockIcon from '@mui/icons-material/LockClock';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import LinkedInIcon from '@mui/icons-material/LinkedIn';







import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ModeIcon from '@mui/icons-material/Mode';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';







import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import TwitterIcon from '@mui/icons-material/Twitter';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',

}));
type option = {
  id?: string,
  label?: string,
  placeholder?: string,
  value?: string;
  multiline?: boolean;
}
function Icon_fild({ ...option }: option): any {
    return (
      <div className={styles.root}>


<Box sx={{ flexGrow: 1 }}>


  <Grid container spacing={1} >
      <Grid item  xs={4} md={1} >
        <Item className={styles.boxto}>
            <AddIcon { ...option }/> 
        </Item>
      </Grid>


      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
2           < AccountBoxIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
3         < AddCircleOutlineIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
4         < AddCircleIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
5         < ArrowBackIosNewIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
6        < AssignmentTurnedInIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
7         < AssuredWorkloadIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
8       <  AssuredWorkloadIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
9        < AttachMoneyIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
10        <  CancelIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
11       <CheckIcon/>
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
12        <CheckCircleIcon/>
        </Item>
      </Grid>






      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
13             <CloseIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
14           < CollectionsBookmarkIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
15         < ContactMailIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
16        <ConnectedTvIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
17         < DeleteIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
18        < DensitySmallIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
19         < DoneIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
20       < DownloadDoneIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
21        <  DynamicFeedIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
22        < EventIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
23       <  EventAvailableIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
24        < EventBusyIcon />
        </Item>
      </Grid>





      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
25             <  FavoriteIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
26           <  FavoriteBorderIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
27         <  FilterNoneIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
28        < FingerprintIcon/>
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
29         < FormatListBulletedIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
30        <  HolidayVillageIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
31         < HttpsIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
32       < LockOpenIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
33        < LockClockIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
34        < InsertDriveFileIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
35       < KeyIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
36        <KeyOffIcon  />
        </Item>
      </Grid>




      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
37             < LinkedInIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
38           < LocalGroceryStoreIcon   />
        </Item >
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
39         <  LocalPhoneIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
40         <LocationOnIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
41         <  ModeIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
42        <  MoodBadIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
43         < NotificationsIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
44       < NotificationsActiveIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
45        <  NotificationsOffIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
46        <  NotificationsNoneIcon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
47       <  PersonAddAlt1Icon  />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}> 
48        < PhoneInTalkIcon />
        </Item>
      </Grid>




      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
49             < PlayCircleIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
50           <  PlaylistAddCheckCircleIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
51         < PlaylistAddCheckIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
52         < SearchIcon/>
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
53         <  SearchOffIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
54        < SmartphoneIcon   />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
55         < StackedBarChartIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
56       < TwitterIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
57        <  VisibilityIcon />
        </Item>
      </Grid>
      <Grid item xs={4} md={1} >
        <Item className={styles.boxto}>
58        < VisibilityOffIcon  />
        </Item>
      </Grid>





  </Grid>
</Box>





      </div>
    );
  }
  
  export default Icon_fild;