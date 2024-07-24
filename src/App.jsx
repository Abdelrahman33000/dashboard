import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { getDesignTokens } from './theme';
import {  Route, Routes } from 'react-router-dom';
import { Calender, Chart, Contacts, Dashboard, Faq, Form, Geography, Invoice, Line, Pie, Team } from './Pages';
import NotFound from './NotFound';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState( 
    localStorage.getItem("currentMode")
    ? localStorage.getItem("currentMode") :"light");

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
  <TopBar  setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen}  />

     <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 , overflowX:"scroll" }}>
        <DrawerHeader />
       
 
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='team' element={<Team />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='invoice' element={<Invoice />} />
        <Route path='form' element={<Form />} />
        <Route path='calender' element={<Calender />} />
        <Route path='faq' element={<Faq />} />
        <Route path='bar' element={<Chart />} />
        <Route path='pie' element={<Pie />} />
        <Route path='line' element={<Line />} />
        <Route path='geography' element={<Geography />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      </Box>


    </Box>
    </ThemeProvider>
  );
}
