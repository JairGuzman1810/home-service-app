import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    //Si el usuario esta disponible,cargar la imagen
    user && (
      <View style={styles.container}>
        {/* Profile container */}
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: "Montserrat-Regular",
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 20,
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={24} color="white" />
        </View>
        {/* Search Bar container */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <TouchableOpacity style={styles.searchbtn}>
            <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Sombra para Android
    elevation: 5,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  searchbtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
});
