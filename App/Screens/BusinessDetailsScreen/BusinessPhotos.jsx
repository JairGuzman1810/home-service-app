import React from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import Heading from "../../Components/Heading"; // Assuming this is for the page title

export default function BusinessPhotos({ images }) {
  return (
    <View style={styles.container}>
      <Heading text="Photos" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageGrid}>
          {images.map((item, index) => (
            <Image
              key={index}
              style={[
                styles.image,
                // Check if it's the last image and if the count of images is odd
                index === images.length - 1 && images.length % 2 !== 0
                  ? styles.fullWidthImage
                  : {},
              ]}
              source={{ uri: item.url }}
            />
          ))}
        </View>
      </ScrollView>
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
  image: {
    width: "48%", // Set to slightly less than half to fit two columns with a little gap
    height: 120,
    borderRadius: 15,
    marginBottom: 10, // Add some space between rows
  },
  fullWidthImage: {
    width: "100%", // Make the last image in an odd set take up full width
    height: 120, // Keep height consistent
  },
});
