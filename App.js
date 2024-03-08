import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
import { styles } from "./src/styles/StyleSheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/pages/About";
import Login from "./src/pages/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Login />

   
    </View>
  );
}
