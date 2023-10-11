import { View, Text, Button, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.btn}>
      <Button title='Appbar'  color='#FF3333' onPress={() => navigation.navigate('Appbar.Action')}> </Button> 
      <Button title='Avatar' color='#FF7A33' onPress={() => navigation.navigate('Avatar')}> </Button>
      <Button title='Badge' color='#FFAC33' onPress={() => navigation.navigate('Badge')}> </Button>
      <Button title='Checkbox' color='#44bd32' onPress={() => navigation.navigate('Checkbox')}> </Button>
      <Button title='Chip' color='#B5FF33' onPress={() => navigation.navigate('Chip')}> </Button>
      <Button title='Dialog' color='#6EFF33' onPress={() => navigation.navigate('Dialog')}> </Button>
      <Button title='Divider' color='#33FF5B' onPress={() => navigation.navigate('Divider')}> </Button>
      <Button title='Icon Button' color='#33FFBB' onPress={() => navigation.navigate('IconButton')}> </Button>
      <Button title='List' color='#339CFF' onPress={() => navigation.navigate('List')}> </Button>
      <Button title='Menu' color='#3383FF' onPress={() => navigation.navigate('Menu')}> </Button>
      <Button title='Modal' color='#334CFF' onPress={() => navigation.navigate('Modal')}> </Button>
      <Button title='Progress Bar' color='#5233FF' onPress={() => navigation.navigate('ProgressBar')}> </Button>
      <Button title='Radio Button' color='#8333FF' onPress={() => navigation.navigate('RadioButton')}> </Button>
      <Button title='Segmented Buttons' color='#B233FF' onPress={() => navigation.navigate('SegmentedButtons')}> </Button>
      <Button title='Snack bar' color='#F033FF' onPress={() => navigation.navigate('Snackbar')}> </Button>
      <Button title='Switch' color='#FF33F6' onPress={() => navigation.navigate('Switch')}> </Button>
      <Button title='TextInput' color='#FF33A8' onPress={() => navigation.navigate('TextInput')}> </Button>
      <Button title='ToggleButton' color='#FF337A' onPress={() => navigation.navigate('ToggleButton')}> </Button>
      <Button title='TouchableRipple' color='#FF334C' onPress={() => navigation.navigate('TouchableRipple')}> </Button>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
      },
    btn: {
      gap: 15,
    },
  });