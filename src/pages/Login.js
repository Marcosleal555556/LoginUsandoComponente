import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../styles/StyleSheet';
import Fundo from '../components/LoginImageBackground';
import Imagem from '../components/LoginImage';
import Texto from '../components/LoginText';
import Input from '../components/LoginInput';
import Botao from '../components/LoginButton';

const ImagemLogo = {
    uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/16131462-icone-de-login-em-estilo-simples-ilustracaoial-de-acesso-seguro-de-pessoas-em-fundo-branco-isolado-conceito-de-negocio-aprovado-por-senha-vetor.jpg',
  }

  const ImagemFundo = {
    uri: 'https://img.freepik.com/vetores-gratis/fundo-branco-monocromatico-de-estilo-de-papel_23-2149008530.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700611200&semt=ais',
  }

export default function SecondComponent() {

return (
    
<View style={styles.container}>
<Fundo source={ImagemFundo}/>
<Imagem source={ImagemLogo} />
<Texto />
<Input />
<Botao />

</View>
);
}