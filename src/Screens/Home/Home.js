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
  ActivityIndicator,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import Card from "../../Components/Card";
import Offer from "../../Components/Offer";
import Category from "../../Components/Category";
import ExployreCard from "../../Components/ExployreCard";

// Query
const GET_PRODUCTS = gql`
  query getproducts {
    products {
      nodes {
        id
        databaseId
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
const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    productCategories {
      edges {
        node {
          id
          image {
            sourceUrl
          }
          name
        }
      }
    }
  }
`;
const Home = ({ navigation }) => {
  const {
    loading: productsLoading,
    error: productsError,
    data: productsData,
  } = useQuery(GET_PRODUCTS);
  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES);

  if (productsLoading || categoriesLoading)
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          alignContent: "center",
          alignContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  if (productsError || categoriesError)
    return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView styles={{}}>
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
          <View
            style={[
              styles.container,
              { flexDirection: "row", gap: 20, flexWrap: "wrap" },
            ]}
          >
            {categoriesData.productCategories.edges.map((edge, index) =>
              index >= 3 ? null : (
                <ExployreCard
                  key={edge.node.id}
                  name={edge.node.name}
                  img={edge.node.image.sourceUrl}
                />
              )
            )}
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[styles.category, { marginVertical: 10 }]}>Men</Text>
          <TouchableOpacity>
            <Text style={[styles.category, styles.colorcategory]}>More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={productsData.products.nodes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SinglePage", {
                    itemID: item.databaseId,
                  });
                }}
              >
                <Card item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
        <View>{/* <Category /> */}</View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.category, { marginVertical: 10 }]}>Women</Text>
            <TouchableOpacity>
              <Text style={[styles.category, styles.colorcategory]}>More</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={productsData.products.nodes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SinglePage", {
                      itemID: item.databaseId,
                    });
                  }}
                >
                  <Card item={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[styles.category, { marginVertical: 10 }]}>Women</Text>
          <TouchableOpacity>
            <Text style={[styles.category, styles.colorcategory]}>More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data.products.nodes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SinglePage", {
                    itemID: item.databaseId,
                  });
                }}
              >
                <Card item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={{ position: "absolute", top: 40, padding: 10 }}>
            <Text style={styles.promotion}>Recomended {"\n"}Product</Text>
            <Text style={styles.promotiontext}>
              We recommend the best for you
            </Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            {productsData.products.nodes.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SinglePage", {
                    itemID: item.databaseId,
                  });
                }}
              >
                <Card key={index} space={180} item={item} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  promotion: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  promotiontext: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "300",
  },
  feature: {
    width: "100%",
    height: 200,
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

export default Home;
