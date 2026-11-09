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
import WalletCard from '../components/WalletCard';
import FilterPills from '../components/FilterPills';
import ServiceCard from '../components/ServiceCard';
import BottomTabBar from '../components/BottomTabBar';

export default function ExplorarCursosScreen() {
  const categories = ['Todos', 'Programación & IA', 'Mecatrónica', 'Idiomas', 'Diseño UX/UI'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Explorar Cursos"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <WalletCard hours="5.0" equivalence="1 hr = 1 crédito" />

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar curso, software, categoría..."
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity style={styles.clearBtn} activeOpacity={0.6}>
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        </View>

        <FilterPills options={categories} selected="Todos" />

        <View style={styles.promptBanner}>
          <Text style={styles.promptTitle}>¿No encuentras tu curso de interés?</Text>
          <Text style={styles.promptSubtitle}>
            Solicita un servicio según tu nivel y presupuesto
          </Text>
          <TouchableOpacity style={styles.customRequestBtn} activeOpacity={0.8}>
            <Text style={styles.customRequestBtnText}>Solicitar a medida</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Servicios Disponibles</Text>

        <ServiceCard
          authorName="Jimena Torres"
          authorRole="Ing. Tecnologías de la Información"
          rating="4.9"
          reviewsCount="24 reseñas"
          title="Aprende los Fundamentos de JavaScript"
          description="Aprende a controlar el flujo de un programa y a utilizar JavaScript para crear comportamientos dinámicos en sitios web."
          duration="1.5 Horas"
          credits="1.5 créditos"
          buttonText="Solicitar →"
          isFavorite={false}
        />

        <ServiceCard
          authorName="Verónica Sánchez"
          authorRole="Certificada C1 Cambridge"
          rating="4.9"
          reviewsCount="24 reseñas"
          title="Conversación en Inglés B2: Entrevistas Técnicas"
          description="Curso de conversación B2 en tecnología para ganar fluidez y naturalidad en entornos profesionales globales."
          duration="1.0 Hora"
          credits="1.0 crédito"
          buttonText="Solicitar →"
          isFavorite={true}
        />
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
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 9,
    fontSize: 12,
    color: '#111827',
  },
  clearBtn: {
    padding: 4,
  },
  clearIcon: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  promptBanner: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 14,
    padding: 14,
    marginVertical: 10,
    alignItems: 'center',
  },
  promptTitle: {
    fontSize: 12.5,
    fontWeight: '800',
    color: '#1E3A8A',
    marginBottom: 2,
    textAlign: 'center',
  },
  promptSubtitle: {
    fontSize: 10.5,
    color: '#3B82F6',
    textAlign: 'center',
    marginBottom: 8,
  },
  customRequestBtn: {
    backgroundColor: '#4338CA',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  customRequestBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginTop: 10,
    marginBottom: 6,
  },
});