import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Login />

   
    </View>
  );
}
