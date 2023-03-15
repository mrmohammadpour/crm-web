import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Cross as Hamburger } from 'hamburger-react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { sizing } from '@mui/system';
import DashboardIcon from '@mui/icons-material/Dashboard';
import User from "../../../api/auth/user/user";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Sidebar() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  return (

    <div className={styles.root}>
      {/* <div className={styles.icon_hamberger}>
        <Hamburger direction="right" />
      </div> */}
      <div className={styles.logo_sidebar}>
        سامانه هوشمند وبلیمنر
      </div>
      <div>
        <ul className={styles.sidebarul}>
          <li className={styles.text_side}>
            <Link to="dashboard" className={styles.hover_a}>
                <i className={styles.icon_side}><DashboardIcon /></i>میز کار
            </Link>
          </li>
          <li className={styles.text_side}>
            <Link to="company" className={styles.hover_a}>
              <i className={styles.icon_side}><AddBusinessIcon /></i> شرکت ها
            </Link>
          </li>
        </ul>

      </div>
      <div className={styles.background_img_sidebar}></div>
    </div>

  );
}

export default Sidebar;