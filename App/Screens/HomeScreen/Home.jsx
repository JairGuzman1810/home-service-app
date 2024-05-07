import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Sliders from "./Sliders";
import Categories from "./Categories";
import BusinessList from "./BusinessList";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 18, flex: 1 }}>
          <Sliders />
          <Categories />
          <BusinessList />
        </View>
      </ScrollView>
    </View>
  );
}
