import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function BusinessAboutMe({ business }) {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <View>
      <Heading text={"About Me"}></Heading>
      <Text style={styles.about} numberOfLines={isReadMore ? null : 5}>
        {business.about}
      </Text>
      <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
        <Text style={styles.readMore}>
          {isReadMore ? "Read Less" : "Read More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    fontFamily: "Montserrat-Regular",
    borderColor: Colors.GRAY,
    fontSize: 14,
    lineHeight: 25,
  },
  readMore: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
});
