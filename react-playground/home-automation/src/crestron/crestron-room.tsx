import React from 'react';
import CrestronDevice from './crestron-device';
import { Room, Device } from './crestron-interfaces';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
export interface Props {
  room: Room;
}

export default function CrestronRoom(props: Props): JSX.Element {
  function displayDevices(): JSX.Element {
    const sortedDevices = props.room.devices.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name < a.name) {
        return 1;
      }
      return 0;
    });

    return (
      <Grid container item>
        {sortedDevices.map((device: Device) => (
          <Grid
            container
            item
            key={device.name}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <CrestronDevice device={device} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Typography variant="h5">{props.room.name}</Typography>
      {displayDevices()}
    </>
  );
}
