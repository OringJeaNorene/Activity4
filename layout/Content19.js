import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";

export default function Content19() {
  return (
    <View style={styles.container}>
      <TouchableRipple style={styles.container}
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.txtlbl}>Press Anywhere</Text>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  txtlbl:{
    color: '#34495e',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '100%'
  }
});
