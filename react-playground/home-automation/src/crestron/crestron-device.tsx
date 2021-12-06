import React from 'react';
import { Device } from './crestron-interfaces';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import DimmerButtons from './components/dimmer-buttons';
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

  function GetDeviceDisplay({ device }: Props): JSX.Element {
    if (device.deviceGroup === 'Dimmer') {
      return <DimmerButtons device={device} />;
    }

    return <></>;
  }
  return (
    <>
      <Paper className="tiled-paper" elevation={3}>
        <Typography variant="h6">
          <DeviceIcon device={props.device} /> {props.device.name}{' '}
          {props.device.deviceGroup}
        </Typography>
        <Paper>
          <GetDeviceDisplay device={props.device} />
        </Paper>
      </Paper>
    </>
  );
}
