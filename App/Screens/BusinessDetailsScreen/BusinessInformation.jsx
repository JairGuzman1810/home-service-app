import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function BusinessName({ business }) {
  return (
    <View>
      <Text style={styles.name}>{business?.name}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.contactPerson}>{business?.contactPerson} 🌟</Text>
        <Text style={styles.category}>{business?.category.name}</Text>
      </View>
      <Text style={styles.address}>
        <Ionicons
          style={{ marginRight: 10 }}
          name="location-sharp"
          size={20}
          color={Colors.PRIMARY}
        />
        {" " + business.address}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: "Montserrat-Bold",
    fontSize: 22,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  contactPerson: {
    fontFamily: "Montserrat-Medium",
    color: Colors.PRIMARY,
    fontSize: 17,
  },
  category: {
    fontFamily: "Montserrat-Medium",
    padding: 5,
    color: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderRadius: 5,
    fontSize: 11,
  },
  address: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    color: Colors.GRAY,
  },
});
