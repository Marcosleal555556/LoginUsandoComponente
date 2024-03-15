import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";

export default function ComponentHome() {
  const Fundo = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjw1Xvi23pXyYimJFuK3nIXNSd1m1DEvV2w&usqp=CAU",
  };

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Fundo} resizeMode="cover" style={styles.home}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 65,
            textAlign: "center",
          }}
        >
          HOMEPAGE
        </Text>
        <Rotas />
      </ImageBackground>
    </View>
  );
}
