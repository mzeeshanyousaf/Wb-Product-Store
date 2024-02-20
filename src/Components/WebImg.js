import React from "react";
import { View, StyleSheet, Image } from "react-native";

const WebImg = ({ stylesImg }) => {
  return (
    <Image
      {...stylesImg}
      source={{
        uri: "https://webbuggs.com/wp-content/themes/wp-bootstrap-starter/inc/assets/web_buggs_images/main_page/min%20header%20logo.png?_t=1665689884",
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default WebImg;
