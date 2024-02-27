import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView, ScrollView, Image } from "react-native";
import { useQuery, gql } from "@apollo/client";
import Card from "../../Components/Card";
import Offer from "../../Components/Offer";
import Category from "../../Components/Category";

// Query
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
    <SafeAreaView style={{ flex: 1, paddingVertical: 40, paddingHorizontal: 20 }}>
      <Text style={{ color: "black", fontSize: 33 }}>{"Welcome to WB Store"}</Text>
      <Text style={{ color: "black", fontSize: 28 }}>Products</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Offer
          imagePath={require("../../../assets/Promotion Image.png")}
          saleTitle="Mega Sale"
          saleValue="50% Flat Sale"
          hour="12"
          minute="52"
          seconds="16"
        />
        <Offer
          imagePath={require("../../../assets/Promotion Image.png")}
          saleTitle="Mega Sale"
          saleValue="80% Flat Sale"
          hour="6"
          minute="52"
          seconds="16"
        />
      </ScrollView>
      <FlatList
        data={data.products.nodes}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
