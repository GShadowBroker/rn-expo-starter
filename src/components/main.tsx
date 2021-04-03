import React from "react";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./repositoryList";
import AppBar from "./appBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    height: 40,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text style={styles.text}>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
