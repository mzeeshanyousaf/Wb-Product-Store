import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Filed = (props) => {
  return (
    <View>
      <TextInput
        {...props}
        style={{
          borderRadius: 100,
          color: "grey",
          width: 250,
          backgroundColor: " rgb(220,220,220)",
          marginVertical: 10,
          padding: 10,
        }}
        placeholderTextColor={"grey"}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Filed;
