import { View, TextInput } from "react-native";
import { styles } from "../styles/Estilos";
import { useNavigation } from "@react-navigation/native";

export default function ComponentContact() {

  const navigation = useNavigation();
  
  return (
    <View>
      {/* Caixa do nome */}
      <TextInput style={styles.inputname} 
      placeholder="Nome" 
      inputMode="text" 
      />

      {/*Caixa do email*/}
      <TextInput
        style={styles.inputname}
        placeholder="E-mail"
        inputMode="text"
      />
      
      {/*Caixa da mensagem do usuario*/}
      <TextInput
        style={styles.inputname}
        placeholder="Mensagem"
        inputMode="text"
      />
    </View>
  );
}

