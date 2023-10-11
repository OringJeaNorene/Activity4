import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

export default function Content5() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.txtlbl}>Red</Text>
        <Divider />
        <Text style={styles.txtlbl}>Mango</Text>
        <Divider />
        <Text style={styles.txtlbl}>Red</Text>
        <Divider />
        <Text style={styles.txtlbl}>Gray</Text>
        <Divider />
        <Text style={styles.txtlbl}>Black</Text>
        <Divider />
        <Text style={styles.txtlbl}>White</Text>
        <Divider />
        <Text style={styles.txtlbl}>Green</Text>
        <Divider />
        <Text style={styles.txtlbl}>Blue</Text>
        <Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingTop: 10,
  },

  container1: {
    gap: 20,
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: "#95a5a6",
  },
  txtlbl: {
    fontSize: 15,
    paddingLeft: 20,
    fontWeight: 'bold'
  },
});
