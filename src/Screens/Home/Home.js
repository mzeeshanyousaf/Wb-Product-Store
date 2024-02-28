import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
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

const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1, paddingVertical: 0, paddingHorizontal: 20 }}
      >
        <View style={{ flex: 1 }}>
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
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <Text style={styles.category}>Flash Sale</Text>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Text style={[styles.category, styles.colorcategory]}>
                See More
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              horizontal={true}
              data={data.products.nodes}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <Text style={styles.category}>Mega Sale</Text>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Text style={[styles.category, styles.colorcategory]}>
                See More
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              horizontal={true}
              data={data.products.nodes}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
        <View style={{position:'relative'}}>
        <Image
          source={require("../../../assets/image 51.png")}
        />
        <View style={{ position: "absolute", top: 40, padding: 10 }}>
          <Text style={styles.promotion}>Recomended {"\n"}Product</Text>
          <Text style={styles.promotiontext}>
            We recommend the best for you
          </Text>
        </View>
        </View>
       
        <View style={styles.slider}>
          <View style={styles.containercard}>
            <FlatList
              data={data.products.nodes} numColumns={2}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item, index) => item}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Home;
