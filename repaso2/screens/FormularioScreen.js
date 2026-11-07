import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  Image,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StatusBar
} from 'react-native';

export default function FormularioScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([
    { id: '1', titulo: 'Pie de bruja', autor: 'Brom', genero: 'Terror' },
    { id: '2', titulo: 'Azul casi transparente', autor: 'Ryu Murakami', genero: 'Realismo mágico' }
  ]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAgregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros((prevLibros) => [nuevoLibro, ...prevLibros]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
            source={require('../assets/Inicio.jpg')}
        />
        <Text style={styles.splashSubtitle}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/Fondo.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="#777"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#777"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="#777"
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              cargando && styles.buttonDisabled
            ]}
            onPress={handleAgregarLibro}
            disabled={cargando}
          >
            <Text style={styles.buttonText}>Agregar Libro</Text>
          </Pressable>
        </View>

        {cargando && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.totalText}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardText}>Autor: {item.autor}</Text>
              <Text style={styles.cardText}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashSubtitle: {
    fontSize: 16,
    color: '#878080',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  formContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
  button: {
    backgroundColor: '#1c4966',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 8,
    fontSize: 15,
    fontWeight: '500',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 8,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#333333',
  },
});