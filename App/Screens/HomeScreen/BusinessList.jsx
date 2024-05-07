import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
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
    <View style={{ marginTop: 20 }}>
      <Heading text={"Latest Business"} isViewAll={true}></Heading>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : (
        <>
          <FlatList
            data={business}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(
              { item, index } //Solo va mostrar los 4 primero
            ) => (
              <View style={{ marginRight: 10 }}>
                <BusinessItem business={item}></BusinessItem>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}
