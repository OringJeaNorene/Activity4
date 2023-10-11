import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Dialog, Portal, Button } from "react-native-paper";

export default function Content4() {
  const [visible, showVisible] = React.useState(false);
  const showDialog = () => showVisible(true);
  const hideDialog = () => showVisible(false);

  return (
    <View style={styles.container}>
      <Button title="Click here" mode="contained-tonal" onPress={showDialog}>
        Show Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Lorem Ipsum</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      paddingTop:10,
      justifyContent:'center',
      alignSelf:'center'
    },
  });
