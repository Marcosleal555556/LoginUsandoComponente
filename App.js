import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
import { styles } from "./src/styles/StyleSheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/pages/About";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Home />

      <NavigationContainer>
        {" "}
        {/* Componente fornecido pelo React Navigation para a navegação da aplicação. */}
        <Stack.Navigator>
          {" "}
          {/* Componente Navigator do navegador de pilha. initialRouteName define a rota inicial da navegação. */}
          <Stack.Screen name="Home" component={Home} />{" "}
          {/* Define uma tela com o nome "Home" e associa o componente Home a ela. */}
          <Stack.Screen name="Sobre" component={About} />{" "}
          {/* Define uma tela com o nome "Sobre" e associa o componente Sobre a ela. */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
