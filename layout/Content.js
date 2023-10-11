import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

export default function Content() {
  return (
    <View style={styles.container}>
        <Avatar.Icon size={100} icon="folder" />
        <Avatar.Image size={100} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Bohol_Island_State_University.png'}} />
        <Avatar.Text size={100} label="BISU" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      gap: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
  });