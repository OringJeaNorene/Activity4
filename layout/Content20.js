import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';


export default function Content20() {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  return (
    <View style={styles.container}>
     <View style={styles.screen}>
    <Appbar.Header>
       <Appbar.Content title="Google Keep Notes" subtitle={'Subtitle'} />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
    </View>
    </View>   
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
      },
      screen:{
        marginTop:20,
      }
  });