import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import ImagBack from "../components/ImageBackground";
import Rotas from "../components/Rotas";
import Imagem from "../components/LoginImage";
import Text from "../components/LoginText";
import Input from "../components/LoginInput";
import Button from "../components/LoginButton";

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
      <Rotas />
      <ImagBack>
        <Imagem />
        <Text />
        <Input />
        <Button />
      </ImagBack>
    </View>
  );
}
