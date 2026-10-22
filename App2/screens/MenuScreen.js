// 1. ZONA DE IMPORTACIONES
import { StyleSheet, View, Text, Button} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroudScreen';
import ModalScreen from './ModalScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';

// 2. ZONA MAIN (Componentes ó Screens)
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch(screen){
    case 'safe':
        return <SafeScreen/>
    case 'press':
        return <PressableScreen/>
    case 'textInp':
        return <TextInputScreen/>
    case 'flat':
        return <FlatListScreen/>
    case 'imageBack':
        return <ImageBackgroundScreen/>
    case 'modal':
        return <ModalScreen/>
    case 'activity':
        return <ActivityIndicatorScreen/>
    case 'tarjetas':
        return <TarjetasScreen/>
    case 'menu':
        default: 
            return (
              <View style={styles.container}>
                  <Text>Menú de Prácticas</Text>

                  <Button title='Práctica Tarjetas' onPress={ () => setScreen('tarjetas')}></Button>
                  <Button title='Práctica SafeAreaView' onPress={ () => setScreen('safe')}></Button>
                  <Button title='Práctica Pressable' onPress={ () => setScreen('press')}></Button>
                  <Button title='Práctica TextInput' onPress={ () => setScreen('textInp')}></Button>
                  <Button title='Práctica FlatList' onPress={ () => setScreen('flat')}></Button>
                  <Button title='Práctica ImageBackground' onPress={ () => setScreen('imageBack')}></Button>
                  <Button title='Práctica Modal' onPress={ () => setScreen('modal')}></Button>
                  <Button title='Práctica ActivityIndicator' onPress={ () => setScreen('activity')}></Button>
              </View>
    
            );
  } //Switch
} //Function

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