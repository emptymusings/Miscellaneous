import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Device } from '../crestron-interfaces';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import PowerIcon from '@mui/icons-material/Power';
import IconButton from '@mui/material/IconButton';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';

export interface Props {
  device: Device;
}

export default function DeviceButtons(props: Props): JSX.Element {
  const DeviceButtons = (props: Props): JSX.Element => {
    switch (props.device.deviceGroup) {
      default:
        return getDimmerButtons();
    }
  };

  function getDimmerButtons(): JSX.Element {
    const splitProps = props.device.reportedStatus.split(',');
    const levelRaw = splitProps[splitProps.length - 1];
    const levelParsed = levelRaw.split(':');
    const level = +levelParsed[1];
    const levelLimited = ((level / 16384) * 25).toFixed(0);

    return (
      <>
        <Typography variant="h6">{props.device.reportedStatus}</Typography>
        <Grid container item xs={12} sm={12} md={12} alignItems="center">
          <Grid item>
            <IconButton onClick={(): void => alert('power off')}>
              <PowerOffIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Box
              sx={{ width: 300 }}
              style={{ marginLeft: '20px', marginRight: '20px' }}
            >
              <Slider
                defaultValue={+levelLimited}
                valueLabelDisplay="auto"
                step={25}
                max={100}
              />
            </Box>
          </Grid>
          <Grid item>
            <IconButton onClick={(): void => alert('power on')}>
              <PowerIcon />
            </IconButton>
          </Grid>
        </Grid>
      </>
    );
  }
  return (
    <>
      <Grid
        className="crestron-device-buttons"
        container
        item
        xs={12}
        sm={12}
        md={12}
      >
        <DeviceButtons device={props.device} />
      </Grid>
    </>
  );
}
