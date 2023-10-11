import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper';

export default function Content16() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.btn}>
        <Text style={styles.txt}>On</Text>
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    <Text style={styles.txt}>Off</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
      gap:10,
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: 100,
      marginRight: 100,
      backgroundColor: '#95a5a6',
      borderRadius:80,
    },
     txt:{
        fontSize: 20,
        marginTop: 12,
     }

  });