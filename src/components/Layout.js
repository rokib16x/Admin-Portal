import React from 'react';
import { Box, styled } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const drawerWidth = 280;

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header />
        <Main>{children}</Main>
      </Box>
    </Box>
  );
}

