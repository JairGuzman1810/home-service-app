import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../Utils/GlobalAPI";

export default function Sliders() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalAPI.getSlider().then((response) => {
      console.log(response.sliders);
      setSlider(response?.sliders);
    });
  };
  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList
        data={slider}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 15 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    marginBottom: 20,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "cover",
  },
});
