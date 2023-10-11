import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export default function Content6() {
  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);
  const hasErrors = () => {
    return !text.includes("@");
  };

  return (
    <View>
      <View>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
    </View>
  );
}
