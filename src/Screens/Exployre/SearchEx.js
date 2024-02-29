import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import ProductSlider from "../../Components/ProductSlider";
// add data from data Folder
import { SearchData } from "../../Data/User";
import SearchText from "./SearchText";
import Header from "../../Components/Header";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Color } from "../../Color/Color";
const SearchEx = ({ navigation }) => {
  const [SearchVal, setSearchVal] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // FiltrationFunction
  const searchFilterFunction = (text) => {
    setSearchVal(text);
    if (text != "") {
      const newData = SearchData.filter((item) => {
        const itemData = item.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredItems(newData);
      setSearchVal(text);
    } else {
      setFilteredItems([]);
    }
  };
  const updateData = () => {
    setSearchVal("");
    setFilteredItems([]);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 40,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderColor: "#EBF0FF",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 7, position: "relative" }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: Color.Blue,
              color: "#9098B1",
              paddingVertical: 10,
              paddingLeft: 40,
              letterSpacing: 2,
              paddingRight: 10,
              fontWeight: "900",
              borderRadius: 5,
            }}
            autoFocus={true}
            placeholder="Search Product"
            editable={true}
            selectTextOnFocus={true}
            value={SearchVal}
            onChangeText={(text) => searchFilterFunction(text)}
          />

          <TouchableOpacity
            style={{
              position: "absolute",
              top: "0%",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              right: "5%",
              display: SearchVal == "" ? "none" : "block",
              height: "100%",
            }}
            onPress={updateData}
          >
            <AntDesign name="close" size={15} color={"#223263"} />
          </TouchableOpacity>

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
            justifyContent: "flex-end",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <MaterialCommunityIcons
            name="microphone-outline"
            size={25}
            color={"#9098B1"}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        <View>
          {filteredItems.map((item, index) => (
            <SearchText key={index} SearchVal={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SearchEx;
