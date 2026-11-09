import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import BottomTabBar from '../components/BottomTabBar';

export default function ConfiguracionScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [serviceRequests, setServiceRequests] = useState(true);
  const [exchangeReminders, setExchangeReminders] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Configuración"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.userCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <View>
            <Text style={styles.userName}>Roberto Terán Cano</Text>
            <Text style={styles.userRole}>Ingeniería en Software</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>APARIENCIA</Text>
        <View style={styles.settingsGroup}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <View style={styles.settingTitleRow}>
                <Text style={styles.settingIcon}>🌙</Text>
                <Text style={styles.settingTitle}>MODO OSCURO</Text>
              </View>
              <Text style={styles.settingDesc}>
                Ajusta el contraste para lectura nocturna.
              </Text>
              <Text style={styles.settingSubDesc}>
                Optimiza la visualización de las interfaces.
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#D1D5DB', true: '#4338CA' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <Text style={styles.sectionHeader}>NOTIFICACIONES DE INTERCAMBIO</Text>
        <View style={styles.settingsGroup}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <View style={styles.settingTitleRow}>
                <Text style={styles.settingIcon}>🔔</Text>
                <Text style={styles.settingTitle}>Solicitudes de servicios</Text>
              </View>
              <Text style={styles.settingDesc}>
                Avisos instantáneos cuando un usuario pida tus servicios.
              </Text>
            </View>
            <Switch
              value={serviceRequests}
              onValueChange={setServiceRequests}
              trackColor={{ false: '#D1D5DB', true: '#4338CA' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <View style={styles.settingTitleRow}>
                <Text style={styles.settingIcon}>⏰</Text>
                <Text style={styles.settingTitle}>Recordatorios de intercambio</Text>
              </View>
              <Text style={styles.settingDesc}>
                Recordatorio para continuar con tu servicio pactado.
              </Text>
            </View>
            <Switch
              value={exchangeReminders}
              onValueChange={setExchangeReminders}
              trackColor={{ false: '#D1D5DB', true: '#4338CA' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar activeTab="settings" />
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
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    marginBottom: 8,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarIcon: {
    fontSize: 18,
  },
  userName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
  },
  userRole: {
    fontSize: 10.5,
    color: '#6B7280',
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.8,
    marginTop: 14,
    marginBottom: 6,
  },
  settingsGroup: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  settingInfo: {
    flex: 1,
    paddingRight: 12,
  },
  settingTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  settingIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  settingTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1F2937',
  },
  settingDesc: {
    fontSize: 10,
    color: '#6B7280',
    lineHeight: 13,
  },
  settingSubDesc: {
    fontSize: 9.5,
    color: '#9CA3AF',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 8,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 20,
  },
  logoutIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  logoutText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#DC2626',
  },
});