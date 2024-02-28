import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={{ color: "red" }}>Header Click TO NAvigate Search Bar</Text>
      <TextInput style={{ backgroundColor: "red" }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
