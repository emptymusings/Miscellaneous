export interface DeviceCommand {
  description: string;
  text: string;
}

export interface Device {
  name: string;
  room: string;
  driverType: number;
  deviceGroup: string;
  reportedStatus: string;
  lastRefreshed: Date;
  limitRefreshIntervalSeconds: number;
  commands: DeviceCommand[];
}

export interface Room {
  name: string;
  devices: Device[];
}
