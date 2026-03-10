export interface Device {
  id: string;
  name: string;
  category: string;
  status: 'on' | 'off';
}

export const MOCK_DEVICES: Device[] = [
  { id: '1', name: 'Smart Light Bulb (Living Room)', category: 'light', status: 'off' },
  { id: '2', name: 'Smart Light Bulb (Bedroom)', category: 'light', status: 'on' },
  { id: '3', name: 'Air Purifier', category: 'appliance', status: 'off' },
  { id: '4', name: 'Smart Lock', category: 'security', status: 'on' },
  { id: '5', name: 'Security Camera', category: 'security', status: 'on' },
  { id: '6', name: 'Smart Thermostat', category: 'appliance', status: 'on' },
];
