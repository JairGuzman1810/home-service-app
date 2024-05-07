import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import Heading from "../../Components/Heading";
import GlobalAPI from "../../Utils/GlobalAPI";
import Colors from "../../Utils/Colors";
import BusinessItem from "./BusinessItem";

export default function BusinessList() {
  const [business, setBusiness] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalAPI.getBusinessList().then((response) => {
      setBusiness(response?.businessLists);
      setIsLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Heading text={"Latest Business"} isViewAll={true} />
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {business.map(
            (
              item,
              index // Limiting to display only the first 4 as before
            ) => (
              <View key={index} style={styles.businessItemContainer}>
                <BusinessItem business={item} />
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
    marginTop: 20,
  },
  scrollView: {
    flexDirection: "row",
  },
  businessItemContainer: {
    marginRight: 10,
  },
});
