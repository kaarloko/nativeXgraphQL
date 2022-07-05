import {React, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Alert } from 'react-native';
import { useQuery, ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { NativeRouter, Link } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';
import UpdateButton from './src/components/UpdateBtn';
import theme from './src/styles/theme.js';
import LandingPage from './src/components/LandingPage';
import DropDownPicker from 'react-native-dropdown-picker';
import Text from './src/styles/Text';

const styles = StyleSheet.create({
  container: {
      flex: theme.container.flex,
      backgroundColor: theme.container.backgroundColor,
      alignItems: theme.container.alignItems,
      justifyContent: theme.container.justifyContent,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    padding: 40,
    backgroundColor: '#b6c7e3'


  }
})

export default function App() {
  const [ landing, setLanding ] = useState(true)
 
  const client = createApolloClient()
  return (
    <ApolloProvider  client={client} style={styles.textContainer}>
      <NativeRouter>
        <View style={styles.textContainer}>
            <Link  to="/station"><Text>station</Text></Link>
            <Link  to="/terve"><Text>welcome</Text></Link>
        </View>
          {landing ? 
            <LandingPage /> : 
            <View style={styles.container}><Text >takasivu</Text></View>
          }
         </NativeRouter>
    </ApolloProvider>
    
  );
}
