import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItems";

import DATA from "../utils/Data";

export default () => {
  const renderListItem = ({ item }) => (
    <ListItem title={item.title} body={item.body} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text> This is text... </Text>
      <FlatList
        data={DATA}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
