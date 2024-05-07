import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/HomeScreen/Home";
import BusinessListByCategory from "../Screens/BusinessListByCategoryScreen/BusinessListByCategory";
import BusinessDetails from "../Screens/BusinessDetailsScreen/BusinessDetails";
import Colors from "../Utils/Colors";
const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Business-List" component={BusinessListByCategory} />
      <Stack.Screen name="Business-Details" component={BusinessDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
