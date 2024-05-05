import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function BusinessItem({ business }) {
  // Función para truncar el texto
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.infocontainer}>
        <Text style={styles.name}>{truncateText(business?.name, 14)}</Text>
        <Text style={styles.contactPerson}>{business?.contactPerson}</Text>
        <Text style={styles.category}>{business?.category.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  infocontainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
  name: {
    fontSize: 15,
    fontFamily: "Montserrat-Bold",
  },
  contactPerson: {
    fontSize: 13,
    fontFamily: "Montserrat-Medium",
    color: Colors.GRAY,
  },
  category: {
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
    padding: 3,
    color: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderRadius: 3,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
  },
});
