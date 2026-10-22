// 1. ZONA DE IMPORTACIONES
import { StyleSheet, View, Text} from 'react-native';


// 2. ZONA MAIN (Componentes ó Screens)
export default function PressableScreen() {
  return (
    <View style={styles.container}>
        <Text>Aquí va la práctica 14</Text>
        <Text>Equipo Paloma</Text>
    </View>
  );
}

// 3. ZONA DE ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});