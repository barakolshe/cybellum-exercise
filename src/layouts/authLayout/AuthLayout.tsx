import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', maxWidth: '100vw' }}>
      <Outlet />
    </Box>
  );
}
