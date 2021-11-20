const host = 'http://nuc.lan:';

export function getIotApiUrl(): string {
  if (host) {
    return host + '5001';
  } else {
    return 'Not found';
  }
}

export function getCrestronApiUrl(): string {
  if (host) {
    return host + '5002/api/v1';
  } else {
    return 'Not found';
  }
}

export function getMPowerApiUrl(): string {
  if (host) {
    return host + '5004';
  } else {
    return 'Not found';
  }
}
