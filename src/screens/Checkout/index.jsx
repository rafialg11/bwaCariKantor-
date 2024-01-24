import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Checkout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Checkout</Text>
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

export default Checkout;
