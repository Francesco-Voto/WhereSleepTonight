import {createContext, FC, PropsWithChildren, useContext} from 'react';
import defaultTheme, {type Theme} from './theme';

const ThemeContext = createContext<Theme>(defaultTheme);

interface Props extends PropsWithChildren<{theme: Theme}> {}

export const ThemeProvider: FC<Props> = ({theme, children}) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
