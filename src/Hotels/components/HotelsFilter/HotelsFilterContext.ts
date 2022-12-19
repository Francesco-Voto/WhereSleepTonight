import {createContext, useContext} from 'react';

export const FilterType = {
  Name: 'Name',
  Stars: 'Stars',
  Price: 'Price',
} as const;

export type FilterType = typeof FilterType[keyof typeof FilterType];

export type FilterDirection = 'up' | 'down';

export type Option = {type: FilterType; direction: FilterDirection};

export type HotelsFilterContext = {
  currentValue?: Option;
  onChange: (newValue: Option) => void;
};

export const HotelsFilterContext = createContext(undefined);

export function useFilterContext() {
  const context = useContext<HotelsFilterContext>(HotelsFilterContext as any);
  if (!context) {
    throw new Error(
      'HotelsFilterContext compound components cannot be rendered outside the Select component',
    );
  }
  return context;
}
