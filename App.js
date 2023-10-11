import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { PaperProvider, Provider } from "react-native-paper";
import Home from './layout/Home';
import Content from './layout/Content';
import Content1 from './layout/Content1';
import Content2 from './layout/Content2';
import Content3 from './layout/Content3';
import Content4 from './layout/Content4';
import Content5 from './layout/Content5';
import Content6 from './layout/Content6';
import Content7 from './layout/Content7';
import Content8 from './layout/Content8';
import Content9 from './layout/Content9';
import Content10 from './layout/Content10';
import Content11 from './layout/Content11';
import Content12 from './layout/Content12';
import Content13 from './layout/Content13';
import Content14 from './layout/Content14';
import Content15 from './layout/Content15';
import Content16 from './layout/Content16';
import Content17 from './layout/Content17';
import Content18 from './layout/Content18';
import Content19 from './layout/Content19';
import Content20 from './layout/Content20';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Avatar" component={Content} />
    <Stack.Screen name="Badge" component={Content1} />
    <Stack.Screen name="Checkbox" component={Content2} />
    <Stack.Screen name="Chip" component={Content3} />
    <Stack.Screen name="Dialog" component={Content4} />
    <Stack.Screen name="Divider" component={Content5} />
    <Stack.Screen name="HelperText" component={Content6} />
    <Stack.Screen name="IconButton" component={Content7} />
    <Stack.Screen name="List" component={Content8} />
    <Stack.Screen name="Menu" component={Content9} />
    <Stack.Screen name="Modal" component={Content10} />
    <Stack.Screen name="ProgressBar" component={Content11} />
    <Stack.Screen name="RadioButton" component={Content12} />
    <Stack.Screen name="Searchar" component={Content13} />
    <Stack.Screen name="SegmentedButtons" component={Content14} />
    <Stack.Screen name="Snackbar" component={Content15} />
    <Stack.Screen name="Switch" component={Content16} />
    <Stack.Screen name="TextInput" component={Content17} />
    <Stack.Screen name="ToggleButton" component={Content18} />
    <Stack.Screen name="TouchableRipple" component={Content19} />
    <Stack.Screen name="Appbar.Action" component={Content20} />
  </Stack.Navigator>
  </NavigationContainer>
  </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
