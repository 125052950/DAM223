import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import WalletCard from '../components/WalletCard';
import PrimaryButton from '../components/PrimaryButton';
import BottomTabBar from '../components/BottomTabBar';

export default function DetalleServicioScreen() {
  const [activeTab, setActiveTab] = useState('temario');

  const lessons = [
    {
      id: 1,
      title: 'Introducción',
      durationText: 'Lección de introducción a JavaScript',
      desc: 'Aprende sobre los tipos de datos, los métodos integrados y las variables de JavaScript.',
    },
    {
      id: 2,
      title: 'Condicionales',
      durationText: 'Lección de introducción a JavaScript',
      desc: 'Aprende a utilizar la sintaxis de if, else if, else, switch y el operador ternario para controlar el flujo de un programa en JavaScript.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Detalle Servicio"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>Aprende los Fundamentos de JavaScript</Text>

        <View style={styles.instructorRow}>
          <View style={styles.instructorLeft}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarIcon}>👤</Text>
            </View>
            <View>
              <Text style={styles.instructorName}>Ing. Jimena Torres</Text>
              <Text style={styles.instructorCategory}>Categoría: Software</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.shareBtn} activeOpacity={0.7}>
            <Text style={styles.shareIcon}>↗️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statIcon}>🕒</Text>
            <Text style={styles.statMain}>1.5 hrs</Text>
            <Text style={styles.statSub}>1.5 créditos de Tiempo</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statIconStar}>★</Text>
            <Text style={styles.statMain}>4.9</Text>
            <Text style={styles.statSub}>24 reseñas</Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabSegment, activeTab === 'temario' && styles.tabSegmentActive]}
            onPress={() => setActiveTab('temario')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabSegmentText, activeTab === 'temario' && styles.tabSegmentTextActive]}>
              Temario (3)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabSegment, activeTab === 'materiales' && styles.tabSegmentActive]}
            onPress={() => setActiveTab('materiales')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabSegmentText, activeTab === 'materiales' && styles.tabSegmentTextActive]}>
              Materiales PDF
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lessonsContainer}>
          {lessons.map((lesson) => (
            <View key={lesson.id} style={styles.lessonCard}>
              <View style={styles.lessonHeader}>
                <View style={styles.lessonTitleRow}>
                  <View style={styles.numberCircle}>
                    <Text style={styles.numberText}>{lesson.id}</Text>
                  </View>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                </View>
                <Text style={styles.chevron}>⌄</Text>
              </View>
              <Text style={styles.lessonMeta}>{lesson.durationText}</Text>
              <Text style={styles.lessonDesc}>{lesson.desc}</Text>
            </View>
          ))}
        </View>

        <WalletCard hours="5.0" equivalence="1 hr = 1 crédito" />

        <PrimaryButton
          title="Solicitar este Curso (1.5 créditos)"
          icon="→"
          variant="primary"
          style={styles.requestBtn}
          onPress={() => {}}
        />
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginTop: 12,
    marginBottom: 8,
  },
  instructorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  instructorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarIcon: {
    fontSize: 18,
  },
  instructorName: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#111827',
  },
  instructorCategory: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  shareBtn: {
    padding: 6,
  },
  shareIcon: {
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 14,
    marginBottom: 2,
  },
  statIconStar: {
    fontSize: 14,
    color: '#F59E0B',
    marginBottom: 2,
  },
  statMain: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  statSub: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 2,
  },
  tabContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    padding: 3,
    marginVertical: 8,
  },
  tabSegment: {
    flex: 1,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabSegmentActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabSegmentText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabSegmentTextActive: {
    color: '#4338CA',
    fontWeight: '700',
  },
  lessonsContainer: {
    marginVertical: 6,
  },
  lessonCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  numberText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#4338CA',
  },
  lessonTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#111827',
  },
  chevron: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  lessonMeta: {
    fontSize: 9.5,
    color: '#9CA3AF',
    marginTop: 4,
    marginLeft: 30,
  },
  lessonDesc: {
    fontSize: 10.5,
    color: '#4B5563',
    lineHeight: 14,
    marginTop: 6,
    marginLeft: 30,
  },
  requestBtn: {
    marginTop: 8,
    backgroundColor: '#4338CA',
  },
});