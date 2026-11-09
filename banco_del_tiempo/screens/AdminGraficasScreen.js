import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import FilterPills from '../components/FilterPills';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminGraficasScreen() {
  const timePeriods = ['Semana', 'Mes', 'Cuatrimestre', 'Año'];

  const weeklyData = [
    { day: 'Lun', offered: 32, requested: 24 },
    { day: 'Mar', offered: 48, requested: 40 },
    { day: 'Mié', offered: 60, requested: 52 },
    { day: 'Jue', offered: 42, requested: 36 },
    { day: 'Vie', offered: 70, requested: 62 },
    { day: 'Sáb', offered: 54, requested: 48 },
    { day: 'Dom', offered: 38, requested: 30 },
  ];

  const topCategories = [
    { rank: '1', name: 'Programación y Software', hours: '18 horas', percent: '90%', color: '#4338CA' },
    { rank: '2', name: 'Idiomas (Inglés / Francés)', hours: '12 horas', percent: '65%', color: '#3B82F6' },
    { rank: '3', name: 'Matemáticas y Ciencias', hours: '8 horas', percent: '42%', color: '#6366F1' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Gráficas y Estadísticas"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageSubtitle}>
          Visualiza el movimiento de horas, intercambios y servicios en la comunidad.
        </Text>

        <FilterPills options={timePeriods} selected="Semana" />

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Horas de Servicios</Text>
          <Text style={styles.chartSubtitle}>
            Distribución semanal de intercambio de tiempo
          </Text>

          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#4338CA' }]} />
              <Text style={styles.legendText}>Horas Ofrecidas</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
              <Text style={styles.legendText}>Horas Solicitadas</Text>
            </View>
          </View>

          <View style={styles.barsContainer}>
            {weeklyData.map((d, idx) => (
              <View key={idx} style={styles.barGroup}>
                <View style={styles.barPair}>
                  <View style={[styles.barCol, { height: d.offered, backgroundColor: '#4338CA' }]} />
                  <View style={[styles.barCol, { height: d.requested, backgroundColor: '#F59E0B' }]} />
                </View>
                <Text style={styles.dayLabel}>{d.day}</Text>
              </View>
            ))}
          </View>

          <View style={styles.exportRow}>
            <TouchableOpacity style={styles.exportBtn} activeOpacity={0.7}>
              <Text style={styles.exportBtnText}>🖼️ Descargar Imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportBtn} activeOpacity={0.7}>
              <Text style={styles.exportBtnText}>📊 Descargar Datos (.csv)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Top Categorías Más Solicitadas</Text>

          <View style={styles.rankingList}>
            {topCategories.map((cat) => (
              <View key={cat.rank} style={styles.rankingItem}>
                <View style={styles.rankingTopRow}>
                  <View style={styles.rankNameRow}>
                    <Text style={styles.rankNumber}>{cat.rank}.</Text>
                    <Text style={styles.rankName}>{cat.name}</Text>
                  </View>
                  <Text style={styles.rankHours}>{cat.hours}</Text>
                </View>

                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: cat.percent, backgroundColor: cat.color }]} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <AdminBottomTabBar activeTab="stats" />
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
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 14,
    marginVertical: 6,
  },
  chartTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
  },
  chartSubtitle: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
    marginBottom: 8,
  },
  legendRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  legendText: {
    fontSize: 9.5,
    color: '#6B7280',
    fontWeight: '600',
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 4,
  },
  barGroup: {
    alignItems: 'center',
    flex: 1,
  },
  barPair: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
  },
  barCol: {
    width: 7,
    borderRadius: 3,
  },
  dayLabel: {
    fontSize: 9,
    color: '#9CA3AF',
    marginTop: 6,
  },
  exportRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  exportBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  exportBtnText: {
    fontSize: 9.5,
    fontWeight: '700',
    color: '#374151',
  },
  rankingList: {
    marginTop: 8,
  },
  rankingItem: {
    marginVertical: 6,
  },
  rankingTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  rankNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankNumber: {
    fontSize: 11,
    fontWeight: '800',
    color: '#4338CA',
    marginRight: 4,
  },
  rankName: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1F2937',
  },
  rankHours: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6B7280',
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});