import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import download from '../assets/images/download.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={ download} alt="logo" style={{ width: '140px', height: '80px' ,borderRadius:'50%'}} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">&#169; Made by *Aditya Kumar Mishra*</Typography>
  </Box>
);

export default Footer;
