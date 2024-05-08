import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function BookingModal({ hideModal }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => hideModal()}>
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={styles.categoryTitle}>Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor principal usa todo el espacio disponible
    padding: 20,
    paddingTop: 30,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginLeft: 10,
  },
});
