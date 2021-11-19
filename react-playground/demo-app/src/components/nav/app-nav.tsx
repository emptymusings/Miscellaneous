import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from '../../home/Home';
import { HomeRounded } from '@mui/icons-material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

const NotFoundPage = (): JSX.Element => <h1>404</h1>;

export default function NavMain(): JSX.Element {
    
  return (
        <BrowserRouter>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>    
                    <Toolbar>
                        <nav>
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <IconButton>
                                    <HomeRounded />
                                    Home
                                </IconButton>
                                
                            </NavLink>
                        </nav>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="app-content">
                <Paper className="component-paper">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/*" element={<NotFoundPage />} />
                    </Routes>
                </Paper>
            </div>
        </BrowserRouter>
    );
  }
