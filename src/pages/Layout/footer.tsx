import React from 'react';
import styles from './style.module.scss';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className='flex'>
            <IconButton color='primary'><Facebook/></IconButton>
            <IconButton color='error'><Instagram/></IconButton>
            <IconButton color='info'><Twitter/></IconButton>
            <IconButton color='primary'><LinkedIn/></IconButton>
        </div>
    </div>
  )
}

export default Footer;