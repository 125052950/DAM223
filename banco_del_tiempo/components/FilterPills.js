import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function FilterPills({ options = [], selected, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {options.map((option, index) => {
        const isSelected = selected === option;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.pill, isSelected && styles.activePill]}
            onPress={() => onSelect && onSelect(option)}
            activeOpacity={0.7}
          >
            <Text style={[styles.pillText, isSelected && styles.activePillText]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activePill: {
    backgroundColor: '#4338CA',
    borderColor: '#4338CA',
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4B5563',
  },
  activePillText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});