import {Text, View, Button} from 'react-native';
import { useState } from 'react';

export const Perfil = ({nombre, carrera, materia, cuatri}) => {
    const[mostrar, setMostrar] = useState(false);
    return (
        <View>
            <Text>Nombre: {nombre}</Text> 
            { mostrar && 
            <> {/* Encerrarlo dentro de <></>  significa que es un fragmento de texto*/}
            <Text>Materia: {materia}</Text>
            <Text>Carrera: {carrera}</Text>
            <Text>Cuatrimestre: {cuatri}</Text>
            </>
            }
            <Button title = "Ver perfil" onPress={() => setMostrar(!mostrar)}/>
        </View>
    );
}