import { View, TextInput } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";
export default function ComponentContact() {

  const navigation = useNavigation();
  
  return (
    <View>
         <Rotas />
      {/* Caixa do nome */}
      <TextInput style={styles.inputcontact} 
      placeholder="Nome" 
      inputMode="text" 
      />

      {/*Caixa do email*/}
      <TextInput
        style={styles.inputcontact}
        placeholder="E-mail"
        inputMode="text"
      />
      
      {/*Caixa da mensagem do usuario*/}
      <TextInput
        style={styles.inputcontact}
        placeholder="Mensagem"
        inputMode="text"
      />


   
    </View>
  );
}

