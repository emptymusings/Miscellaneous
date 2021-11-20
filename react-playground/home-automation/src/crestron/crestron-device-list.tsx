import React, { useState, useEffect } from 'react';
import { getRooms } from '../services/crestron-service';
import { Room } from './crestron-interfaces';
//import CrestronDevice from './crestron-device';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CrestronRoom from './crestron-room';

export default function CrestronDeviceList(): JSX.Element {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [sortedRooms, setSortedRooms] = useState<Room[]>([]);

  function getRoomsFromService(): void {
    getRooms().then((rooms: Room[] | undefined) => {
      if (rooms) {
        setInitialized(true);
        const roomList = rooms as Room[];
        setRooms(roomList);
      }
    });
  }

  function displayNames(): JSX.Element {
    if (rooms.length === 0) {
      return <></>;
    }

    return (
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        {sortedRooms.map((room: Room) => (
          <Grid container key={room.name} item>
            <CrestronRoom room={room} />
          </Grid>
        ))}
      </Grid>
    );
  }

  useEffect(() => {
    if (!initialized) {
      getRoomsFromService();
    }
  });

  useEffect(() => {
    const sorted = rooms.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name + b.name < a.name + b.name) {
        return 1;
      }
      return 0;
    });

    setSortedRooms(sorted);
  }, [rooms]);

  return (
    <>
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h3">Rooms</Typography>
        {displayNames()}
      </Grid>
    </>
  );
}
