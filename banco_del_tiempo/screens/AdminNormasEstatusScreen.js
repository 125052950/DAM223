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

export default function AdminNormasEstatusScreen() {
  const [selectedTab, setSelectedTab] = useState('reportes');

  const incidents = [
    {
      id: '1',
      name: 'Francisco López',
      career: 'Usuario Comunitario',
      badge: '3 Malas Reseñas',
      badgeType: 'danger',
      description: 'Usuario reportado por cobro indebido fuera de la plataforma y cancelación de última hora sin aviso previo.',
    },
    {
      id: '2',
      name: 'Jesús García',
      career: 'Solicitante de Tiempo',
      badge: '2 Reportes Activos',
      badgeType: 'warning',
      description: 'El usuario solicitó un servicio y no realizó el abono correspondiente acordado previamente en el tiempo fijado.',
    },
    {
      id: '3',
      name: 'Esteban Morales',
      career: 'Prestador de Servicios',
      badge: '1 Reporte por Incumplimiento',
      badgeType: 'warning',
      description: 'No asistió a la clase pactada en dos ocasiones consecutivas sin previo aviso al solicitante.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Normas y Estatus"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageSubtitle}>
          Auditoría de usuarios con reportes y malas reseñas
        </Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por usuario, reporte..."
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity style={styles.newBtn} activeOpacity={0.8}>
            <Text style={styles.newBtnText}>+ Nueva</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'todos' && styles.tabActive]}
            onPress={() => setSelectedTab('todos')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, selectedTab === 'todos' && styles.tabTextActive]}>
              Todos (200)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'activas' && styles.tabActive]}
            onPress={() => setSelectedTab('activas')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, selectedTab === 'activas' && styles.tabTextActive]}>
              Activas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'reportes' && styles.tabActive]}
            onPress={() => setSelectedTab('reportes')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, selectedTab === 'reportes' && styles.tabTextActive]}>
              Con Reportes / Malas Reseñas
            </Text>
          </TouchableOpacity>
        </View>

        {incidents.map((item) => (
          <View key={item.id} style={styles.incidentCard}>
            <View style={styles.cardHeader}>
              <View style={styles.avatarRow}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarIcon}>👤</Text>
                </View>
                <View>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userCareer}>{item.career}</Text>
                </View>
              </View>

              <View style={styles.badgeDanger}>
                <Text style={styles.badgeDangerText}>{item.badge}</Text>
              </View>
            </View>

            <View style={styles.quoteBox}>
              <Text style={styles.quoteText}>"{item.description}"</Text>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.suspendBtn} activeOpacity={0.8}>
                <Text style={styles.suspendBtnText}>Suspender</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.approveBtn} activeOpacity={0.7}>
                <Text style={styles.approveBtnText}>Aprobar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.historyBtn} activeOpacity={0.7}>
                <Text style={styles.historyBtnText}>Ver Historial</Text>
              </TouchableOpacity>
            </View>
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
  newBtn: {
    backgroundColor: '#4338CA',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  newBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 8,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  tabActive: {
    backgroundColor: '#4338CA',
  },
  tabText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4B5563',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  incidentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    padding: 12,
    marginVertical: 6,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarIcon: {
    fontSize: 15,
  },
  userName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#111827',
  },
  userCareer: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 1,
  },
  badgeDanger: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  badgeDangerText: {
    color: '#DC2626',
    fontSize: 9.5,
    fontWeight: '700',
  },
  quoteBox: {
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#EF4444',
  },
  quoteText: {
    fontSize: 10,
    color: '#991B1B',
    lineHeight: 14,
    fontStyle: 'italic',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  suspendBtn: {
    flex: 1,
    backgroundColor: '#DC2626',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
  },
  suspendBtnText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  approveBtn: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
  },
  approveBtnText: {
    color: '#374151',
    fontSize: 10,
    fontWeight: '700',
  },
  historyBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  historyBtnText: {
    color: '#4338CA',
    fontSize: 10,
    fontWeight: '700',
  },
});