import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { SegmentedButtons } from "react-native-paper";

export default function Content14() {
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              icon:"home",
              value: "walk",
              label: "House",
            },
            {
              icon:"hospital",
              value: "train",
              label: "Hospital",
            },
            { 
                icon:"school",
                value: "drive", 
              label: "School" },
          ]}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value1}
        onValueChange={setValue1}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 10,
   padding: 10,
  },
});
