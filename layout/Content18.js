import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ToggleButton } from 'react-native-paper';

export default function Content18() {
    const [value, setValue] = React.useState('left');

  return (
    <View style={styles.container}>
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
      <ToggleButton icon="arrow-left" value="left" />
      <ToggleButton icon="arrow-right" value="right" />
    </ToggleButton.Row>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
  });