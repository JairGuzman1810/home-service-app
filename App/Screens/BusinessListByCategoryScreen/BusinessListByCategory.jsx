import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalAPI from "../../Utils/GlobalAPI";
import BusinessListByCategoryItem from "./BusinessListByCategoryItem";
import Colors from "../../Utils/Colors";

export default function BusinessListByCategory() {
  const [business, setBusiness] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    getBusinessListByCategory();
  }, []);

  const getBusinessListByCategory = () => {
    GlobalAPI.getBusinessListByCategory({ category: param.category }).then(
      (response) => {
        setBusiness(response?.businessLists);
        setIsLoading(false);
      }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => hideModal()}>
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={styles.categoryTitle}>{param.category}</Text>
      </TouchableOpacity>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : business.length > 0 ? (
        <>
          <FlatList
            data={business}
            renderItem={({ item }) => (
              <BusinessListByCategoryItem business={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Business Found</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor principal usa todo el espacio disponible
    padding: 20,
    paddingTop: 30,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1, // Usa todo el espacio disponible para centrar el mensaje en la pantalla
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
    padding: 20, // Añade algo de padding si es necesario
  },
  emptyText: {
    fontSize: 18,
    color: Colors.GRAY,
    fontFamily: "Montserrat-Medium",
  },
});
