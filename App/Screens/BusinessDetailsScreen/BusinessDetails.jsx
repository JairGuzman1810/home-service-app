import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";
import BusinessAboutMe from "./BusinessAboutMe";
import BusinessName from "./BusinessInformation";

export default function BusinessDetails() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const navigation = useNavigation();
  return (
    business && (
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
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
          {/* Primera seccion de información */}
          <BusinessName business={business} />
          {/* Separador */}
          <View style={styles.separator}></View>
          {/* Acerca de mi */}
          <BusinessAboutMe business={business} />
          {/* Separador */}
          <View style={styles.separator}></View>
          <BusinessPhotos images={business.images}></BusinessPhotos>
        </View>
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  separator: {
    borderWidth: 0.4,
    borderColor: Colors.GRAY,
    marginVertical: 20,
  },
});
