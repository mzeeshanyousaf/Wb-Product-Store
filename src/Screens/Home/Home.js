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
        <View style={{flexDirection:'row', gap:20}}>
        <ExployreCard title={'Men'}/>
        <ExployreCard title={'Women'}/>
        <ExployreCard title={'Both'}/>
        </View>
        <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.category,{marginVertical:10}]}>Men</Text>
        <TouchableOpacity>
          <Text style={[styles.category, styles.colorcategory]}>More</Text>
        </TouchableOpacity>
        
      </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data.products.nodes}
            renderItem={({ item }) =>  ( 
              <TouchableOpacity onPress={()=>{navigation.navigate("SinglePage",{itemID:item.databaseId})}}>
               <Card item={item} />
               </TouchableOpacity>
               )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View>
          {/* <Category /> */}
        </View>
        <View>
        <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.category,{marginVertical:10 }]}>Women</Text>
        <TouchableOpacity>
          <Text style={[styles.category, styles.colorcategory]}>More</Text>
        </TouchableOpacity>
        
      </View>
      <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data.products.nodes}
            renderItem={({ item }) =>  ( 
              <TouchableOpacity onPress={()=>{navigation.navigate("SinglePage",{itemID:item.databaseId})}}>
               <Card item={item} />
               </TouchableOpacity>
               )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        </View>
        <View style={{marginVertical:20}}> 
        <Image
          style={styles.feature}
          source={require("../../../assets/image 51.png")}
        />
        <View style={{ position: "absolute", top: 40, padding: 10 }}>
          <Text style={styles.promotion}>Recomended {"\n"}Product</Text>
          <Text style={styles.promotiontext}> We recommend the best for you</Text>
        </View>
        </View>
        <ScrollView>
  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    {data.products.nodes.map((item, index) => (
      <TouchableOpacity
        key={item.databaseId} // Make sure to provide a unique key for each item
        onPress={() => {
          navigation.navigate("SinglePage", { itemID: item.databaseId });
        }}
        style={{ width: '50%', padding: 5 }} // Adjust the width as needed
      >
        <Card index={index} space={180} item={item} />
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
  feature:{
    width:'100%',
    height:200,
    borderRadius:20,
    
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


