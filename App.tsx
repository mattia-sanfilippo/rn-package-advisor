import 'react-native-gesture-handler';

import { QueryClientProvider } from '@tanstack/react-query';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { queryClient } from 'utils/queryClient';

import RootStack from './navigation';

export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <QueryClientProvider client={queryClient}>
        <RootStack />
      </QueryClientProvider>
    </PaperProvider>
  );
}
