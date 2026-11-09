import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function StatMetricCard({
  value = '1,280',
  title = 'Comunidad',
  description = 'Usuarios activos en la plataforma',
  icon = '👥',
  variant = 'default',
}) {
  const isHighlight = variant === 'highlight';

  return (
    <View style={[styles.card, isHighlight && styles.highlightCard]}>
      <View style={styles.topRow}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={[styles.value, isHighlight && styles.highlightValue]}>{value}</Text>
      <Text style={[styles.title, isHighlight && styles.highlightTitle]}>{title}</Text>
      {description ? (
        <Text style={[styles.description, isHighlight && styles.highlightDesc]}>
          {description}
        </Text>
      ) : null}
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
    flex: 1,
    minWidth: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  highlightCard: {
    backgroundColor: '#3730A3',
    borderColor: '#312E81',
  },
  topRow: {
    marginBottom: 4,
  },
  icon: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  highlightValue: {
    color: '#FFFFFF',
  },
  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
    marginTop: 2,
  },
  highlightTitle: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  description: {
    fontSize: 9.5,
    color: '#9CA3AF',
    marginTop: 2,
    lineHeight: 12,
  },
  highlightDesc: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});