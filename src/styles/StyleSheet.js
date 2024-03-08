import { StyleSheet } from "react-native"; 
 
{/* /EDIÇÃO DOS CAMPOS */}
export const styles = StyleSheet.create({
container: {
justifyContent: "center",
alignItems:'center',
flex: 1,
},

// Editar a Fundo
fundo: {

    height: 300,
    width: 300,
    resizeMode: 'cover',
    source: 'imagem',

},

about: {

    height: 300,
    width: 300,
    borderRadius: 300,
    resizeMode: 'cover',
    source: 'imagem',

},

// Editar a Imagem
home: {

    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 500,
    

},

// Editar o Text
text: {
    textAlign:'center',
    color: 'black',
    fontSize: 30,
    borderStyle:'solid',
},

// Editar o Input E-mail
email: {
    textAlign:'center',
    color: 'black',
    fontSize: 30,
    borderStyle:'solid',
},

// Editar o Input Senha
senha: {
    textAlign:'center',
  color: 'black',
  fontSize: 30,
  borderStyle:'solid',
},

});