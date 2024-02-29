import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Color } from "../Color/Color";

const Input = (props) => {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: "#EBF0FF",
        color: "#9098B1",
        paddingVertical: 10,
        paddingLeft: 40,
        letterSpacing: 2,
        paddingRight: 10,
      }}
      {...props}
      navigatePage={true}
      placeholder="Search Item Hera"
     
      selectTextOnFocus={true}
    />
  );
};

const styles = StyleSheet.create({});

export default Input;
