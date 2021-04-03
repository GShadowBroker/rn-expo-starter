import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </TouchableOpacity>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  item: {
    minHeight: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
