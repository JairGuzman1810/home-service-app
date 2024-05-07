import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function BusinessDetails() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageHeader}
        source={{ uri: business?.images[0]?.url }}
      />
      <View style={styles.infoContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: "100%",
    height: 300,
  },
  back: {
    position: "absolute",
    zIndex: 100,
    padding: 20,
  },
  infoContainer: { padding: 20, display: "flex", gap: 7 },
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
