import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

export default function BookingModal({ hideModal }) {
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const getTime = () => {
    const timeList = [];

    // Loop over each half-hour interval from 8 AM to 7:30 PM
    for (let hour = 8; hour <= 19; hour++) {
      const period = hour < 12 ? "AM" : "PM"; // Determine AM/PM period
      const displayHour = hour <= 12 ? hour : hour - 12; // Adjust hour for PM times

      timeList.push({ time: `${displayHour}:00 ${period}` });
      timeList.push({ time: `${displayHour}:30 ${period}` });
    }

    setTimeList(timeList);
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => hideModal()}>
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={styles.categoryTitle}>Booking</Text>
      </TouchableOpacity>
      <Heading text={"Select Date"} />
      <View style={styles.calendar}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          width={340}
          minDate={Date.now()}
          todayBackgroundColor={Colors.BLACK}
          todayTextStyle={{ color: Colors.WHITE }}
          selectedDayColor={Colors.PRIMARY}
          selectedDayTextColor={Colors.WHITE}
          textStyle={{ fontFamily: "Montserrat-Medium" }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Heading text={"Select Time Slot"} />

        <FlatList
          horizontal
          data={timeList}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTime(item.time)}
              style={{ marginRight: 10 }}
            >
              <Text
                style={
                  selectedTime == item.time
                    ? styles.selectedTime
                    : styles.unselectedTime
                }
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginLeft: 10,
  },
  calendar: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    fontFamily: "Montserrat-Medium",
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
  },
  unselectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    fontFamily: "Montserrat-Medium",
    color: Colors.PRIMARY,
  },
});
