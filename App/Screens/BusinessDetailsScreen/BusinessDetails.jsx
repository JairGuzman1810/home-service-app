import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import BusinessPhotos from "./BusinessPhotos";
import BusinessAboutMe from "./BusinessAboutMe";
import BusinessName from "./BusinessInformation";
import BookingModal from "./BookingModal";
import * as Linking from "expo-linking";

export default function BusinessDetails() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  return (
    business && (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
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
        {/* Botones */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.messageBtn]}
            onPress={() => Linking.openURL("mailto:" + business.email)}
          >
            <Text style={styles.messageText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles.bookingBtn}
          >
            <Text style={styles.bookingText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        {/* Modal */}
        <Modal visible={showModal} animationType="slide">
          <BookingModal
            businessId={business.id}
            hideModal={() => setShowModal(false)}
          />
        </Modal>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: { height: "92.8%" },
  imageHeader: {
    width: "100%",
    height: 300,
  },
  back: {
    position: "absolute",
    zIndex: 100,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  separator: {
    borderWidth: 0.4,
    borderColor: Colors.GRAY,
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 8,
    gap: 5,
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  messageText: {
    fontFamily: "Montserrat-Bold",
    color: Colors.PRIMARY,
    fontSize: 15,
    textAlign: "center",
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 99,
    flex: 1,
  },
  bookingText: {
    fontFamily: "Montserrat-Bold",
    color: Colors.WHITE,
    fontSize: 15,
    textAlign: "center",
  },
});
