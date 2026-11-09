import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReviewCard({
  authorName = 'Valentina Gómez',
  timeAgo = 'Hace 2 días',
  rating = 5,
  courseName = 'Fundamentos de JavaScript',
  comment = 'Excelente sesión de intercambio, aprendí a manipular el DOM con JavaScript y cómo conectar APIs con fetch. Muy paciente y clara con sus explicaciones.',
}) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.authorRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{authorName}</Text>
            <Text style={styles.timeAgo}>{timeAgo}</Text>
          </View>
        </View>

        <View style={styles.starsRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Text
              key={i}
              style={[styles.star, i < rating ? styles.filledStar : styles.emptyStar]}
            >
              ★
            </Text>
          ))}
        </View>
      </View>

      {courseName ? <Text style={styles.courseTag}>{courseName}</Text> : null}
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginVertical: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarText: {
    fontSize: 14,
  },
  authorName: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#111827',
  },
  timeAgo: {
    fontSize: 9.5,
    color: '#9CA3AF',
  },
  starsRow: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 12,
    marginHorizontal: 1,
  },
  filledStar: {
    color: '#F59E0B',
  },
  emptyStar: {
    color: '#E5E7EB',
  },
  courseTag: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4338CA',
    marginBottom: 4,
  },
  comment: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 15,
  },
});