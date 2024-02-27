import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ExployreCard = ({ title, url }) => {
  return (
    <View style={styles.cardContainer}>
      <View styles={styles.cardContainer}>
        <View style={styles.ImgDivStyle}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/ExployerCardImages/man-shirt.png")}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={styles.CardTitle} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: 70,
  },
  ImgDivStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EBF0FF",
  },
  CardTitle: {
    color: "#9098B1",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    fontWeight: "400",
    writingDirection: "auto",
    textAlign: "center",
  },
});

export default ExployreCard;
