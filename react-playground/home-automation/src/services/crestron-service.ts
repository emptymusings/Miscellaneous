import { getCrestronApiUrl } from './api-hosts';
import { Device, DeviceDetails, Room } from '../crestron/crestron-interfaces';

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
          return Promise.reject(Error);
        }
      }
    })
    .catch((error) => {
      alert(error);
      return Promise.reject(error);
    });
}

export function getDeviceDetails(
  deviceName: string
): Promise<DeviceDetails | undefined> {
  return fetch(`${crestronUrl}/Processor/Device?deviceNameOrType=${deviceName}`)
    .then((response) => {
      if (response.status === 200) {
        const data = response.json();

        if (data) {
          const device = data as unknown as DeviceDetails;
          console.log(device); // eslint-disable-line no-console
          return device;
        } else {
          return Promise.reject(Error);
        }
      }
    })
    .catch((error) => {
      alert(error);
      return Promise.reject(error);
    });
}

export function sendCommand(
  deviceName: string,
  command: string,
  msToWaitForResponse = 100
): Promise<DeviceDetails | undefined> {
  return fetch(
    `${crestronUrl}/Processor/Device/Command?deviceName=${deviceName}&command=${command}&msToWaitForResponse=${msToWaitForResponse}`,
    { method: 'POST' }
  )
    .then((response) => {
      if (response.status === 200) {
        const data = response.json();

        if (data) {
          return data as unknown as DeviceDetails;
        } else {
          return Promise.reject(Error);
        }
      }
    })
    .catch((error) => {
      alert(error);
      return Promise.reject(error);
    });
}
