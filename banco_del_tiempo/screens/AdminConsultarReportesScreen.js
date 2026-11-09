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
import FilterPills from '../components/FilterPills';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminConsultarReportesScreen() {
  const filterPills = ['Todos (18)', 'Balance', 'Usuarios', 'Transferencias'];

  const reports = [
    {
      id: '1',
      tag: 'REPORTE DE BALANCE',
      title: 'Resumen de horas y créditos',
      stat1: { value: '1,000', label: 'Horas validadas' },
      stat2: { value: '1 hr = 1 crédito', label: 'Equivalencia' },
      stat3: { value: '280 usuarios', label: 'Participantes' },
      stat4: { value: '1 Oct. 2026', label: 'Fecha generación' },
      ready: true,
    },
    {
      id: '2',
      tag: 'REPORTE DE DEMANDA',
      title: 'Categorías más pedidas',
      status: 'En preparación...',
      ready: false,
    },
    {
      id: '3',
      tag: 'REPORTE GENERAL',
      title: 'Lista general de usuarios',
      stat1: { value: '1,000', label: 'Horas validadas' },
      stat2: { value: '1 hr = 1 crédito', label: 'Equivalencia' },
      stat3: { value: '280 usuarios', label: 'Participantes' },
      stat4: { value: '1 Oct. 2026', label: 'Fecha generación' },
      ready: true,
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
          <TouchableOpacity style={styles.subTab} activeOpacity={0.7}>
            <Text style={styles.subTabText}>Generar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subTab, styles.subTabActive]} activeOpacity={0.7}>
            <Text style={[styles.subTabText, styles.subTabTextActive]}>Consultar Reportes</Text>
          </TouchableOpacity>
        </View>

        <FilterPills options={filterPills} selected="Todos (18)" />

        {reports.map((rep) => (
          <View key={rep.id} style={styles.reportCard}>
            <Text style={styles.reportTag}>{rep.tag}</Text>
            <Text style={styles.reportTitle}>{rep.title}</Text>

            {rep.ready ? (
              <>
                <View style={styles.gridStats}>
                  <View style={styles.gridStatItem}>
                    <Text style={styles.gridStatVal}>{rep.stat1.value}</Text>
                    <Text style={styles.gridStatLab}>{rep.stat1.label}</Text>
                  </View>
                  <View style={styles.gridStatItem}>
                    <Text style={styles.gridStatVal}>{rep.stat2.value}</Text>
                    <Text style={styles.gridStatLab}>{rep.stat2.label}</Text>
                  </View>
                  <View style={styles.gridStatItem}>
                    <Text style={styles.gridStatVal}>{rep.stat3.value}</Text>
                    <Text style={styles.gridStatLab}>{rep.stat3.label}</Text>
                  </View>
                  <View style={styles.gridStatItem}>
                    <Text style={styles.gridStatVal}>{rep.stat4.value}</Text>
                    <Text style={styles.gridStatLab}>{rep.stat4.label}</Text>
                  </View>
                </View>

                <View style={styles.buttonsRow}>
                  <TouchableOpacity style={styles.summaryBtn} activeOpacity={0.8}>
                    <Text style={styles.summaryBtnText}>Ver Resumen</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.downloadPdfBtn} activeOpacity={0.7}>
                    <Text style={styles.downloadPdfText}>Descargar PDF</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={styles.inPrepContainer}>
                <Text style={styles.inPrepText}>⏳ {rep.status}</Text>
              </View>
            )}
          </View>
        ))}
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
  reportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginVertical: 6,
  },
  reportTag: {
    fontSize: 9,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.5,
  },
  reportTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginTop: 2,
    marginBottom: 8,
  },
  gridStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  gridStatItem: {
    width: '48%',
  },
  gridStatVal: {
    fontSize: 11,
    fontWeight: '800',
    color: '#111827',
  },
  gridStatLab: {
    fontSize: 9,
    color: '#6B7280',
    marginTop: 1,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  summaryBtn: {
    flex: 1,
    backgroundColor: '#4338CA',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
  },
  summaryBtnText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '700',
  },
  downloadPdfBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  downloadPdfText: {
    color: '#374151',
    fontSize: 10.5,
    fontWeight: '700',
  },
  inPrepContainer: {
    backgroundColor: '#FFFBEB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  inPrepText: {
    fontSize: 11,
    color: '#B45309',
    fontWeight: '700',
  },
});