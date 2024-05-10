import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import GlobalAPI from "../../Utils/GlobalAPI";
import { useUser } from "@clerk/clerk-expo";

export default function BookingModal({ businessId, hideModal }) {
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  const getTime = () => {
    const timeList = [];
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);

    // Check if selectedDate is today
    const isToday =
      selectedDateObj.toDateString() === currentDate.toDateString();

    for (let hour = 8; hour <= 19; hour++) {
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour <= 12 ? hour : hour - 12;

      // Only add the full hour if it's not past the current time
      if (!isToday || hour > currentDate.getHours()) {
        timeList.push({ time: `${displayHour}:00 ${period}` });
      }

      // Add times for the half hour unless they are in the past
      if (
        !isToday ||
        hour > currentDate.getHours() ||
        (hour === currentDate.getHours() && currentDate.getMinutes() < 30)
      ) {
        timeList.push({ time: `${displayHour}:30 ${period}` });
      }
    }

    // Assuming setTimeList is a function that updates your component's state with the available times
    setTimeList(timeList);
  };

  useEffect(() => {
    getTime();
  }, [selectedDate]);

  const createBooking = () => {
    setIsLoading(true);
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: selectedDate,
      note: note,
      businessId: businessId,
    };
    GlobalAPI.createBooking({ data: data }).then((response) => {
      console.log(response);
      setIsLoading(false);
      ToastAndroid.show("Booking Created Successfully", ToastAndroid.LONG);
      hideModal();
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.back} onPress={hideModal}>
          <Ionicons name="arrow-back" size={30} color="black" />
          <Text style={styles.categoryTitle}>Booking</Text>
        </TouchableOpacity>
        <Heading text="Select Date" />
        <View style={styles.calendar}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={new Date()}
            todayBackgroundColor={Colors.BLACK}
            todayTextStyle={{ color: Colors.WHITE }}
            selectedDayColor={Colors.PRIMARY}
            selectedDayTextColor={Colors.WHITE}
            textStyle={{ fontFamily: "Montserrat-Medium" }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Heading text="Select Time Slot" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {timeList.length > 0 ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 1 }}
              >
                {timeList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedTime(item.time)}
                    style={{ marginRight: 10 }}
                  >
                    <Text
                      style={
                        selectedTime === item.time
                          ? styles.selectedTime
                          : styles.unselectedTime
                      }
                    >
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              <View style={{ flex: 1 }}>
                <Text style={styles.noTimeText}>No Available Times</Text>
              </View>
            )}
          </View>
        </View>
        <View style={{ paddingTop: 15 }}>
          <Heading text="Any Suggestion Note" />
          <TextInput
            placeholder="Note"
            multiline
            numberOfLines={4}
            onChangeText={setNote}
            style={styles.noteText}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={Colors.PRIMARY}
            style={styles.indicator}
          />
        ) : (
          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={() => createBooking()}
            disabled={selectedTime === "" || selectedDate === ""}
          >
            <Text
              style={
                selectedTime === "" || selectedDate === ""
                  ? styles.confirmbtnDisable
                  : styles.confirmbtn
              }
            >
              Confirm & Book
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Styles remain unchanged

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
  noteText: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 20,
    fontFamily: "Montserrat-Regular",
    borderColor: Colors.PRIMARY,
  },
  confirmbtn: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 13,
    borderRadius: 99,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 4,
    marginBottom: 5,
  },
  confirmbtnDisable: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    backgroundColor: Colors.GRAY,
    color: Colors.WHITE,
    padding: 13,
    borderRadius: 99,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 4,
    marginBottom: 5,
  },
  indicator: { padding: 15 },
  noTimeText: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: Colors.PRIMARY,
    paddingVertical: 9.1,
  },
});
