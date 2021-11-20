import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from '../../home/Home';
import { HomeRounded } from '@mui/icons-material';
import { AccountBalance } from '@mui/icons-material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import CrestronDeviceList from '../../crestron/crestron-device-list';

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
            <nav>
              <NavLink to="/crestron" style={{ textDecoration: 'none' }}>
                <IconButton>
                  <AccountBalance />
                  Crestron Devices
                </IconButton>
              </NavLink>
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="app-content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/crestron" element={<CrestronDeviceList />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
