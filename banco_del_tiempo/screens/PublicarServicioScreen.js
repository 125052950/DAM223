import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import BottomTabBar from '../components/BottomTabBar';

export default function PublicarServicioScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Publicar Servicio"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Crea tu nuevo servicio</Text>
          <Text style={styles.introDesc}>
            Completa los campos principales para compartir tu conocimiento con la comunidad.
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>NOMBRE DEL SERVICIO</Text>
            <Text style={styles.counter}>0/50 carac.</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Ej. Introducción a Python, Modelado 3D, etc."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>CATEGORÍA</Text>
          <TouchableOpacity style={styles.dropdownSelector} activeOpacity={0.7}>
            <Text style={styles.dropdownPlaceholder}>Selecciona la especialidad</Text>
            <Text style={styles.chevronIcon}>⌄</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>DESCRIPCIÓN</Text>
            <Text style={styles.counter}>0/500</Text>
          </View>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Explica qué aprenderán tus alumnos, metodología de clase, requisitos previos o estructura..."
            placeholderTextColor="#9CA3AF"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.uploadBox} activeOpacity={0.7}>
          <View style={styles.plusCircle}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
          <Text style={styles.uploadTitle}>+ Agregar Contenido</Text>
          <Text style={styles.uploadSubtitle}>
            Sube archivos en PDF o enlaces útiles
          </Text>
        </TouchableOpacity>

        <PrimaryButton
          title="Generar y Publicar"
          icon="→"
          variant="primary"
          style={styles.publishBtn}
          onPress={() => {}}
        />

        <TouchableOpacity style={styles.draftBtn} activeOpacity={0.7}>
          <Text style={styles.draftBtnText}>Cancelar y Guardar Borrador</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar activeTab="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  introSection: {
    marginVertical: 12,
  },
  introTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  introDesc: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
    lineHeight: 15,
  },
  fieldContainer: {
    marginVertical: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.5,
  },
  counter: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 12,
    color: '#111827',
  },
  textArea: {
    minHeight: 85,
    textAlignVertical: 'top',
  },
  dropdownSelector: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownPlaceholder: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  chevronIcon: {
    fontSize: 16,
    color: '#6B7280',
  },
  uploadBox: {
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginVertical: 12,
  },
  plusCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  plusIcon: {
    fontSize: 18,
    color: '#4338CA',
    fontWeight: '700',
  },
  uploadTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
  },
  uploadSubtitle: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 2,
  },
  publishBtn: {
    marginTop: 10,
    backgroundColor: '#4338CA',
  },
  draftBtn: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 6,
    backgroundColor: '#FFFFFF',
  },
  draftBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
  },
});