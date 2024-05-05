import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text style={styles.viewAll}>View All</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    marginBottom: 20,
  },
  viewAll: {
    fontFamily: "Montserrat-Medium",
  },
});
