import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TitleText = props => {
  return <Text style={styles.body}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  }
});

export default TitleText;
