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
import BottomTabBar from '../components/BottomTabBar';

export default function PerfilHistorialScreen() {
  const userInfo = [
    { label: 'Nombre Completo', value: 'Roberto Terán Cano' },
    { label: 'Usuario', value: '@robert_123' },
    { label: 'Correo', value: 'roberto@gmail.com' },
    { label: 'Contraseña', value: '••••••••' },
  ];

  const impartedCourses = [
    {
      id: '1',
      title: 'Taller UI/UX con Figma',
      category: 'Diseño',
      deltaHours: '+1.0 hr',
      desc: 'Taller de uso básico para trabajar con Figma.',
    },
    {
      id: '2',
      title: 'Taller UI/UX con Figma',
      category: 'Diseño',
      deltaHours: '+1.0 hr',
      desc: 'Taller de uso básico para trabajar con Figma.',
    },
  ];

  const takenCourses = [
    {
      id: '3',
      title: 'Taller UI/UX con Figma',
      category: 'Diseño',
      deltaHours: '-1.0 hr',
      desc: 'Taller de uso básico para trabajar con Figma.',
    },
    {
      id: '4',
      title: 'Taller UI/UX con Figma',
      category: 'Diseño',
      deltaHours: '-1.5 hrs',
      desc: 'Taller de uso básico para trabajar con Figma.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Perfil Historial"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarIcon}>👤</Text>
            </View>
          </View>
          <Text style={styles.profileName}>Roberto Terán Cano</Text>
          <View style={styles.roleTag}>
            <Text style={styles.roleTagText}>Ingeniería en Software</Text>
          </View>
        </View>

        <View style={styles.fieldsContainer}>
          {userInfo.map((item, index) => (
            <View key={index} style={styles.fieldRow}>
              <View>
                <Text style={styles.fieldLabel}>{item.label}</Text>
                <Text style={styles.fieldValue}>{item.value}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.editBtn}>
                <Text style={styles.editIcon}>✏️</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.walletBox}>
          <View style={styles.walletHeader}>
            <Text style={styles.walletIcon}>💳</Text>
            <Text style={styles.walletTitle}>Billetera de Tiempo</Text>
          </View>
          <Text style={styles.walletSub}>Saldo disponible</Text>
          <Text style={styles.walletHours}>5.0 <Text style={styles.walletHoursUnit}>hrs de tiempo</Text></Text>
          <Text style={styles.walletNotice}>1 hora de servicio = 1 crédito de tiempo</Text>
        </View>

        <View style={styles.historySectionHeader}>
          <Text style={styles.historySectionIcon}>🔄</Text>
          <Text style={styles.historySectionTitle}>Historial de Intercambios</Text>
        </View>

        <Text style={styles.subsectionTitle}>• Cursos Impartidos <Text style={styles.subRoleText}>(Como Prestador)</Text></Text>
        {impartedCourses.map((item) => (
          <View key={item.id} style={styles.historyCard}>
            <View style={styles.historyCardHeader}>
              <View>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyCategory}>{item.category}</Text>
              </View>
              <View style={[styles.deltaBadge, styles.badgePositive]}>
                <Text style={styles.badgePositiveText}>{item.deltaHours}</Text>
              </View>
            </View>
            <Text style={styles.historyDesc}>{item.desc}</Text>
            <TouchableOpacity style={styles.viewMoreRow} activeOpacity={0.7}>
              <Text style={styles.viewMoreText}>Ver más →</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={[styles.subsectionTitle, { marginTop: 14 }]}>
          • Cursos Tomados <Text style={styles.subRoleText}>(Como Solicitante)</Text>
        </Text>
        {takenCourses.map((item) => (
          <View key={item.id} style={styles.historyCard}>
            <View style={styles.historyCardHeader}>
              <View>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyCategory}>{item.category}</Text>
              </View>
              <View style={[styles.deltaBadge, styles.badgeNegative]}>
                <Text style={styles.badgeNegativeText}>{item.deltaHours}</Text>
              </View>
            </View>
            <Text style={styles.historyDesc}>{item.desc}</Text>
            <TouchableOpacity style={styles.viewMoreRow} activeOpacity={0.7}>
              <Text style={styles.viewMoreText}>Ver más →</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <BottomTabBar activeTab="profile" />
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
  profileHeader: {
    alignItems: 'center',
    marginVertical: 12,
  },
  avatarContainer: {
    marginBottom: 6,
  },
  avatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#4338CA',
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIcon: {
    fontSize: 30,
  },
  profileName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111827',
  },
  roleTag: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 4,
  },
  roleTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4338CA',
  },
  fieldsContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  fieldLabel: {
    fontSize: 9.5,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  fieldValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 2,
  },
  editBtn: {
    padding: 6,
  },
  editIcon: {
    fontSize: 12,
  },
  walletBox: {
    backgroundColor: '#4338CA',
    borderRadius: 14,
    padding: 14,
    marginVertical: 10,
  },
  walletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  walletIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  walletTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  walletSub: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 10,
  },
  walletHours: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 2,
  },
  walletHoursUnit: {
    fontSize: 13,
    fontWeight: '600',
  },
  walletNotice: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 9.5,
    marginTop: 4,
  },
  historySectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  historySectionIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  historySectionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
  },
  subsectionTitle: {
    fontSize: 11.5,
    fontWeight: '800',
    color: '#374151',
    marginVertical: 6,
  },
  subRoleText: {
    fontWeight: '500',
    color: '#6B7280',
    fontSize: 10,
  },
  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    marginVertical: 4,
  },
  historyCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  historyTitle: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#111827',
  },
  historyCategory: {
    fontSize: 9.5,
    color: '#4338CA',
    marginTop: 1,
  },
  deltaBadge: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  badgePositive: {
    backgroundColor: '#DCFCE7',
  },
  badgePositiveText: {
    color: '#15803D',
    fontSize: 10,
    fontWeight: '700',
  },
  badgeNegative: {
    backgroundColor: '#FEE2E2',
  },
  badgeNegativeText: {
    color: '#B91C1C',
    fontSize: 10,
    fontWeight: '700',
  },
  historyDesc: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 4,
  },
  viewMoreRow: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  viewMoreText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4338CA',
  },
});