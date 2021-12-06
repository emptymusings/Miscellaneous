import { Grid } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import { Device, DeviceCommand, DeviceDetails } from '../crestron-interfaces';
import Brightness1 from '@mui/icons-material/Brightness1';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness5Icon from '@mui/icons-material/Brightness5';
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

  const prefix = `${props.device.deviceGroup}${props.device.name}`;

  const setSliderFromValueCallback = useCallback(
    (level: number): void => {
      const val = +((level / 16384) * 25).toFixed(0);

      if (isNaN(val)) {
        return;
      }

      if (sliderValue !== val) {
        setSliderValue(+((level / 16384) * 25).toFixed(0));
      }
    },
    [sliderValue]
  );

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
    if (!device) {
      return;
    }

    const commandIndex = device.commands
      .map(function (cmd: DeviceCommand) {
        return cmd.text;
      })
      .indexOf(`${prefix}Off`);

    sendCommandToDevice(commandIndex);
    setSliderValue(0);
  };

  const handlePowerOnClick = (): void => {
    if (!device) {
      return;
    }

    const commandIndex = device.commands
      .map(function (cmd: DeviceCommand) {
        return cmd.text;
      })
      .indexOf(`${prefix}On`);

    sendCommandToDevice(commandIndex);
    setSliderValue(100);
  };

  const handleTwentyFiveClick = (): void => {
    if (!device) {
      return;
    }

    const commandIndex = device.commands
      .map(function (cmd: DeviceCommand) {
        return cmd.text;
      })
      .indexOf(`${prefix}25`);

    sendCommandToDevice(commandIndex);
    setSliderValue(25);
  };

  const handleFiftyClick = (): void => {
    if (!device) {
      return;
    }

    const commandIndex = device.commands
      .map(function (cmd: DeviceCommand) {
        return cmd.text;
      })
      .indexOf(`${prefix}50`);

    sendCommandToDevice(commandIndex);
    setSliderValue(50);
  };

  const handleSeventyFiveClick = (): void => {
    if (!device) {
      return;
    }

    const commandIndex = device.commands
      .map(function (cmd: DeviceCommand) {
        return cmd.text;
      })
      .indexOf(`${prefix}75`);

    sendCommandToDevice(commandIndex);
    setSliderValue(75);
  };

  const sendCommandToDevice = (commandIndex: number): void => {
    if (!device) {
      return;
    }

    sendCommand(device.name, device.commands[commandIndex].text);
  };

  const PowerOffButton = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handlePowerOffClick}>
          <Brightness1 />
        </IconButton>
      </>
    );
  };

  const PowerOnButton = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handlePowerOnClick}>
          <Brightness7Icon />
        </IconButton>
      </>
    );
  };

  const Power25Button = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handleTwentyFiveClick}>
          <Brightness2Icon />
        </IconButton>
      </>
    );
  };

  const Power50Button = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handleFiftyClick}>
          <Brightness6Icon />
        </IconButton>
      </>
    );
  };

  const Power75Button = (): JSX.Element => {
    return (
      <>
        <IconButton onClick={handleSeventyFiveClick}>
          <Brightness5Icon />
        </IconButton>
      </>
    );
  };

  function getDimmerButtons(): JSX.Element {
    return (
      <>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          alignItems="center"
          justifyItems="center"
        >
          <Grid
            item
            alignItems="center"
            justifyItems="center"
            xs={12}
            sm={12}
            md={12}
          >
            <Box sx={{ width: 300 }} style={{ margin: 'auto' }}>
              <Slider
                value={sliderValue}
                valueLabelDisplay="auto"
                step={25}
                max={100}
                disabled={true}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <PowerOffButton />
          </Grid>
          <Grid item>
            <Power25Button />
          </Grid>
          <Grid item>
            <Power50Button />
          </Grid>
          <Grid item>
            <Power75Button />
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
      setSliderFromValueCallback(device.level);
    }
  }, [device, sliderValue, setSliderFromValueCallback]);

  useEffect(() => {
    setInterval(() => {
      getDeviceDetails(props.device.name).then(
        (result: DeviceDetails | undefined) => {
          if (result) {
            if (!overrideNextRefresh) {
              setSliderFromValueCallback(result.level);
            }
          }

          setOverrideNextRefresh(false);
        }
      );
    }, 5000);
  }, [overrideNextRefresh, props, setSliderFromValueCallback]);

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
