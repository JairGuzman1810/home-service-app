import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function BusinessItem({ business }) {
  const navigation = useNavigation();
  // Función para truncar el texto
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push("Business-Details", { business: business })
      }
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.infocontainer}>
        <Text style={styles.name}>{truncateText(business?.name, 14)}</Text>
        <Text style={styles.contactPerson}>{business?.contactPerson}</Text>
        <Text style={styles.category}>{business?.category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Sombra para Android
    elevation: 2,
    marginBottom: 3,
    flex: 1,
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
