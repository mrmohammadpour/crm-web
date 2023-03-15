import React from "react";
import styles from './style.module.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Create_company() {

  return (
    <div className={styles.root}>
      
      <Grid sx={{ p: 1 }} item >
        <Grid container >

          <Grid sx={{p: 1}} xs={12} sm={4} className={styles.line}>
            <Link to="/dashboard" className={styles.link}>
              <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius:'5px',
                  padding: '15px',
                  boxShadow: '1px 1px 5px #0000003b'
                }}>
                    <div>
                      <Grid container>
                        <Grid sm={2}>
                          <Avatar sx={{ bgcolor: '#4c6ef8' }}>ت</Avatar>
                        </Grid>
                        <Grid sm={7}>
                          <span className={styles.titr_box}>
                            تیک تاک زمان
                          </span>
                        </Grid>
                        <Grid sm={3}>
                        </Grid>
                      </Grid>
                      <hr />
                    </div>

              </Box>
                  </Link>

          </Grid>
          


        </Grid>

      
      </Grid>
  

    </div>
  );
}
export default Create_company;