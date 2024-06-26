import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListByCategoryItem({ business, booking }) {
  const navigation = useNavigation();

  const formatDate = (dateString) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push("Business-Details", { business: business })
      }
    >
      <Image style={styles.image} source={{ uri: business?.images[0]?.url }} />
      <View style={{ display: "flex", gap: 10, flex: 1 }}>
        <Text style={styles.contactPerson}>{business.contactPerson}</Text>
        <Text style={styles.name}>{business.name}</Text>
        {!booking && (
          <Text style={styles.address}>
            <Ionicons
              style={{ marginRight: 10 }}
              name="location-sharp"
              size={18}
              color={Colors.PRIMARY}
            />
            {" " + business.address}
          </Text>
        )}
        {booking && (
          <>
            <Text
              style={[
                styles.status,
                booking.bookingStatus === "Completed"
                  ? { backgroundColor: Colors.GREEN_LIGHT, color: Colors.GREEN }
                  : null,
                booking.bookingStatus === "Booked"
                  ? {
                      backgroundColor: Colors.PRIMARY_LIGHT,
                      color: Colors.PRIMARY,
                    }
                  : null,
                booking.bookingStatus === "Canceled"
                  ? {
                      backgroundColor: Colors.RED_LIGHT,
                      color: Colors.RED,
                    }
                  : null,
              ]}
            >
              {booking.bookingStatus}
            </Text>
            <Text>
              <Text style={styles.address}>
                <Ionicons
                  style={{ marginRight: 10 }}
                  name="calendar"
                  size={18}
                  color={Colors.PRIMARY}
                />
                {" " + formatDate(booking.date)} at {booking.time}
              </Text>
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    display: "flex",
    gap: 10,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Sombra para Android
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  contactPerson: {
    fontFamily: "Montserrat-Medium",
    color: Colors.GRAY,
    fontSize: 13,
  },
  name: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  address: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: Colors.GRAY,
  },
  status: {
    fontSize: 11,
    fontFamily: "Montserrat-Medium",
    padding: 6,
    borderRadius: 3,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
  },
});
