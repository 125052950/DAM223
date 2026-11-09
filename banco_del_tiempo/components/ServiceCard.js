import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ServiceCard({
  authorName = 'Jimena Torres',
  authorRole = 'Ing. Tecnologías de la Información',
  rating = '4.9',
  reviewsCount = '24 reseñas',
  title = 'Aprende los Fundamentos de JavaScript',
  description = 'Aprende a controlar el flujo de un programa y a utilizar JavaScript para crear comportamientos dinámicos en sitios web.',
  duration = '1.5 Horas',
  credits = '1.5 créditos',
  isFavorite = false,
  buttonText = 'Solicitar →',
  onActionPress,
  onFavoritePress,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.authorSection}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{authorName}</Text>
            <Text style={styles.authorRole}>{authorRole}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.starIcon}>★</Text>
              <Text style={styles.ratingText}>{rating}</Text>
              <Text style={styles.reviewsText}>({reviewsCount})</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={onFavoritePress} style={styles.favoriteButton} activeOpacity={0.7}>
          <Text style={[styles.favoriteIcon, isFavorite && styles.favoriteIconActive]}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>{description}</Text>

      <View style={styles.footerRow}>
        <View style={styles.creditBadge}>
          <Text style={styles.durationText}>{duration}</Text>
          <Text style={styles.creditText}>{credits}</Text>
        </View>

        <TouchableOpacity style={styles.actionButton} onPress={onActionPress} activeOpacity={0.8}>
          <Text style={styles.actionButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 14,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarIcon: {
    fontSize: 16,
  },
  authorName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  authorRole: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  starIcon: {
    color: '#F59E0B',
    fontSize: 11,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#1F2937',
    marginRight: 3,
  },
  reviewsText: {
    fontSize: 9.5,
    color: '#9CA3AF',
  },
  favoriteButton: {
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 16,
  },
  favoriteIconActive: {
    fontSize: 16,
  },
  courseTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 10.5,
    color: '#6B7280',
    lineHeight: 14,
    marginBottom: 10,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
  creditBadge: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#B45309',
  },
  creditText: {
    fontSize: 9,
    color: '#D97706',
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#4338CA',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});