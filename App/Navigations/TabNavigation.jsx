import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Screens/ProfileScreen/Profile";
import Booking from "../Screens/BookingScreen/Booking";
import { Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 12,
                marginTop: -7,
                fontFamily: focused ? "Montserrat-Bold" : "Montserrat-Regular",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 12,
                marginTop: -7,
                fontFamily: focused ? "Montserrat-Bold" : "Montserrat-Regular",
              }}
            >
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 12,
                marginTop: -7,
                fontFamily: focused ? "Montserrat-Bold" : "Montserrat-Regular",
              }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
