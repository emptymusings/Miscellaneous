import { getCrestronApiUrl } from './api-hosts';
import { Device, Room } from '../crestron/crestron-interfaces';

const crestronUrl = getCrestronApiUrl();

export function getRooms(): Promise<Room[] | undefined> {
  return fetch(crestronUrl + '/Rooms')
    .then((response) => {
      if (response.status === 200) {
        const data = response.json();

        if (data) {
          return data as unknown as Room[];
        } else {
          return Promise.reject();
        }
      }
    })
    .catch((error) => {
      alert(error);
      return Promise.reject();
    });
}
export function getDevices(): Promise<Device[] | undefined> {
  return fetch(crestronUrl + '/Processor/Device')
    .then((response) => {
      if (response.status === 200) {
        const data = response.json();

        if (data) {
          return data as unknown as Device[];
        } else {
          return Promise.reject();
        }
      }
    })
    .catch((error) => {
      alert(error);
      return Promise.reject();
    });
}
