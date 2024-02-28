import { Text, View, StyleSheet } from 'react-native';
import { style } from '../styles/StyleSheet';
import Imagem from '../components/LoginImage';
import Texto from '../components/LoginText';
import Input from '../components/LoginInput';
import Botao from '../components/LoginButton';

export default function SecondComponent() {

return (
<View style={style.container}>

<Imagem />
<Texto />
<Input />
<Botao />

</View>
);
}