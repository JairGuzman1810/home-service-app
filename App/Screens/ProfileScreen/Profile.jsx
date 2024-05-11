import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const { user } = useUser();
  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark",
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "envelope",
    },
    {
      id: 4,
      name: "Logout",
      icon: "sign-out",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.profileContent}>
          <Image style={styles.imageProfile} source={{ uri: user.imageUrl }} />
          <Text style={styles.userName}>{user.fullName}</Text>
          <Text style={styles.userEmail}>
            {user?.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          marginTop: 40,
        }}
      >
        <FlatList
          data={profileMenu}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 40,
                gap: 10,
              }}
            >
              <FontAwesome name={item.icon} size={40} color={Colors.PRIMARY} />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginLeft: 10,
    marginBottom: 15,
  },
  profileContent: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
  userName: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: Colors.WHITE,
    marginTop: 8,
  },
  userEmail: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: Colors.WHITE,
    marginTop: 8,
  },
  itemName: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: Colors.BLACK,
  },
});
