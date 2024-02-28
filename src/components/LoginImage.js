import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';
export default function SecondComponent() {

return (
<View style={styles.container}>
<Image
        style={styles.image}
        source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/16131462-icone-de-login-em-estilo-simples-ilustracaoial-de-acesso-seguro-de-pessoas-em-fundo-branco-isolado-conceito-de-negocio-aprovado-por-senha-vetor.jpg' }}
      />
</View>
);
}