// 1. ZONA DE IMPORTACIONES
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';


// 2. ZONA MAIN (Componentes ó Screens)
export default function TarjetasScreen() {
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
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
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