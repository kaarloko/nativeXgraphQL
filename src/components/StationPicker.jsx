import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native-web';
import { GET_ALL_STATIONS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import theme from '../styles/theme';


  function sortItems(a, b) {
       if (a.label > b.label) return 1
       if (b.label > a.label)return -1

       return 0
    }

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
      stationPicker: {
        padding: theme.stationPicker.padding,
        margin: theme.stationPicker.margin,
        left: theme.stationPicker.left,
        backgroundColor: theme.stationPicker.backgroundColor,
      }
  })
  
const StationPicker = ({handleSelect}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("529");
  const iitems = [];

  const allStations = useQuery(GET_ALL_STATIONS)



    
  allStations.data.bikeRentalStations.map(item => iitems.push({label: item.name, value: item.stationId}))//{label: item.name, value: item.stationId})
  
  useEffect(() => {
    iitems.sort(function(a, b) {
      if (a.label > b.label) return 1
      if (b.label > a.label)return -1

      return 0
    }
    )
  }
  )


  return (
        <DropDownPicker
        style={styles.stationPicker}
        placeholder='Select station'
        open={open}
        value={value}
        items={iitems}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={handleSelect(value)}
        />
  );
}

export default StationPicker