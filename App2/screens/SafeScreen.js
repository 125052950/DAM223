// 1. ZONA DE IMPORTACIONES
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';

// 2. ZONA MAIN (Componentes ó Screens)
export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text>Aquí va la práctica 10 - Equipo Dulce</Text>
        <SafeAreaEjemplo/>
        <ScrollViewEjemplo/>
    </SafeAreaView>
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