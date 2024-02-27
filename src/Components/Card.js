import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
    <View style={styles.cardbox}>
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Image source={{ uri: item.image.sourceUrl }} style={styles.image} />
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.cardtSalePrice}>{item.price}</Text>
      <Text style={styles.cardRegular}>
      {item.regularPrice}</Text>
      <Text style={styles.cardReview}> {item.reviewCount}</Text>
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

cardTitle:{

    fontWeight:'bold'
},
cardtSalePrice:{

    fontWeight:'bold',
    color:'#40BFFF',
   

},
cardRegular:{

    color:'#000000',
    fontWeight:'bold',
    fontSize:12
},
cardReview:{

    color:'#FB7181'
}
});

export default Card;