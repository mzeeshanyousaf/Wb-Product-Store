import React from "react";
import { View, StyleSheet, Text, FlatList , Image ,ScrollView} from "react-native";
import { useQuery, gql } from '@apollo/client';
import Card from "../../Components/Card";
import Offer from "../../Components/Offer";
import Category from "../../Components/Category";
//query
const GET_PRODUCTS = gql`
query getproducts {
  products {
    nodes {
      id
      databaseId
      slug
      name
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
      image {
        altText
        sourceUrl
        comments {
          edges {
            node {
              content(format: RAW)
            }
          }
        }
      }
      shortDescription
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

    <View style={{ alignItems: "center", paddingRight: 20, paddingLeft: 20 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <Offer
      imagePath={require('../../../assets/Promotion Image.png')}
      saleTitle="Mega Sale"
      saleValue="50% Flat Sale"
      hour="12"
      minute="52"
      seconds="16"
      />
      <Offer
      imagePath={require('../../../assets/Promotion Image.png')}
      saleTitle="Mega Sale"
      saleValue="80% Flat Sale"
      hour="6"
      minute="52"
      seconds="16"
      />
        </ScrollView>
      
      <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
        data={data.products.nodes}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
       {/* <Category/> */}
    </View>
  );
};

const styles = StyleSheet.create({});


export default Home;
