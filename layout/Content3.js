import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

export default function Content3() {
  return (
    <View>
      <View style={styles.screen}>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Information
        </Chip>
        <Chip icon="alert" onPress={() => console.log("Pressed")}>
          Alert
        </Chip>
        <Chip icon="account" onPress={() => console.log("Pressed")}>
            Account
          </Chip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#95a5a6",
    padding: 10,
    elevation: 3,
    borderRadius: 10,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
