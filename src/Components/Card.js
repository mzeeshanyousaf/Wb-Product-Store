import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      {/* <Image
        style={styles.image}
        source={{ uri: item.image.sourceUrl }}
        resizeMode="contain"
      />
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Type: {item.onSale}</Text>
      <Text style={styles.text}>Price: {item.price}</Text>
      <Text style={styles.text}>RegularPrice: {item.regularPrice}</Text>
      <Text style={styles.text}>ReviewCount: {item.reviewCount}</Text> */}
      <TouchableOpacity>
    <View style={styles.cardbox}>
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Image source={{ uri: item.image.sourceUrl }} style={styles.image} />
      </View>
    
      <Text style={styles.cardtext} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.cardtext2}>{item.price}</Text>
      <Text style={styles.cardtext3}>
      {item.regularPrice}{'       '}
      {item.reviewCount}
      </Text>
    </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardbox:{
    width:140,
    padding:10,
    borderWidth:1,
    borderColor:'silver',
    borderRadius:10,
    display:'flex',
    gap:10,
    marginRight:20
},
image:{
    width:100,
    height:100,
    objectFit:'contain'
},

cardtext:{
    fontWeight:'bold'
},
cardtext2:{
    fontWeight:'bold',
    color:'#40BFFF'
},
cardtext3:{
    color:'#000000',
    fontWeight:'bold',
    fontSize:12
},
cardtext4:{
    color:'#FB7181'
}
});

export default Card;
