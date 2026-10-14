import {Button, Text, Image, View} from 'react-native';

export const Saludo2 = () => {
    return (
        <View>
            <Text>Hola RN: Componente Propio y Botón </Text>
            <Image source={require('../assets/wave.png')}/>
            <Button title="Presiona para saludar"></Button>
        </View>
    );
}