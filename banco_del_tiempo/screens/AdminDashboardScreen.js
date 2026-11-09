import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FilterPills from '../components/FilterPills';
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminDashboardScreen() {
  const timeFilters = ['Hoy', 'Esta Semana', 'Este Mes', 'Último año'];

  const kpis = [
    { value: '1,280', label: 'Comunidad', sub: '1,280 miembros activos', icon: '👥' },
    { value: '1,480', label: 'Horas Donadas', sub: 'Horas validadas', icon: '⏳' },
    { value: '3,261', label: 'Reseñas', sub: 'Feedback publicado', icon: '💬' },
    { value: '148', label: 'Habilidades', sub: 'Cursos y servicios', icon: '✨' },
  ];

  const controlCenters = [
    { title: 'Gestión de Categorías', subtitle: '8 categorías registradas', icon: '📁' },
    { title: 'Administración de Usuarios', subtitle: '1,280 miembros en el sistema', icon: '👥' },
    { title: 'Gráficas y Estadísticas', subtitle: 'Tendencias del intercambio por categoría', icon: '📊' },
    { title: 'Reportes y Auditoría', subtitle: 'Generación de reportes y auditoría', icon: '📄' },
  ];

  const recentActivity = [
    {
      title: 'Nuevo usuario registrado',
      subtitle: 'Ing. en Software • Hace 3 min',
      icon: '👤',
    },
    {
      title: 'Validación de créditos',
      subtitle: 'Roberto aprobó 2 horas y concedió crédito • Hace 8 min',
      icon: '✅',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.statusBarMock}>
          <Text style={styles.timeText}>11:45</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.statusIconText}>📶 🛜 🔋</Text>
          </View>
        </View>

        <Text style={styles.superTitle}>BANCO DE TIEMPO Y TALENTO</Text>
        <Text style={styles.mainTitle}>Dashboard Administrativo</Text>
        <Text style={styles.subTitle}>Visión general del Banco de Tiempo y Talento</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <FilterPills options={timeFilters} selected="Este Mes" />

        <View style={styles.heroCard}>
          <Text style={styles.heroPre}>CAPITAL SOCIAL CIRCULANTE</Text>
          <Text style={styles.heroMain}>
            3,450.0 <Text style={styles.heroMainUnit}>Horas</Text>
          </Text>
          <View style={styles.heroDivider} />
          <View style={styles.heroSubRow}>
            <View style={styles.heroSubCol}>
              <Text style={styles.heroSubVal}>42</Text>
              <Text style={styles.heroSubLab}>servicios activos</Text>
            </View>
            <View style={styles.heroSubCol}>
              <Text style={styles.heroSubVal}>98.4%</Text>
              <Text style={styles.heroSubLab}>éxito (Tasa de validación)</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionHeader}>INDICADORES CLAVE DE DESEMPEÑO</Text>
        <View style={styles.kpiGrid}>
          {kpis.map((kpi, idx) => (
            <View key={idx} style={styles.kpiCard}>
              <Text style={styles.kpiIcon}>{kpi.icon}</Text>
              <Text style={styles.kpiValue}>{kpi.value}</Text>
              <Text style={styles.kpiLabel}>{kpi.label}</Text>
              <Text style={styles.kpiSub}>{kpi.sub}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionHeader}>CENTROS DE CONTROL</Text>
        <View style={styles.controlCenterGroup}>
          {controlCenters.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.controlRow} activeOpacity={0.7}>
              <View style={styles.controlLeft}>
                <View style={styles.controlIconCircle}>
                  <Text style={styles.controlIcon}>{item.icon}</Text>
                </View>
                <View>
                  <Text style={styles.controlTitle}>{item.title}</Text>
                  <Text style={styles.controlSubtitle}>{item.subtitle}</Text>
                </View>
              </View>
              <Text style={styles.controlChevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionHeader}>ACTIVIDAD EN TIEMPO REAL</Text>
        <View style={styles.activityGroup}>
          {recentActivity.map((act, idx) => (
            <View key={idx} style={styles.activityRow}>
              <View style={styles.activityIconCircle}>
                <Text style={styles.activityIcon}>{act.icon}</Text>
              </View>
              <View style={styles.activityTextCol}>
                <Text style={styles.activityTitle}>{act.title}</Text>
                <Text style={styles.activitySubtitle}>{act.subtitle}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <AdminBottomTabBar activeTab="dashboard" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  statusBarMock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  statusIconText: {
    fontSize: 10,
    letterSpacing: 2,
  },
  superTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#4338CA',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'center',
    marginTop: 2,
  },
  subTitle: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  heroCard: {
    backgroundColor: '#3730A3',
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
  },
  heroPre: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 9.5,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  heroMain: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    marginVertical: 4,
  },
  heroMainUnit: {
    fontSize: 14,
    fontWeight: '600',
  },
  heroDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 8,
  },
  heroSubRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heroSubCol: {
    alignItems: 'center',
  },
  heroSubVal: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  heroSubLab: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 9.5,
    marginTop: 1,
  },
  sectionHeader: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#4B5563',
    letterSpacing: 0.8,
    marginTop: 14,
    marginBottom: 8,
  },
  kpiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  kpiCard: {
    width: '48.5%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 10,
  },
  kpiIcon: {
    fontSize: 14,
    marginBottom: 2,
  },
  kpiValue: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111827',
  },
  kpiLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    marginTop: 2,
  },
  kpiSub: {
    fontSize: 9,
    color: '#9CA3AF',
    marginTop: 1,
  },
  controlCenterGroup: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    paddingHorizontal: 10,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  controlLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  controlIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  controlIcon: {
    fontSize: 15,
  },
  controlTitle: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#111827',
  },
  controlSubtitle: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 1,
  },
  controlChevron: {
    fontSize: 18,
    color: '#9CA3AF',
    fontWeight: '700',
  },
  activityGroup: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    padding: 10,
    marginTop: 2,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  activityIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  activityIcon: {
    fontSize: 14,
  },
  activityTextCol: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#111827',
  },
  activitySubtitle: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 1,
  },
});