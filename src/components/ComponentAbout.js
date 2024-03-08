import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';


const imagem = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUP0eZQkYRyfLZ3XfH8nWN-880jbLF8fUZAoAH_b4fg&s',
}

export default function ComponentAbout() {

return (
  
<View>
<Image source={imagem} resizeMode="cover" style={styles.about}>

<Text>
Exemplo de página About

</Text>

</Image>

</View>
);
}