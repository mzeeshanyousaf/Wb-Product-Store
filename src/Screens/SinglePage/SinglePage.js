import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
// import FeatureImage from "./FeatureImage";
import FontAwesome from "@expo/vector-icons/FontAwesome6"
// import HeartIcon from "./HeartIcon";
import { useState } from "react";
// import RatingStar from "./RatingStar";
// import ProductSlider from "./ProductSlider";

const SinglePage = ({route}) => {
  const { itemID } = route.params;

  const megasales = [
    {
      id: 1,
      imageSource: require("../../../assets/image Product4.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: itemID,
      discountedPrice: "$534,33",
      discount: "24% Off",
      color:["red","green"]
    },
  
  ];

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizePress = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };
  const handleColorPress = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const renderSizeButton = (size) => {
    return (
      <ScrollView horizontal={true}>
         <TouchableOpacity
        key={size}
        onPress={() => handleSizePress(size)}
        style={[
          styles.sizeinput,
          selectedSize === size && { borderColor: '#40BFFF' } // Change to your desired color
        ]}
      >
        <Text style={styles.size}>{size}</Text>
      </TouchableOpacity>
      </ScrollView>
     
    );
  };
  const renderColorButton = (color) => {
    return (
      <TouchableOpacity
        key={color}
        onPress={() => handleColorPress(color)}
        style={[
          styles.button,
          selectedColor === color && styles.selectedButton
        ]}
      >
        <View style={[styles.colorOption, { backgroundColor: color }]} />
      </TouchableOpacity>
    );
  };

  // Example array of sizes
  const sizes = ['6', '6.5', '7', '7.5', '8', '8.5', '9'];
  const colors = ['#FFC833', '#FB7181', '#53D1B6', '#40BFFF', 'black', 'grey', 'silver'];

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image source={require('../../../assets/single.png')}/>
     
      </ScrollView>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:10}}>
      <Text style={styles.producttitle}>
      Nike Air Zoom Pegasus 36 {'\n'}Miami
      </Text>
      <TouchableOpacity onPress={handleToggleFavorite}>
        {/* <HeartIcon filled={isFavorite} /> */}
      </TouchableOpacity>
      </View>
      {/* <RatingStar/> */}
      <Text style={styles.price}> {itemID} </Text>
      <Text style={styles.size}>Select Size</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection:'row'}}>
      {sizes.map((size) => renderSizeButton(size))}
    </View>
      </ScrollView>
      <Text style={styles.size}>Select Color</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection:'row'}}> 
          {colors.map((color) => renderColorButton(color))}
    </View>
      </ScrollView>
      <Text style={[styles.size, {marginVertical:20} ]}>Specification</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text>Shown:</Text>
        <Text style={{textAlign:'right'}}>
        Laser{'\n'}Blue/Anthracite/Watermel{'\n'}on/White
        </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
        <Text>Style:</Text>
        <Text style={{textAlign:'right'}}>
        CD0113-400
        </Text>
      </View>
      <Text>The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={styles.category}>Review Product</Text>
        <TouchableOpacity>
          <Text style={[styles.category, styles.colorcategory]}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center', gap:10}}>
       {/* <RatingStar/> */}
        <Text>4.5 (5 Review)</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center', gap:10, marginVertical:20}}>
        <Image source={require('../../../assets/Profile Picture.png')}/>
        <View>
          <Text style={styles.category}>James Lawson</Text>
         {/* <RatingStar/> */}
        </View>
      </View>
      <Text>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</Text>
      <Image source={require('../../../assets/Product review.png')}/>
      <Text style={styles.size}>You Might Also Like</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:15}}>
          {/* {megasales.map((megasale) => (
            <ProductSlider
              key={megasale.id}
              imageSource={megasale.imageSource}
              title={megasale.title}
              titledetail={megasale.titledetail}
              price={megasale.price}
              discountedPrice={megasale.discountedPrice}
              discount={megasale.discount}
            />
          ))} */}
        </ScrollView>
    </View>
  );
};

export default SinglePage;

const styles = StyleSheet.create({
  producttitle:{
    fontSize:20,
    fontWeight:'bold'
  },
  price:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:15,
    color:'#40BFFF'
  },
  size:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:5,
    color:'#000000'
  },
  sizeinput:{
    width:50,
    height:50,
    borderColor:'silver',
    borderRadius:50,
    borderWidth:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 10
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  selectedButton: {
    borderColor: '#40BFFF',
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
  },
  colorcategory: {
    color: "#40BFFF",
  },
});
