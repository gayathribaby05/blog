export type FilterOption = {
  label: string;
  value: string;
};

export type SizeFilterOption = FilterOption;
export type EnergyFilterOption = FilterOption;
export type FriendlinessFilterOption = FilterOption;

export const sizeOptions: SizeFilterOption[] = [
  { value: 'all', label: 'All Sizes' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

export const energyOptions: EnergyFilterOption[] = [
  { value: 'all', label: 'All Energy Levels' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'very high', label: 'Very High' },
];

export const friendlinessOptions: FriendlinessFilterOption[] = [
  { value: 'all', label: 'All Friendliness Levels' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'very high', label: 'Very High' },
];