import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import GlobalAPI from "../../Utils/GlobalAPI";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Sliders() {
  const [slider, setSlider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalAPI.getSlider().then((response) => {
      setSlider(response?.sliders);
      setIsLoading(false);
    });
  };

  return (
    <View>
      <Heading text={"Offers For You"}></Heading>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {slider.map((item, index) => (
            <View style={styles.slider} key={index}>
              <Image
                source={{ uri: item?.image?.url }}
                style={styles.sliderImage}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row", // Ensures the items are laid out horizontally
  },
  slider: {
    marginRight: 15,
    borderRadius: 20,
  },
  heading: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    marginBottom: 20,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    resizeMode: "cover", // Corrected 'objectFit' to 'resizeMode' for React Native
  },
});
