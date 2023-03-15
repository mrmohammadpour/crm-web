import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
// import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Dashbord() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.root}>
        {/* <div className={styles.line_index}>
           داشبورد   
        </div> */}
      <Grid sx={{ p: 1 }} item >
        <Grid container >
          <Grid sx={{p: 1}} xs={12} sm={3} className={styles.line}>

              <Box sx={{
                backgroundImage: 'linear-gradient(to top,#0ba360 0%,#3cba92 100%)!important',
                borderRadius:'5px',
                padding: '15px',
              }}>
                    <Grid container >
                      <Grid sm={4}>
                        <PersonIcon  className={styles.bg_icon} />
                      </Grid>
                      <Grid sm={8}>
                        <div style={{fontWeight:"bold",fontSize: '14px',color:'#fff'}}>تعداد کاربران</div>
                        <div style={{fontFamily: 'iransansdigit',fontSize: '25px', color:'#fff'}}>1100</div>
                      </Grid>
                    </Grid>
                </Box>
          </Grid>
          <Grid sx={{p: 1}} xs={12} sm={3} className={styles.line}>
              <div className={styles.box}></div>
              <Box sx={{
                  backgroundImage: 'linear-gradient(to top,#46aef7 0%,#30c7ec 100%)!important',
                  borderRadius:'5px',
                  padding: '15px',
                }}>
                  <Grid container >
                      <Grid sm={4}>
                        <ShoppingBagRoundedIcon  className={styles.bg_icon} />
                      </Grid>
                      <Grid sm={8}>
                        <div style={{fontWeight:"bold",fontSize: '14px',color:'#fff'}}>تعداد محصولات</div>
                        <div style={{fontFamily: 'iransansdigit',fontSize: '25px', color:'#fff'}}>2541</div>
                      </Grid>
                  </Grid>
                </Box>
          </Grid>
          <Grid sx={{p: 1}} xs={12} sm={3} className={styles.line}>
              <div className={styles.box}></div>
              <Box sx={{
                  backgroundImage: 'linear-gradient(to top,#2b5876 0%,#4e4376 100%)!important',
                  borderRadius:'5px',
                  padding: '15px',
                }}>
                  <Grid container >
                      <Grid sm={4}>
                        <DescriptionRoundedIcon  className={styles.bg_icon} />
                      </Grid>
                      <Grid sm={8}>
                        <div style={{fontWeight:"bold",fontSize: '14px',color:'#fff'}}>تعداد فاکتورها</div>
                        <div style={{fontFamily: 'iransansdigit',fontSize: '25px', color:'#fff'}}>3712</div>
                      </Grid>
                  </Grid>
                </Box>
          </Grid>
          <Grid sx={{p: 1}} xs={12} sm={3} className={styles.line}>
              <div className={styles.box}></div>
              <Box sx={{
                  backgroundImage: 'linear-gradient(to top,#ff0844 0%,#ffb199 100%)!important',
                  borderRadius:'5px',
                  padding: '15px',
                }}>
                  <Grid container >
                      <Grid sm={4}>
                        <WorkHistoryIcon  className={styles.bg_icon} />
                      </Grid>
                      <Grid sm={8}>
                        <div style={{fontWeight:"bold",fontSize: '14px',color:'#fff'}}>تعداد سوابق کاربران</div>
                        <div style={{fontFamily: 'iransansdigit',fontSize: '25px', color:'#fff'}}>7430</div>
                      </Grid>
                  </Grid>
                </Box>
          </Grid>

          <Grid sx={{p: 1}} xs={12} sm={6} className={styles.line}>
              <div className={styles.box}></div>
              <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius:'5px',
                  padding: '15px',

                }}>
                </Box>
          </Grid>
          


        </Grid>

      
      </Grid>
    </div>
  );
}
export default Dashbord;