import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Sliders from "./Sliders";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

export default function Home() {
  return (
    <View>
      <Header />
      <View style={{ paddingHorizontal: 20, paddingVertical: 18 }}>
        <Sliders />
        <Categories />
        <BusinessList />
      </View>
    </View>
  );
}
