import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Snackbar } from "react-native-paper";

export default function Content15() {
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (

    <View style={styles.screen}>
        <View style={styles.screen1}>
      <Button mode="outlined" onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
          },
        }}>
       Hello World. freewifi4all
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent:'space-between',
    },
    screen1: {
        margin: 10,
        padding: 100,
      },
    
  });
