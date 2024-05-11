import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import Heading from "../../Components/Heading"; // Assuming this is for the page title
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons
import Colors from "../../Utils/Colors"; // Your color palette

export default function BusinessPhotos({ images }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpenImage = (image) => {
    setCurrentImage(image);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setCurrentImage(null);
  };

  return (
    <View style={styles.container}>
      <Heading text="Photos" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.imageGrid}>
          {images.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOpenImage(item)}
              style={[
                styles.touchableImage,
                index === images.length - 1 && images.length % 2 !== 0
                  ? styles.fullWidthImage
                  : {},
              ]}
            >
              <Image style={styles.image} source={{ uri: item.url }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {currentImage && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}
              >
                <AntDesign name="closecircle" size={24} color={Colors.WHITE} />
              </TouchableOpacity>
              <Image
                style={styles.modalImage}
                source={{ uri: currentImage.url }}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 7,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  touchableImage: {
    width: "48%",
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
  fullWidthImage: {
    width: "100%",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalImage: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 30,
    padding: 6,
  },
});
