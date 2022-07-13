import 'react-native-gesture-handler';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Config from 'react-native-config';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTabs from './src/navigation/BottomTabs';
import { CustomLightTheme } from './src/navigation/NavigationTheme';

const client = new ApolloClient({
  uri: Config.GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${Config.GRAPHCMS_TOKEN}`,
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={CustomLightTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomTabs />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </ApolloProvider>
  );
}
