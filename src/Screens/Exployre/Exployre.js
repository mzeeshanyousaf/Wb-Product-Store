import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import Header from "../../Components/Header";
import ExployreCard from "../../Components/ExployreCard";
import { useQuery, gql } from "@apollo/client";
// Query
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
const Exployre = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading)
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
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("SearchEx")}>
        <Header />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.Grid}>
            <Text style={styles.Heading}>Man Fashion</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                rowGap: 15,
                columnGap: 12,
                marginTop: 20,
              }}
            >
              {data.productCategories.edges.map((edge) => (
                <ExployreCard
                  key={edge.node.id}
                  name={edge.node.name}
                  img={edge.node.image.sourceUrl}
                />
              ))}
            </View>
          </View>

          <View style={(styles.Grid, { marginTop: 40 })}>
            <Text style={styles.Heading}>Woman Fashion</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                rowGap: 15,
                columnGap: 12,
                marginTop: 20,
              }}
            >
              {data.productCategories.edges.map((edge) => (
                <ExployreCard
                  key={edge.node.id}
                  name={edge.node.name}
                  img={edge.node.image.sourceUrl}
                />
              ))}
            </View>
          </View>
          <View style={(styles.Grid, { marginTop: 40 })}>
            <Text style={styles.Heading}>Woman Fashion</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                rowGap: 15,
                columnGap: 12,
                marginTop: 20,
              }}
            >
              {data.productCategories.edges.map((edge) => (
                <ExployreCard
                  key={edge.node.id}
                  name={edge.node.name}
                  img={edge.node.image.sourceUrl}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
  Grid: {
    flex: 1,
  },
  Heading: {
    color: "#223263",
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
});

export default Exployre;
