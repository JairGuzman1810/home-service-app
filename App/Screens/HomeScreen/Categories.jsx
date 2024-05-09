import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import GlobalAPI from "../../Utils/GlobalAPI";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalAPI.getCategory().then((response) => {
      setCategories(response?.categories);
      setIsLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Heading text={"Categories"} isViewAll={true} />
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : (
        <ScrollView
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.grid}
        >
          {categories.slice(0, 4).map(
            (
              item,
              index // Assuming you still want to display only the first 4
            ) => (
              <View key={index} style={styles.gridItem}>
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() =>
                    navigation.push("Business-List", { category: item.name })
                  }
                >
                  <Image
                    source={{ uri: item?.icon?.url }}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <Text style={styles.iconName}>{item?.name}</Text>
              </View>
            )
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  gridItem: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  iconImage: {
    width: 30, // Adjusted for proper visibility
    height: 30,
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Sombra para Android
    elevation: 2,
  },
  iconName: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    marginTop: 5,
  },
});
