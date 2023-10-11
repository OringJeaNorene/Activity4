import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconButton, MD3Colors } from "react-native-paper";

export default function Content7() {
  return (
    <View style={styles.screen}>
      <IconButton
        icon="camera"
        mode="contained-tonal"
        iconColor={MD3Colors.error30}
        size={50}
        onPress={() => console.log("Pressed")}
      />
      <IconButton
        icon="pause"
        iconColor={MD3Colors.error30}
        size={50}
        onPress={() => console.log("Pressed")}
      />
      <IconButton
        icon="video"
        mode="outlined"
        iconColor={MD3Colors.error30}
        size={50}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
      },
  });