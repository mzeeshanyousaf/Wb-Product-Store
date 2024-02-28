import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import Header from "../../Components/Header";
import ExployreCard from "../../Components/ExployreCard";

const Exployre = ({ navigation }) => {

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <Button title="SearchPage" />
        <TouchableOpacity onPress={() => navigation.navigate("SearchEx")}>
          <Header />
        </TouchableOpacity>
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
              <ExployreCard title={"Man Shirt"} />
              <ExployreCard title={"Man Work \n Equipment"} />
              <ExployreCard title={"Man T-Shirt"} />
              <ExployreCard title={"Man Shoes"} />
              <ExployreCard title={"Man Underwear"} />
              <ExployreCard title={"Man Pants dafadfasf"} />
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
              <ExployreCard title={"Man Shirt"} />
              <ExployreCard title={"Man Work Equipment"} />
              <ExployreCard title={"Man T-Shirt"} />
              <ExployreCard title={"Man Shoes"} />
              <ExployreCard title={"Man Underwear"} />
              <ExployreCard title={"Man Pants dafadfasf"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
