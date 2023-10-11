import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';


export default function Content12() {
    const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Choose Gender:</Text>
        <View style={styles.inside}>
         <Text style={styles.txtlbl}>Male</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={styles.txtlbl}>Female</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      },

      title:{
        paddingLeft: 140,
        fontSize: 20,
        marginTop:20

      },

      txtlbl:{
        fontSize: 20,
        marginTop: 5,
      }, 

      inside:{
        padding:8,
        borderRadius:10,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#bdc3c7'
      }
  });