import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DraftsIcon from '@mui/icons-material/Drafts';
import Textinput from "../../../component/textfild/textfild";
import Textbutton from "../../../component/button/button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
// import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import WcIcon from '@mui/icons-material/Wc';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import TransgenderIcon from '@mui/icons-material/Transgender';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function User() {
  const [value, setValue] = React.useState<Date | null>(new Date(2022, 3, 7));

  return (
    <div className={styles.root}>
      <span>ایجاد کاربر</span>
      <form action="#" method="get">
      <Grid sx={{ p: 1 }} item >
        <Grid sx={{ p: .5 }} container>
          <Grid xs={12} sm={6} container >
            <Grid sx={{ p: .5 }}>
              <Grid className={styles.box_icon_dashbord}>
                  <PersonIcon className={styles.icon_dashbord}/>
              </Grid>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label="نام خودتان را وارد کنید" placeholder=" نام " multiline/>
            </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <PersonIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
              <Textinput id="outlined-textarea" label=" نام خانوادگی را وارد کنید." placeholder="نام خانوادگی  " multiline/>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: .5 }} container>
          <Grid  xs={12} sm={6} container >
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <FormatListNumberedIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label="کدملی را واردکنید " placeholder="کدملی " multiline/>
            </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <PhoneIphoneIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label="شماره همراه راوارد کنید" placeholder="شماره همراه " multiline/>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: .5 }} container>
          <Grid  xs={12} sm={6} container >
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                <EmailIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
              <Textinput id="outlined-textarea" label=" ایمیل را وارد کنید" placeholder="ایمیل " multiline/>
            </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <BadgeIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label="نام کاربری را وارد کنید" placeholder=" نام کاربری " multiline/>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: .5 }} container>
          <Grid  xs={12} sm={6} container >
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <LockIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label=" ایمیل را وارد کنید" placeholder=" رمزعبور " multiline/>
            </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <BabyChangingStationIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label=" نام پدر " placeholder=" نام پدر " multiline/>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: .5 }} container>
          <Grid  xs={12} sm={6} container >
            <Grid sx={{ p: .5,pt:1.5 }}>
              <div className={styles.box_icon_dashbord}>
                  <PermContactCalendarIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
            </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <MyLocationIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid sx={{ p: .5 }}>
                <Textinput id="outlined-textarea" label="نام کاربری را وارد کنید" placeholder="منطقه جغرافیایی  " multiline/>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: .5 }} container>
          <Grid  xs={12} sm={6} container >
            <Grid sx={{   pr:1 ,pl:.5  }}>
              <div className={styles.box_icon_dashbord}>
                  <LocalLibraryIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid >
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="حقوقی" />
                <FormControlLabel value="male" control={<Radio />} label="حقیقی" />
              </RadioGroup>
            </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
          <Grid sx={{ pr:1 ,pl:.5,  }}>
                <div className={styles.box_icon_dashbord}>
                    <DesktopAccessDisabledIcon className={styles.icon_dashbord}/>
                </div>
              </Grid>
              <Grid sx={{ p: .5 }}>             
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group">
                      <FormControlLabel value="female" control={<Radio />} label="دسترسی" />
                      <FormControlLabel value="male" control={<Radio />} label="عدم دسترسی" />
                  </RadioGroup>
              </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: .5 }} container>
          <Grid  xs={12} sm={6} container >
            <Grid sx={{  pr:1 ,pl:.5,  }}>
              <div className={styles.box_icon_dashbord}>
                  <WcIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid >  
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="مجرد" />
                  <FormControlLabel value="male" control={<Radio />} label="متاهل" />
                </RadioGroup>
             </Grid>
          </Grid>  
          <Grid xs={12} sm={6}  container>
             <Grid sx={{  pr:1 ,pl:.5,  }}>
                <div className={styles.box_icon_dashbord}>
                    <TransgenderIcon className={styles.icon_dashbord}/>
                </div>
              </Grid>
              <Grid sx={{ p: .5 }}>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="زن" />
                  <FormControlLabel value="male" control={<Radio />} label="مرد" />
                </RadioGroup>
              </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} sm={12}  container>
            <Grid sx={{ p: .5 }}>
              <div className={styles.box_icon_dashbord}>
                  <DraftsIcon className={styles.icon_dashbord}/>
              </div>
            </Grid>
            <Grid  sx={{ p: .5 }}>
                <textarea className={styles.text_description}  id="w3review" name="w3review"  placeholder=": درس" />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={styles.button_insert} container sx={{ p: 2 }}>
            <Textbutton />
        </Grid>
      </Grid>
      </form>

    </div>
  );
}
export default User;