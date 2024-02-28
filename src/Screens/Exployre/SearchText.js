import React from "react";
import { View, StyleSheet, Text } from "react-native";
function SearchText({ SearchVal, index }) {
  return (
    <View
      key={index}
      style={{
        height: 54,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#9098B1",
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: 0.5,
        }}
      >
        {SearchVal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchText;
