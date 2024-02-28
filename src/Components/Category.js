import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProductSlider from "./../Components/ProductSlider";
import Card from "./Card";
// import SinglePage from "./SinglePage";
const Category = (props) => {
  const products = [
    {
      id: 1,
      imageSource: require("./../../assets/image Product.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: "$299,43",
      discountedPrice: "$534,33",
      discount: "24% Off",
    },
    {
      id: 1,
      imageSource: require("./../../assets/image Product2.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: "$299,43",
      discountedPrice: "$534,33",
      discount: "24% Off",
    },
    {
      id: 1,
      imageSource: require("./../../assets/image Product3.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: "$299,43",
      discountedPrice: "$534,33",
      discount: "24% Off",
    },
  ];
  const megasales = [
    {
      id: 1,
      imageSource: require("./../../assets/image Product4.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: "$299,43",
      discountedPrice: "$534,33",
      discount: "24% Off",
    },
    {
      id: 1,
      imageSource: require("./../../assets/image Product3.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: "$299,43",
      discountedPrice: "$534,33",
      discount: "24% Off",
    },
    {
      id: 1,
      imageSource: require("./../../assets/image Product3.png"),
      title: "FS - Nike",
      titledetail: "Air Max 270 React...",
      price: "$299,43",
      discountedPrice: "$534,33",
      discount: "24% Off",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.category}>Category</Text>
        <TouchableOpacity>
          <Text style={[styles.category, styles.colorcategory]}>
            More Category
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15, display: "flex" }}
      >
        <TouchableOpacity>
          <View style={styles.Categoryview}>
            <View style={styles.imagestyle}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/woman bag.png")}
              ></Image>
            </View>
            <Text style={styles.categorytext}>Man Shirt</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Categoryview}>
            <View style={styles.imagestyle}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/Group.png")}
              ></Image>
            </View>
            <Text style={styles.categorytext}>Dress</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Categoryview}>
            <View style={styles.imagestyle}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/woman bag.png")}
              ></Image>
            </View>
            <Text style={styles.categorytext}>Man Work</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Categoryview}>
            <View style={styles.imagestyle}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/Group.png")}
              ></Image>
            </View>
            <Text style={styles.categorytext}>Woman Bag</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Categoryview}>
            <View style={styles.imagestyle}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/woman bag.png")}
              ></Image>
            </View>
            <Text style={styles.categorytext}>Man Shirt</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View>
      <FlatList
      horizontal={true}
        data={data.products.nodes}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
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
        <TouchableOpacity>
          <Text style={[styles.category, styles.colorcategory]}>See More</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* {megasales.map((megasale) => (
            <ProductSlider
              key={megasale.id}
              imageSource={megasale.imageSource}
              title={megasale.title}
              titledetail={megasale.titledetail}
              price={megasale.price}
              discountedPrice={megasale.discountedPrice}
              discount={megasale.discount}
            />
          ))} */}
        </ScrollView>
      </View>
      <View style={styles.slider}>
        <View style={styles.containercard}>
          <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.cardbox1}>
                <Image
                  source={require("./../../assets/image Product5.png")}
                ></Image>

                <Text style={styles.cardtext}>
                  FS - Nike Air {"\n"}Max 270 React...
                </Text>
                <Text style={styles.cardtext2}>$299,43</Text>

                <Text style={styles.cardtext3}>
                  $534,33 <Text style={styles.cardtext4}> 24% Off</Text>
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardbox1}>
                <Image
                  source={require("./../../assets/image Product7.png")}
                ></Image>

                <Text style={styles.cardtext}>
                  FS - Nike Air {"\n"}Max 270 React...
                </Text>
                <Text style={styles.cardtext2}>$299,43</Text>

                <Text style={styles.cardtext3}>
                  $534,33 <Text style={styles.cardtext4}> 24% Off</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.cardbox1}>
                <Image
                  source={require("./../../assets/image Product7.png")}
                ></Image>

                <Text style={styles.cardtext}>
                  FS - Nike Air {"\n"}Max 270 React...
                </Text>
                <Text style={styles.cardtext2}>$299,43</Text>

                <Text style={styles.cardtext3}>
                  $534,33 <Text style={styles.cardtext4}> 24% Off</Text>
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardbox1}>
                <Image
                  source={require("./../../assets/image Product6.png")}
                ></Image>

                <Text style={styles.cardtext}>
                  FS - Nike Air {"\n"}Max 270 React...
                </Text>
                <Text style={styles.cardtext2}>$299,43</Text>

                <Text style={styles.cardtext3}>
                  $534,33 <Text style={styles.cardtext4}> 24% Off</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>{/* <SinglePage /> */}</View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imagestyle: {
    borderWidth: 2,
    padding: 20,
    borderRadius: 50,
    borderColor: "#EBF0FF",
  },
  Categoryview: {
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
  },
  colorcategory: {
    color: "#40BFFF",
  },
  categorytext: {
    marginTop: 5,
    color: "#9098B1",
  },
  cardbox: {
    padding: 10,
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 10,
    display: "flex",
    gap: 10,
    marginRight: 20,
  },
  cardtext: {
    fontWeight: "bold",
  },
  cardtext2: {
    fontWeight: "bold",
    color: "#40BFFF",
  },
  cardtext3: {
    color: "#9098B1",
    fontWeight: "bold",
    fontSize: 12,
  },
  cardtext4: {
    color: "#FB7181",
  },
  slider: {
    position: "relative",
    margin: 10,
    paddingVertical: 10,
  },
  containercard: {
    marginTop: 20,
    flex: 1,
    flexDirection: "column", // Align rows vertically
    justifyContent: "center", // Center rows horizontally
    alignItems: "center", // Center rows vertically
  },
  row: {
    flexDirection: "row", // Align items in a row
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
    marginBottom: 20, // Adjust spacing between rows
  },
  cardbox1: {
    padding: 10,
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 10,
    display: "flex",
    gap: 10, // Or any color you prefer
    marginHorizontal: 10, // Adjust spacing between boxes in the same row
  },
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
});
