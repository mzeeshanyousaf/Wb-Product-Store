import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: item.image.sourceUrl }}
        resizeMode="contain"
      />
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Type: {item.onSale}</Text>
      <Text style={styles.text}>Price: {item.price}</Text>
      <Text style={styles.text}>RegularPrice: {item.regularPrice}</Text>
      <Text style={styles.text}>ReviewCount: {item.reviewCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 30,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "contain",
    marginVertical: 30,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

export default Card;
