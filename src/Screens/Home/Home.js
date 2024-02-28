import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useQuery, gql } from '@apollo/client';
import Card from "../../Components/Card";

//query
const GET_PRODUCTS = gql`
query getproducts {
  products {
    nodes {
      id
      slug
      name
      image {
        id
        sourceUrl
        altText
      }
      ... on SimpleProduct {
        onSale
        price
        regularPrice
      }
      ... on VariableProduct {
        onSale
        price
        regularPrice
      }
      reviewCount
      reviewsAllowed
    }
    found
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ alignItems: "center", padding: 20 }}>
      <Text style={{ color: "black", fontSize: 33 }}>{"Welcome to WB Store"}</Text>
      <Text style={{ color: "black", fontSize: 28 }}>Products</Text>
      <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
        data={data.products.nodes}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});


export default Home;
