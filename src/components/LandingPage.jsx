import { StyleSheet, View } from 'react-native';
import theme from '../styles/theme';
import { GET_ALL_STATIONS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import StationPicker from './StationPicker';
import { useState, useEffect } from 'react';
import Station from './Station';
import Text from '../styles/Text';
import { Route, Routes, Navigate } from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        flex: theme.container.flex,
        backgroundColor: theme.container.backgroundColor,
        alignItems: theme.container.alignItems,
        justifyContent: theme.container.justifyContent,
    },
    loading: {
      flex: theme.loading.flex,
      backgroundColor: theme.loading.backgroundColor,
      alignItems: theme.loading.alignItems,
      justifyContent: theme.loading.justifyContent
    }
})


const LandingPage = () => {
    const [ station, setStation ] = useState("529")

    const allStations = useQuery(GET_ALL_STATIONS)

    if(allStations.loading){
        return <View style={styles.loading}><Text>...loading stations</Text></View>
    }


    const handleSelect = (value) => 
        useEffect(() => {
            setStation(value)
    })



  return (
    <View style={styles.container}>
        <Routes>
            <Route path='/station' element={
                <View>
                    <StationPicker handleSelect={handleSelect} />
                    <Station stop={station} />
                </View>
                } exact />
            <Route path='/terve' element={<Text fontSize='heading' >Welcome</Text>} />
        </Routes>
    </View>
  );
}

export default LandingPage; 
