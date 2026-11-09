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
import AdminBottomTabBar from '../components/AdminBottomTabBar';

export default function AdminUsuariosScreen() {
  const [selectedTab, setSelectedTab] = useState('todos');

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Administración de Usuarios"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageSubtitle}>Auditoría general de usuarios</Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por nombre, correo..."
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity style={styles.newUserBtn} activeOpacity={0.8}>
            <Text style={styles.newUserBtnText}>+ Nuevo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterTabsRow}>
          <TouchableOpacity
            style={[styles.filterTab, selectedTab === 'todos' && styles.filterTabActive]}
            onPress={() => setSelectedTab('todos')}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterTabText, selectedTab === 'todos' && styles.filterTabTextActive]}>
              Todos (1,200)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterTab, selectedTab === 'activos' && styles.filterTabActive]}
            onPress={() => setSelectedTab('activos')}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterTabText, selectedTab === 'activos' && styles.filterTabTextActive]}>
              Activos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterTab, selectedTab === 'reportes' && styles.filterTabActive]}
            onPress={() => setSelectedTab('reportes')}
            activeOpacity={0.7}
          >
            <Text style={[styles.filterTabText, selectedTab === 'reportes' && styles.filterTabTextActive]}>
              Con Reportes / Malas R.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userCard}>
          <View style={styles.cardHeader}>
            <View style={styles.avatarRow}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarIcon}>👤</Text>
              </View>
              <View>
                <Text style={styles.userName}>Roberto Terán Cano</Text>
                <Text style={styles.userCareer}>Ing. Software</Text>
              </View>
            </View>
            <View style={styles.statusPillClean}>
              <Text style={styles.statusPillCleanText}>Sin reportes</Text>
            </View>
          </View>

          <View style={styles.metricsRow}>
            <View style={styles.metricBadgePurple}>
              <Text style={styles.metricLabel}>Créditos Actuales:</Text>
              <Text style={styles.metricValue}>+4.5 hrs</Text>
            </View>

            <View style={styles.metricBadgeGray}>
              <Text style={styles.metricLabel}>Servicios:</Text>
              <Text style={styles.metricValueGray}>2 Publ. • 3 Solic.</Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
              <Text style={styles.editBtnText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.historyBtn} activeOpacity={0.8}>
              <Text style={styles.historyBtnText}>Ver Historial</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.userCard, styles.userCardWarning]}>
          <View style={styles.cardHeader}>
            <View style={styles.avatarRow}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarIcon}>👤</Text>
              </View>
              <View>
                <Text style={styles.userName}>Bernardo Sánchez</Text>
                <Text style={styles.userCareer}>Diseñador Gráfico</Text>
              </View>
            </View>
            <View style={styles.statusPillWarning}>
              <Text style={styles.statusPillWarningText}>En observación</Text>
            </View>
          </View>

          <View style={styles.metricsRow}>
            <View style={styles.metricBadgeDanger}>
              <Text style={styles.metricLabelDanger}>Saldo Deudor:</Text>
              <Text style={styles.metricValueDanger}>-2.0 hrs</Text>
            </View>

            <View style={styles.metricBadgeGray}>
              <Text style={styles.metricLabel}>Servicios:</Text>
              <Text style={styles.metricValueGray}>2 Publ. • 0 Solic.</Text>
            </View>
          </View>

          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>⚠️ 5 malas reseñas</Text>
            <Text style={styles.alertDesc}>
              El usuario acumuló reportes continuos por inasistencia sin justificación previa.
            </Text>
          </View>

          <TouchableOpacity style={styles.dangerDetailBtn} activeOpacity={0.8}>
            <Text style={styles.dangerDetailBtnText}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <AdminBottomTabBar activeTab="users" />
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
    fontSize: 10.5,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 8,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 6,
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
  newUserBtn: {
    backgroundColor: '#4338CA',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  newUserBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  filterTabsRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 8,
  },
  filterTab: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  filterTabActive: {
    backgroundColor: '#4338CA',
  },
  filterTabText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4B5563',
  },
  filterTabTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginVertical: 6,
  },
  userCardWarning: {
    borderColor: '#FCA5A5',
    backgroundColor: '#FFFBFB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarIcon: {
    fontSize: 16,
  },
  userName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#111827',
  },
  userCareer: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 1,
  },
  statusPillClean: {
    backgroundColor: '#EFF6FF',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  statusPillCleanText: {
    color: '#2563EB',
    fontSize: 9.5,
    fontWeight: '700',
  },
  statusPillWarning: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  statusPillWarningText: {
    color: '#DC2626',
    fontSize: 9.5,
    fontWeight: '700',
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 8,
  },
  metricBadgePurple: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    padding: 6,
    borderRadius: 8,
  },
  metricBadgeDanger: {
    flex: 1,
    backgroundColor: '#FEE2E2',
    padding: 6,
    borderRadius: 8,
  },
  metricBadgeGray: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 6,
    borderRadius: 8,
  },
  metricLabel: {
    fontSize: 9,
    color: '#6B7280',
  },
  metricLabelDanger: {
    fontSize: 9,
    color: '#DC2626',
  },
  metricValue: {
    fontSize: 11,
    fontWeight: '800',
    color: '#4338CA',
    marginTop: 1,
  },
  metricValueDanger: {
    fontSize: 11,
    fontWeight: '800',
    color: '#DC2626',
    marginTop: 1,
  },
  metricValueGray: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#374151',
    marginTop: 1,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
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
  historyBtn: {
    flex: 1,
    backgroundColor: '#4338CA',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
  },
  historyBtnText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  alertBox: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 8,
    padding: 8,
    marginVertical: 6,
  },
  alertTitle: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#B91C1C',
  },
  alertDesc: {
    fontSize: 9.5,
    color: '#991B1B',
    marginTop: 2,
    lineHeight: 13,
  },
  dangerDetailBtn: {
    backgroundColor: '#991B1B',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    marginTop: 4,
  },
  dangerDetailBtnText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '700',
  },
});