import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../Utils/Colors";
import GlobalAPI from "../../Utils/GlobalAPI";
import { useUser } from "@clerk/clerk-expo";
import BusinessListByCategoryItem from "../BusinessListByCategoryScreen/BusinessListByCategoryItem";
import BusinessItem from "../HomeScreen/BusinessItem";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    user && getUserBookings();
  }, [user]);

  const getUserBookings = () => {
    setRefreshing(true);
    GlobalAPI.getUserBookings(user?.primaryEmailAddress.emailAddress).then(
      (response) => {
        setBookings(response?.bookings);
        setIsLoading(false);
        setRefreshing(false);
        console.lo;
      }
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : bookings.length > 0 ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={bookings}
            onRefresh={() => getUserBookings()}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <BusinessListByCategoryItem
                business={item?.business}
                booking={item}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Bookings Found</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginLeft: 10,
    marginBottom: 15,
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
