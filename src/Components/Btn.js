import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Btn = ({ bgColor, Btnlabel, textColor, Press }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => Press()}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: "Center",
          width: "100%",
          paddingVertical: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {Btnlabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Btn;
