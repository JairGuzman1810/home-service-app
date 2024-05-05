import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Sliders from "./Sliders";

export default function Home() {
  return (
    <View>
      <Header />
      <Sliders />
    </View>
  );
}
