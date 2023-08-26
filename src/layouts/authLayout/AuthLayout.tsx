import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', md: 'space-between' }, height: '100vh', width: '100%' }}>
      <Outlet />
    </Box>
  );
}
