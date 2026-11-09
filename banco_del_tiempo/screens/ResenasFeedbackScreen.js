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
import ReviewCard from '../components/ReviewCard';
import BottomTabBar from '../components/BottomTabBar';

export default function ResenasFeedbackScreen() {
  const [activeTab, setActiveTab] = useState('recibidas');
  const [rating, setRating] = useState(5);

  const filterTags = ['JavaScript', 'Frameworks', 'Backend', 'Web'];

  const ratingDistribution = [
    { stars: '5 ★', percent: '85%' },
    { stars: '4 ★', percent: '10%' },
    { stars: '3 ★', percent: '3%' },
    { stars: '2 ★', percent: '1%' },
    { stars: '1 ★', percent: '1%' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Reseñas y Feedback"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.serviceCallout}>
          <View style={styles.serviceCalloutLeft}>
            <Text style={styles.serviceCalloutTitle}>
              Servicio: Fundamentos de JavaScript
            </Text>
            <Text style={styles.serviceCalloutSubtitle}>
              Con Jimena Torres (Ing. en Tecnologías de Información)
            </Text>
          </View>
          <TouchableOpacity style={styles.evaluarBtn} activeOpacity={0.8}>
            <Text style={styles.evaluarBtnText}>Evaluar ahora</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardBox}>
          <Text style={styles.cardSuperTitle}>REPUTACIÓN EN LA COMUNIDAD</Text>
          <Text style={styles.cardMainTitle}>Resumen de Calificaciones</Text>

          <View style={styles.scoreRow}>
            <View style={styles.bigScoreBox}>
              <Text style={styles.bigScoreText}>4.9</Text>
              <View style={styles.scoreStars}>
                <Text style={styles.starIcon}>★ ★ ★ ★ ★</Text>
              </View>
            </View>

            <View style={styles.barsContainer}>
              {ratingDistribution.map((row, i) => (
                <View key={i} style={styles.barRow}>
                  <Text style={styles.barLabel}>{row.stars}</Text>
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { width: row.percent }]} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.cardBox}>
          <Text style={styles.cardMainTitle}>Emitir Reseña</Text>
          <Text style={styles.cardDesc}>
            Tu opinión fortalece el Banco de Tiempo y Talento
          </Text>

          <View style={styles.instructorMiniRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarIcon}>👤</Text>
            </View>
            <View>
              <Text style={styles.instructorName}>Jimena Torres</Text>
              <Text style={styles.instructorClass}>Fundamentos de JavaScript • 1.5 horas</Text>
            </View>
          </View>

          <Text style={styles.questionText}>¿Cómo calificas tu experiencia general?</Text>
          <View style={styles.interactiveStarsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                activeOpacity={0.7}
              >
                <Text style={[styles.interactiveStar, star <= rating && styles.interactiveStarFilled]}>
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.commentContainer}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentLabel}>Comentario detallado</Text>
              <Text style={styles.commentCounter}>20 / 300</Text>
            </View>
            <TextInput
              style={styles.commentInput}
              placeholder="Explica qué tal fue tu experiencia, puntualidad y aprendizaje..."
              placeholderTextColor="#9CA3AF"
              multiline={true}
              numberOfLines={3}
            />
          </View>

          <PrimaryButton
            title="Publicar Valoración"
            variant="primary"
            style={styles.publishReviewBtn}
            onPress={() => {}}
          />
        </View>

        <View style={styles.tabsHeader}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'recibidas' && styles.tabButtonActive]}
            onPress={() => setActiveTab('recibidas')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabButtonText, activeTab === 'recibidas' && styles.tabButtonTextActive]}>
              Recibidas (3)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'emitidas' && styles.tabButtonActive]}
            onPress={() => setActiveTab('emitidas')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabButtonText, activeTab === 'emitidas' && styles.tabButtonTextActive]}>
              Emitidas (0)
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagScroll}>
          {filterTags.map((tag, idx) => (
            <View key={idx} style={styles.skillTag}>
              <Text style={styles.skillTagText}>{tag}</Text>
            </View>
          ))}
        </ScrollView>

        <ReviewCard
          authorName="Valentina Gómez"
          timeAgo="Hace 2 días"
          rating={5}
          courseName="Fundamentos de JavaScript"
          comment="Excelente sesión de intercambio, aprendí a manipular el DOM con JavaScript y cómo conectar APIs con fetch. Muy paciente y clara con sus explicaciones."
        />

        <ReviewCard
          authorName="Mateo Morales"
          timeAgo="Hace 1 semana"
          rating={5}
          courseName="Fundamentos de JavaScript"
          comment="Muy buena pedagogía, resolvimos dudas de estructuras de control y funciones flecha en JavaScript en tiempo récord."
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
  serviceCallout: {
    backgroundColor: '#3730A3',
    borderRadius: 14,
    padding: 12,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceCalloutLeft: {
    flex: 1,
    paddingRight: 8,
  },
  serviceCalloutTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  serviceCalloutSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 10,
    marginTop: 2,
  },
  evaluarBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  evaluarBtnText: {
    color: '#3730A3',
    fontSize: 10.5,
    fontWeight: '800',
  },
  cardBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    padding: 14,
    marginVertical: 6,
  },
  cardSuperTitle: {
    fontSize: 9.5,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.6,
  },
  cardMainTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginTop: 2,
  },
  cardDesc: {
    fontSize: 10.5,
    color: '#6B7280',
    marginTop: 2,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bigScoreBox: {
    alignItems: 'center',
    paddingRight: 16,
    borderRightWidth: 1,
    borderRightColor: '#F3F4F6',
  },
  bigScoreText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
  },
  scoreStars: {
    marginTop: 2,
  },
  starIcon: {
    color: '#F59E0B',
    fontSize: 10,
  },
  barsContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1.5,
  },
  barLabel: {
    fontSize: 9.5,
    color: '#6B7280',
    width: 26,
  },
  barTrack: {
    flex: 1,
    height: 5,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 3,
  },
  instructorMiniRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 6,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarIcon: {
    fontSize: 15,
  },
  instructorName: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#111827',
  },
  instructorClass: {
    fontSize: 9.5,
    color: '#6B7280',
  },
  questionText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    marginTop: 8,
  },
  interactiveStarsRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 6,
  },
  interactiveStar: {
    fontSize: 22,
    color: '#E5E7EB',
  },
  interactiveStarFilled: {
    color: '#F59E0B',
  },
  commentContainer: {
    marginTop: 6,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  commentLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B5563',
  },
  commentCounter: {
    fontSize: 9.5,
    color: '#9CA3AF',
  },
  commentInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 8,
    fontSize: 11,
    minHeight: 55,
    textAlignVertical: 'top',
  },
  publishReviewBtn: {
    marginTop: 10,
    backgroundColor: '#4338CA',
    paddingVertical: 10,
  },
  tabsHeader: {
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabButtonActive: {
    borderBottomColor: '#4338CA',
  },
  tabButtonText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabButtonTextActive: {
    color: '#4338CA',
    fontWeight: '800',
  },
  tagScroll: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  skillTag: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
  },
  skillTagText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4B5563',
  },
});