import { View, Text } from "react-native";
import React, { useEffect } from "react";
import GlobalAPI from "../../Utils/GlobalAPI";

export default function Sliders() {
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalAPI.getSlider().then((response) => {
      console.log(response);
    });
  };
  return (
    <View>
      <Text>Sliders</Text>
    </View>
  );
}
