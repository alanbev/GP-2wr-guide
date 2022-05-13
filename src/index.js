import React, { createContext, useState } from 'react';
import { render } from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// Software Written by Alan J Beveridge
//Consultant Colorectal Surgeon Lancashire Teaching Hospitals NHS Foundation Trust
//alan.beveridge@lthtr.nhs.uk


render(
  <React.StrictMode>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >

        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Two Week Rule Referal Helper
        </Typography>
      </Toolbar>
    </AppBar>
    <Paper sx={{ mt: 8 }}>
      < App />
    </Paper>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
