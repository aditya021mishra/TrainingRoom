import React from 'react';
import { Stack } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
   <ThreeDots color="#00BFFF" height={80} width={80} />
  </Stack>
);

export default Loader;