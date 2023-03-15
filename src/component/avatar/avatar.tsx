import React from "react";
import { styled } from '@mui/material/styles';
import styles from './style.module.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';


const Textavatar = ({ component, name,text }: any): any => {
  return (
    <div className={styles.root}>
      <Stack direction="row" spacing={2}>
        <Avatar className={component} alt="Remy Sharp" src={name} />{text}
      </Stack>
    </div>
  );
}

export default Textavatar;
