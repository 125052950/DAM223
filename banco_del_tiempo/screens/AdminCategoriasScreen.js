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
import FilterPills from '../components/FilterPills';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminCategoriasScreen() {
  const categoryFilters = ['Todas (20)', 'Activas', 'Con alta demanda'];

  const categoriesData = [
    {
      id: '1',
      name: 'Software',
      tag: 'Alta Demanda',
      servicesCount: '28 servicios',
      usersCount: '10 usuarios',
      skills: ['Fundamentos JavaScript', 'Python', 'Bases de Datos', 'HTML & CSS'],
    },
    {
      id: '2',
      name: 'Idiomas',
      tag: 'Alta Demanda',
      servicesCount: '25 servicios',
      usersCount: '18 usuarios',
      skills: ['Inglés Conversacional', 'Francés B1', 'Alemán A2'],
    },
    {
      id: '3',
      name: 'Biología & Ciencias',
      tag: 'Media',
      servicesCount: '12 servicios',
      usersCount: '8 usuarios',
      skills: ['Genética Básica', 'Bioquímica', 'Microbiología'],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Gestión de Categorías"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageSubtitle}>
          Organización del catálogo de categorías y áreas de conocimiento del Banco de Tiempo y Talento.
        </Text>

        <View style={styles.summaryBanner}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryIcon}>📁</Text>
            <Text style={styles.summaryValue}>8</Text>
            <Text style={styles.summaryLabel}>Categorías Activas</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryIcon}>✨</Text>
            <Text style={styles.summaryValue}>118</Text>
            <Text style={styles.summaryLabel}>Servicios Asociados</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryIcon}>👥</Text>
            <Text style={styles.summaryValue}>130</Text>
            <Text style={styles.summaryLabel}>Usuarios Activos</Text>
          </View>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar categoría..."
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity style={styles.newCategoryBtn} activeOpacity={0.8}>
            <Text style={styles.newCategoryBtnText}>+ Nueva</Text>
          </TouchableOpacity>
        </View>

        <FilterPills options={categoryFilters} selected="Todas (20)" />

        {categoriesData.map((cat) => (
          <View key={cat.id} style={styles.categoryCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <View style={styles.folderIconCircle}>
                  <Text style={styles.folderIcon}>📁</Text>
                </View>
                <Text style={styles.categoryName}>{cat.name}</Text>
              </View>
              <View style={styles.highDemandBadge}>
                <Text style={styles.highDemandText}>{cat.tag}</Text>
              </View>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statChip}>
                <Text style={styles.statChipNumber}>{cat.servicesCount}</Text>
                <Text style={styles.statChipLabel}>Publicados</Text>
              </View>
              <View style={styles.statChip}>
                <Text style={styles.statChipNumber}>{cat.usersCount}</Text>
                <Text style={styles.statChipLabel}>Activos</Text>
              </View>
            </View>

            <Text style={styles.skillsTitle}>SERVICIOS ACTIVOS</Text>
            <View style={styles.skillsTagRow}>
              {cat.skills.map((skill, i) => (
                <View key={i} style={styles.skillPill}>
                  <Text style={styles.skillPillText}>{skill}</Text>
                </View>
              ))}
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
                <Text style={styles.editBtnText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.associateBtn} activeOpacity={0.8}>
                <Text style={styles.associateBtnText}>Asociar Servicio</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <AdminBottomTabBar activeTab="categories" />
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
  pageSubtitle: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'center',
    marginVertical: 4,
    lineHeight: 14,
  },
  summaryBanner: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryIcon: {
    fontSize: 13,
    marginBottom: 2,
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111827',
  },
  summaryLabel: {
    fontSize: 8.5,
    color: '#6B7280',
    marginTop: 2,
    textAlign: 'center',
  },
  summaryDivider: {
    width: 1,
    backgroundColor: '#F3F4F6',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 4,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  searchIcon: {
    fontSize: 13,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 7,
    fontSize: 11,
    color: '#111827',
  },
  newCategoryBtn: {
    backgroundColor: '#4338CA',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  newCategoryBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginVertical: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  folderIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  folderIcon: {
    fontSize: 14,
  },
  categoryName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
  },
  highDemandBadge: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  highDemandText: {
    color: '#B45309',
    fontSize: 9.5,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  statChip: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  statChipNumber: {
    fontSize: 11,
    fontWeight: '800',
    color: '#111827',
  },
  statChipLabel: {
    fontSize: 8.5,
    color: '#6B7280',
  },
  skillsTitle: {
    fontSize: 9,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  skillsTagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 10,
  },
  skillPill: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 6,
  },
  skillPillText: {
    fontSize: 9.5,
    fontWeight: '600',
    color: '#4338CA',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  editBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  editBtnText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#374151',
  },
  associateBtn: {
    flex: 1,
    backgroundColor: '#4338CA',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
  },
  associateBtnText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});