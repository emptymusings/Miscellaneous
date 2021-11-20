import React from 'react';
import { Device } from './crestron-interfaces';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export interface Props {
  device: Device;
}

export default function CrestronDevice(props: Props): JSX.Element {
  return (
    <>
      <Paper className="tiled-paper" elevation={3}>
        <Typography variant="h6">
          {props.device.name} {props.device.deviceGroup}
        </Typography>
      </Paper>
    </>
  );
}
