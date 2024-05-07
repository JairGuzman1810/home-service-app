import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../Utils/GlobalAPI";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

export default function Sliders() {
  const [slider, setSlider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalAPI.getSlider().then((response) => {
      //console.log(response.sliders);
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
        <>
          <FlatList
            data={slider}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.slider}>
                <Image
                  source={{ uri: item?.image?.url }}
                  style={styles.sliderImage}
                />
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    objectFit: "cover",
    borderRadius: 20,
  },
});
