import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform, Switch } from 'react-native';

const mostrarAlerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const registrar = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }

    if(semestre < 1 || semestre > 12) {
      mostrarAlerta('Error', 'El semestre debe estar entre 1 y 12.');
      return;
    }

    const txtTaller = taller ? 'Sí' : 'No';
    const txtConstancia = constancia ? 'Sí' : 'No';
    const txtDeportes = deportes ? 'Sí' : 'No';

    mostrarAlerta(
      'Registro enviado', 
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${txtTaller}\nConstancia: ${txtConstancia}\nDeportes: ${txtDeportes}`
    );

    setNombre('');
    setCarrera('');
    setSemestre('');
    setTaller(false);
    setConstancia(false);
    setDeportes(false);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Nombre completo'
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder='Carrera'
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder='Semestre'
        value={semestre}
        onChangeText={setSemestre}
        keyboardType='numeric'
        maxLength={2}
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.filaSwitch}>
        <Text>¿Asistirá al taller?</Text>
        <Switch
          value={taller}
          onValueChange={setTaller}
        />
      </View>

      <View style={styles.filaSwitch}>
        <Text>¿Requiere constancia?</Text>
        <Switch
          value={constancia}
          onValueChange={setConstancia}
        />
      </View>

      <View style={styles.filaSwitch}>
        <Text>¿Participará en deportes?</Text>
        <Switch
          value={deportes}
          onValueChange={setDeportes}
        />
      </View>

        <Button
          title='Enviar Registro'
          onPress={registrar}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
  },
  filaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});