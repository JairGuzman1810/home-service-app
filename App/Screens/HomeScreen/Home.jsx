import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Sliders from "./Sliders";
import Categories from "./Categories";

export default function Home() {
  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Sliders />
        <Categories />
      </View>
    </View>
  );
}
