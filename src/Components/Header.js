import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Color } from "../Color/Color";
import Input from "./Input";
const Header = ({ navigatePage }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 5, position: "relative" }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#EBF0FF",
            color: "#9098B1",
            paddingVertical: 10,
            paddingLeft: 40,
            letterSpacing: 2,
            paddingRight: 10,
            borderRadius: 5,
          }}
          placeholder="Search Product"
          editable={navigatePage == true ? true : false}
          selectTextOnFocus={navigatePage == true ? true : false}
        />
        <View
          style={{
            position: "absolute",
            top: "30%",
            left: "5%",
          }}
        >
          <Ionicons name="search-outline" size={20} color={Color.Blue} />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <AntDesign name="hearto" size={20} color={"#9098B1"} />
        <SimpleLineIcons name="bell" size={20} color={"#9098B1"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
