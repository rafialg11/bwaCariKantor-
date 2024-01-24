import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default Details;
