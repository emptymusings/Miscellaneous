import React from 'react';
import { Device } from './crestron-interfaces';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import LightButtons from './components/light-buttons';

export interface Props {
  device: Device;
}

export default function CrestronDevice(props: Props): JSX.Element {
  const DeviceIcon = (props: Props): JSX.Element => {
    switch (props.device.deviceGroup) {
      case 'Dimmer':
        return <LightbulbOutlinedIcon />;
      case 'Hvac':
        return <DeviceThermostatOutlinedIcon />;
      default:
        return <PowerSettingsNewOutlinedIcon />;
    }
  };

  return (
    <>
      <Paper className="tiled-paper" elevation={3}>
        <Typography variant="h6">
          <DeviceIcon device={props.device} /> {props.device.name}{' '}
          {props.device.deviceGroup}
        </Typography>
        <Paper>
          <LightButtons device={props.device} />
        </Paper>
      </Paper>
    </>
  );
}
