import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title, body }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.innerText}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 1,
    marginVertical: 5,
    width: "90%",
    backgroundColor: "maroon",
    color: "red",
  },
  innerText: {
    color: "white",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    padding: 2,
    textAlign: "center",
  },
});
