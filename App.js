import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import * as SecureStore from "expo-secure-store";
import TabNavigation from "./App/Navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Colors from "./App/Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SafeAreaView style={styles.container}>
        {/* Componentes si esta logeado */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        {/* Componentes si no esta logeado */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar barStyle="light-content" backgroundColor={Colors.PRIMARY} />
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
