import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WalletCard from '../components/WalletCard';
import BottomTabBar from '../components/BottomTabBar';

export default function InicioScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.statusBarMock}>
          <Text style={styles.timeText}>11:45</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.statusIconText}>📶 🛜 🔋</Text>
          </View>
        </View>

        <View style={styles.userRow}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <View>
            <Text style={styles.greetingPre}>HOLA DE NUEVO!</Text>
            <Text style={styles.userName}>Nombre del usuario</Text>
          </View>
        </View>

        <Text style={styles.motivationalQuestion}>
          ¿Qué te gustaría enseñar o aprender el día de hoy?
        </Text>

        <WalletCard hours="5.0" equivalence="1 hr = 1 crédito" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.actionCard, styles.publishCard]}>
          <View style={styles.badgeWrapper}>
            <View style={styles.cardTopBadge}>
              <Text style={styles.cardTopBadgeText}>Gana y crece con tus talentos</Text>
            </View>
          </View>
          <Text style={styles.cardTitleLight}>Publicar un Servicio</Text>
          <Text style={styles.cardDescLight}>
            Comparte tu conocimiento con la comunidad.
          </Text>
          <TouchableOpacity style={styles.whiteBtn} activeOpacity={0.8}>
            <Text style={styles.whiteBtnText}>+ Crear nuevo Servicio</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.actionCard, styles.requestCard]}>
          <View style={styles.badgeWrapper}>
            <View style={[styles.cardTopBadge, styles.badgeMint]}>
              <Text style={styles.badgeMintText}>Aprende lo que quieras cuando quieras</Text>
            </View>
          </View>
          <Text style={styles.cardTitleDark}>Solicitar un Servicio</Text>
          <Text style={styles.cardDescDark}>
            Encuentra la clase ideal según tu nivel y presupuesto.
          </Text>
          <TouchableOpacity style={styles.darkBtn} activeOpacity={0.8}>
            <Text style={styles.darkBtnText}>Solicitar servicios específicos</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.actionCard, styles.exploreCard]}>
          <View style={styles.badgeWrapper}>
            <View style={[styles.cardTopBadge, styles.badgePurpleSoft]}>
              <Text style={styles.cardTopBadgeText}>Descubre un mundo nuevo</Text>
            </View>
          </View>
          <Text style={styles.cardTitleLight}>Explorar servicios</Text>
          <Text style={styles.cardDescLight}>
            Navega por el catálogo completo de servicios disponibles ofrecidos por otros usuarios de la comunidad.
          </Text>
          <TouchableOpacity style={styles.outlineWhiteBtn} activeOpacity={0.8}>
            <Text style={styles.outlineWhiteBtnText}>Explorar servicios disponibles</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
  },
  statusBarMock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarIcon: {
    fontSize: 18,
  },
  greetingPre: {
    fontSize: 10,
    fontWeight: '800',
    color: '#4338CA',
    letterSpacing: 0.8,
  },
  userName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  motivationalQuestion: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  actionCard: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  publishCard: {
    backgroundColor: '#4338CA',
  },
  requestCard: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  exploreCard: {
    backgroundColor: '#3730A3',
  },
  badgeWrapper: {
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cardTopBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  cardTopBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  badgeMint: {
    backgroundColor: '#D1FAE5',
  },
  badgeMintText: {
    color: '#065F46',
    fontSize: 9,
    fontWeight: '700',
  },
  badgePurpleSoft: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardTitleLight: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardDescLight: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 11,
    lineHeight: 15,
    marginBottom: 12,
  },
  cardTitleDark: {
    color: '#064E3B',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardDescDark: {
    color: '#047857',
    fontSize: 11,
    lineHeight: 15,
    marginBottom: 12,
  },
  whiteBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  whiteBtnText: {
    color: '#4338CA',
    fontSize: 12,
    fontWeight: '800',
  },
  darkBtn: {
    backgroundColor: '#111827',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  darkBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  outlineWhiteBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  outlineWhiteBtnText: {
    color: '#3730A3',
    fontSize: 12,
    fontWeight: '800',
  },
});