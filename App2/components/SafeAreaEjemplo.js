import {use, useState} from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function SafeAreaEjemplo(){
    const [mensaje, setMensaje] = useState('Bienvenidos a nuestra práctica');
    return(
        <SafeAreaView style = {styles.container} edges={['top', 'bottom']}>
        <Text style = {styles.titulo}>Ejemplo de SafeAreaView</Text>
        <Text style = {styles.mensaje}>{mensaje}</Text>
        <Button
            title='cambiar mensaje'
            onPress={() => setMensaje(mensaje === 'Esta es nuestra práctica'
                ? 'Hola': 'Esta es nutra práctica'
            )}
        />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#86c5ff',
        padding:20,
        alignItems:'center',
        borderRadius:10,
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    mensaje:{
        fontSize:16,
        marginBottom:10,
    },
});