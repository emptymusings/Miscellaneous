import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Device, DeviceCommand, DeviceDetails } from '../crestron-interfaces';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import PowerIcon from '@mui/icons-material/Power';
import IconButton from '@mui/material/IconButton';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import { getDeviceDetails, sendCommand } from '../../services/crestron-service';

export interface Props {
  device: Device;
}

export default function LightButtons(props: Props): JSX.Element {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [initialized, setInitialized] = useState(false);
  const [device, setDevice] = useState<DeviceDetails>();
  const [overrideNextRefresh, setOverrideNextRefresh] = useState(false);

  const DeviceButtons = (): JSX.Element => {
    if (!device) {
      return <></>;
    }

    switch (device.deviceGroup) {
      default:
        return getDimmerButtons();
    }
  };

  const handlePowerOffClick = (): void => {
    setSliderValue(0);
  };

  const handlePowerOnClick = (): void => {
    setSliderValue(100);
  };

  const handleSliderChanged = (
    event: Event,
    newValue: number | number[]
  ): void => {
    try {
      const level = newValue as number;
      if (level !== sliderValue) {
        setSliderValue(level);
      }
    } catch {}
  };

  useEffect(() => {
    if (initialized && !!device && device.deviceGroup === 'Dimmer') {
      const prefix = `${device.deviceGroup}${device.name}`;
      let commandIndex = -1;

      switch (sliderValue) {
        case 0:
          commandIndex = device.commands
            .map(function (cmd: DeviceCommand) {
              return cmd.text;
            })
            .indexOf(`${prefix}Off`);
          break;
        case 25:
          commandIndex = device.commands
            .map(function (cmd: DeviceCommand) {
              return cmd.text;
            })
            .indexOf(`${prefix}25`);
          break;
        case 50:
          commandIndex = device.commands
            .map(function (cmd: DeviceCommand) {
              return cmd.text;
            })
            .indexOf(`${prefix}50`);
          break;
        case 75:
          commandIndex = device.commands
            .map(function (cmd: DeviceCommand) {
              return cmd.text;
            })
            .indexOf(`${prefix}75`);
          break;
        case 100:
          commandIndex = device.commands
            .map(function (cmd: DeviceCommand) {
              return cmd.text;
            })
            .indexOf(`${prefix}On`);
          break;
        default:
          return;
      }

      const command = device.commands[commandIndex];
      setOverrideNextRefresh(true);
      sendCommand(device.name, command.text);
    }
  }, [sliderValue, device, initialized]);

  const PowerOffButton = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handlePowerOffClick}>
          <PowerOffIcon />
        </IconButton>
      </>
    );
  };

  const PowerOnButton = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handlePowerOnClick}>
          <PowerIcon />
        </IconButton>
      </>
    );
  };

  function getDimmerButtons(): JSX.Element {
    return (
      <>
        <Grid container item xs={12} sm={12} md={12} alignItems="center">
          <Grid item>
            <PowerOffButton />
          </Grid>
          <Grid item>
            <Box
              sx={{ width: 300 }}
              style={{ marginLeft: '20px', marginRight: '20px' }}
            >
              <Slider
                value={sliderValue}
                valueLabelDisplay="auto"
                step={25}
                max={100}
                onChange={handleSliderChanged}
              />
            </Box>
          </Grid>
          <Grid item>
            <PowerOnButton />
          </Grid>
        </Grid>
      </>
    );
  }

  useEffect(() => {
    if (!initialized && !!props.device) {
      getDeviceDetails(props.device.name).then(
        (result: DeviceDetails | undefined) => {
          if (result) {
            setDevice(result as DeviceDetails);
          }
        }
      );

      setInitialized(true);
    }
  }, [props, initialized, device]);

  useEffect(() => {
    if (!!device) {
      const val = +((device.level / 16384) * 25).toFixed(0);

      if (isNaN(val)) {
        return;
      }

      if (sliderValue !== val) {
        setSliderValue(+((device.level / 16384) * 25).toFixed(0));
      }
    }
  }, [device, sliderValue]);

  useEffect(() => {
    setInterval(() => {
      getDeviceDetails(props.device.name).then(
        (result: DeviceDetails | undefined) => {
          if (result) {
            if (!overrideNextRefresh) {
              setDevice(result as DeviceDetails);
            }
          }

          setOverrideNextRefresh(false);
        }
      );
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <DeviceButtons />
      </Grid>
    </>
  );
}
