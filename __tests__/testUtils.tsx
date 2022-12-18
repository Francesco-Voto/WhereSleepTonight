import {ReactElement} from 'react';
import {render} from '@testing-library/react-native';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import queryClient from '@wst/services/queryClient';
import theme, {ThemeProvider} from '@wst/theme';

export function renderWrapper(component: ReactElement) {
  return render(component, {
    wrapper: ({children}) => (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    ),
  });
}
