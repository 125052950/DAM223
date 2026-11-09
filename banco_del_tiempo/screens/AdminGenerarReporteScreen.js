import React, { useState } from 'react';
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
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminGenerarReporteScreen() {
  const [selectedType, setSelectedType] = useState('balance');

  const reportTypes = [
    {
      id: 'balance',
      title: 'Balance de Créditos y Horas',
      desc: 'Horas donadas, consumidas y saldo de la comunidad.',
    },
    {
      id: 'actividad',
      title: 'Actividad de Usuarios',
      desc: 'Desglose de intercambios por usuario, calificaciones y sanciones.',
    },
    {
      id: 'categorias',
      title: 'Categorías y Habilidades',
      desc: 'Categorías con mayor oferta vs mayor demanda.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Centro de Reportes"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageSubtitle}>
          Generación y consulta de reportes de horas, intercambios y cumplimiento de las normas.
        </Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por reporte..."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.subTabsContainer}>
          <TouchableOpacity style={[styles.subTab, styles.subTabActive]} activeOpacity={0.7}>
            <Text style={[styles.subTabText, styles.subTabTextActive]}>Generar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subTab} activeOpacity={0.7}>
            <Text style={styles.subTabText}>Consultar Reportes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.configCard}>
          <Text style={styles.cardTitle}>Configuración de Reporte</Text>

          <Text style={styles.fieldSectionLabel}>TIPO DE REPORTE</Text>
          {reportTypes.map((type) => {
            const isSelected = selectedType === type.id;
            return (
              <TouchableOpacity
                key={type.id}
                style={[styles.radioRow, isSelected && styles.radioRowSelected]}
                onPress={() => setSelectedType(type.id)}
                activeOpacity={0.7}
              >
                <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
                  {isSelected ? <View style={styles.radioDot} /> : null}
                </View>
                <View style={styles.radioTextContainer}>
                  <Text style={[styles.radioTitle, isSelected && styles.radioTitleSelected]}>
                    {type.title}
                  </Text>
                  <Text style={styles.radioDesc}>{type.desc}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

          <Text style={[styles.fieldSectionLabel, { marginTop: 14 }]}>PERIODO DE CONSULTA</Text>
          <View style={styles.dateRangeRow}>
            <View style={styles.dateBox}>
              <Text style={styles.calendarIcon}>📅</Text>
              <Text style={styles.dateText}>01 / 04 / 2026</Text>
            </View>
            <Text style={styles.dateSeparator}>—</Text>
            <View style={styles.dateBox}>
              <Text style={styles.calendarIcon}>📅</Text>
              <Text style={styles.dateText}>01 / 04 / 2026</Text>
            </View>
          </View>

          <PrimaryButton
            title="Generar Reporte"
            variant="primary"
            style={styles.generateBtn}
            onPress={() => {}}
          />

          <View style={styles.exportRow}>
            <TouchableOpacity style={styles.exportBtn} activeOpacity={0.7}>
              <Text style={styles.exportIcon}>📄</Text>
              <Text style={styles.exportBtnText}>Descargar PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exportBtn} activeOpacity={0.7}>
              <Text style={styles.exportIcon}>📊</Text>
              <Text style={styles.exportBtnText}>Exportar Excel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <AdminBottomTabBar activeTab="reports" />
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginVertical: 6,
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
  subTabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 3,
    marginVertical: 6,
  },
  subTab: {
    flex: 1,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 6,
  },
  subTabActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  subTabText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  subTabTextActive: {
    color: '#4338CA',
    fontWeight: '800',
  },
  configCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 14,
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  fieldSectionLabel: {
    fontSize: 9.5,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
  },
  radioRowSelected: {
    borderColor: '#4338CA',
    backgroundColor: '#F5F3FF',
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginRight: 10,
  },
  radioCircleSelected: {
    borderColor: '#4338CA',
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4338CA',
  },
  radioTextContainer: {
    flex: 1,
  },
  radioTitle: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#111827',
  },
  radioTitleSelected: {
    color: '#4338CA',
  },
  radioDesc: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 2,
    lineHeight: 13,
  },
  dateRangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  dateBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  calendarIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  dateText: {
    fontSize: 10,
    color: '#374151',
    fontWeight: '600',
  },
  dateSeparator: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  generateBtn: {
    marginTop: 14,
    backgroundColor: '#4338CA',
    paddingVertical: 10,
  },
  exportRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },
  exportBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 7,
    backgroundColor: '#FFFFFF',
  },
  exportIcon: {
    fontSize: 11,
    marginRight: 4,
  },
  exportBtnText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#4B5563',
  },
});