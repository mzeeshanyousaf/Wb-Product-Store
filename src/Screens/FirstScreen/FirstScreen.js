import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Color } from "../../Color/Color";
import { AntDesign } from "@expo/vector-icons";
const FirstScreen = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "rgb(5, 160, 203)",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(247, 247, 247, 0.7)",
          borderRadius: 20,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 200,
            resizeMode: "contain",
            marginVertical: 30,
          }}
          source={{
            uri: "https://webbuggs.com/wp-content/uploads/2023/07/Group-10213.png",
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginSignPage")}
      >
        <Text style={styles.buttonText}>VISIT</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "",
    backgroundColor: Color.LightBlack,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    fontSize: 17,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    letterSpacing: 2,
  },
});
export default FirstScreen;
