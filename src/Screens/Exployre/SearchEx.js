import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";

import ProductSlider from "../../Components/ProductSlider";
// add data from data Folder
import { SearchData } from "../../Data/User";

import SearchText from "./SearchText";
const SearchEx = ({navigation}) => {
  //  const searchData = [
  //   "Nike Air Max 270 React ENG",
  //   "Nike Air Vapormax 360",
  //   "Nike Air Max 270 React ENG",
  //   "Nike Air Max 270 React",
  //   "Nike Air VaporMax Flyknit 3",
  //   "Nike Air Max 97 Utility",
  //   "hasdhlksahdlh",
  //   "Adidas Ultraboost 21",
  //   "Adidas NMD R1",
  //   "Adidas Superstar",
  //   "Puma RS-X",
  //   "Puma Suede Classic",
  //   "New Balance 574",
  //   "New Balance 990v5",
  //   "Under Armour HOVR Phantom 2",
  //   // Additional data
  //   "Reebok Classic Leather",
  //   "Reebok Nano X",
  //   "Converse Chuck Taylor All Star",
  //   "Converse One Star",
  //   "Vans Old Skool",
  //   "Vans Sk8-Hi",
  //   "Asics Gel-Kayano 27",
  //   "Asics Gel-Nimbus 23",
  //   "Saucony Jazz Original",
  //   "Brooks Ghost 13",
  // ];
  
  const [SearchVal, setSearchVal] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // FiltrationFunction
  const searchFilterFunction = (text) => {
    const newData = SearchData.filter((item) => {
      const itemData = item.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    console.log(newData);
    setFilteredItems(newData);
    setSearchVal(text);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "white",
      }}
    >
      <SafeAreaView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text>Search SearchEx</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "blue",
              width: "80%",
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
            placeholder="Search Item Hera"
            value={SearchVal}
            onChangeText={(text) => searchFilterFunction(text)}
          />
          <Button title="X" onPress={()=> navigation.navigate("Home")}/>
          </View>

        </View>
        <View>
          {filteredItems.map((item, index) => (
            <SearchText index={index} SearchVal={item} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchEx;
