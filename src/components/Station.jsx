import { StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client'
import { GET_STATION, GET_ALL_STATIONS } from '../../graphql/queries';
import theme from '../styles/theme';
import { useEffect } from 'react';
import Text from '../styles/Text';


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
    },
    flexContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    }
})

// stop is station id of location
const Station = ({stop}) => {
   // const [ stop, setStop ] = useState('529')

  const result =  useQuery(GET_STATION,{ 
               variables: { stop }
               })
    

  if(result.loading){
    return <View style={styles.loading}></View>
  }

  if(result.error){
    return <Text>Oops, something is broken :/</Text>
  }

  if(!result.data.bikeRentalStation){
    return <Text>Oops, stop not found</Text>
  } 
  //console.log(result.data.bikeRentalStation)
  return (
    <View style={styles.flexContainer}>
        <Text>Stop: {result.data.bikeRentalStation.name}</Text>
        <Text>Bikes: {result.data.bikeRentalStation.bikesAvailable}</Text>
        <Text>Spaces: {result.data.bikeRentalStation.spacesAvailable}</Text>
    </View>
  );
}

export default Station; 
