import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../Utils/GlobalAPI";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true}></Heading>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : (
        <>
          <FlatList
            data={categories}
            numColumns={4}
            renderItem={({ item, index }) =>
              index <= 3 && ( //Solo va mostrar los 4 primero
                <View style={styles.container}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={{ uri: item?.icon?.url }}
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.iconName}>{item?.name}</Text>
                </View>
              )
            }
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
  iconName: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    marginTop: 5,
  },
});
