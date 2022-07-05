import { useState } from 'react';
import { Text, StyleSheet, View, Pressable, Alert, Button, TextInput} from 'react-native';
import Station from './Station';
import theme from '../styles/theme';

const styles = StyleSheet.create({
    container: {
        flex: theme.container.flex,
        backgroundColor: theme.container.backgroundColor,
        alignItems: theme.container.alignItems,
        justifyContent: theme.container.justifyContent,
    }
})
    const btn= () => {
        return (<Button title="Search" 
            onPress={() => Alert.alert('You pressed button')}
            color="red" />)
    }
const UpdateButton = () => {
    const [ fieldValue, setFieldValue ] = useState("529")


    return(
        <View style={styles.container}>
            <Station stop={fieldValue} />
            <TextInput
            placeholder='Location'
            onSubmitEditing={text => setFieldValue(text.nativeEvent.text)}
            >
            </TextInput>
        </View>

    )
}

export default UpdateButton