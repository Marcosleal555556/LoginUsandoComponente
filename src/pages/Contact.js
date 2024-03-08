import { View, TextInput, Button, Text, Pressable,} from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";
import { TouchableOpacity } from "react-native-web";
export default function ComponentContact() {

  const navigation = useNavigation();
  
  return (
    <View style={styles.contact}>
         <Rotas />
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

<Button
     title='Enviar Mensagem'
     onPress={() => {
       alert('Mensagem Enviada(Button)');
     }}
     color='green'
     
    />

    <TouchableOpacity
style={styles.touch}
onPress={() => alert("mensagem enviada(TouchableOpacity")}>

<Text >Enviar Mensagem</Text>
    </TouchableOpacity>


<Pressable
style={styles.btn}
onPress={() => alert("Você enviou a mensagem(Pressable)")}>

<Text>
Enviar Mensagem
</Text>
</Pressable>
    </View>
  );
}
