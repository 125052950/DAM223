// 1. ZONA DE IMPORTACIONES
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';


// 2. ZONA MAIN (Componentes ó Screens)
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil
              nombre="Kevin Piña" 
              carrera="ITIID" 
              materia="Móvil" 
              cuatri="4" 
              style={styles.tarjeta2}/>
      <Perfil
              nombre="Karen Hernández" 
              carrera="ITIID" 
              materia="Móvil" 
              cuatri="4"
              style={styles.tarjeta1} />
      <Perfil nombre="Agustin Rivera" 
              carrera="ITIID" 
              materia="Móvil" 
              cuatri="4"
              style={styles.tarjeta3} />
      <StatusBar style="auto" />
    </View>
  );
}

// 3. ZONA DE ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tarjeta1:{
    backgroundColor:'pink',
  },
  tarjeta2:{
    backgroundColor:'lightblue',
  },
  tarjeta3:{
    backgroundColor:'lightgreen',
  },
});
