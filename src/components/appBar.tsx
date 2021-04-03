import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const AppBar = () => <View style={styles.container} />;

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  }
});
