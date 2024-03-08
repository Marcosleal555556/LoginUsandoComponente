import { Text, View, StyleSheet, Image } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";

export default function About() {
  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();



  return (
    <View style={styles.about}>
      
      <Rotas />
      <Image source={require('../assets/imagens/Gatinho.jpeg')} style={styles.gato}/>
      <Text>Exemplo de página About</Text>
      
    </View>
  );
}
