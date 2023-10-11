import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";

export default function Content2() {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.txtlbl}>Yes</Text>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.txtlbl}>No</Text>
      <Checkbox
        status={checked1 ? "checked" : "unchecked"}
        onPress={() => {
          setChecked1(!checked1);
        }}
      />
      <Text style={styles.txtlbl}>Maybe</Text>
      <Checkbox
        status={checked2 ? "checked" : "unchecked"}
        onPress={() => {
          setChecked2(!checked2);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    backgroundColor: "#95a5a6",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },

  txtlbl: {
    marginTop: 10,
  },
});
