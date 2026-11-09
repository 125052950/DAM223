import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function HeaderBar({ title = 'BANCO DE TIEMPO Y TALENTO', subtitle, showBack = false, onBackPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarMock}>
        <Text style={styles.timeText}>11:45</Text>
        <View style={styles.statusIcons}>
          <Text style={styles.statusIconText}>📶 🛜 🔋</Text>
        </View>
      </View>

      <View style={styles.headerContent}>
        {showBack ? (
          <TouchableOpacity style={styles.backButton} onPress={onBackPress} activeOpacity={0.7}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.backPlaceholder} />
        )}

        <View style={styles.titlesWrapper}>
          <Text style={styles.superTitle}>{title}</Text>
          {subtitle ? <Text style={styles.subTitle}>{subtitle}</Text> : null}
        </View>

        <View style={styles.backPlaceholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
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
    alignItems: 'center',
  },
  statusIconText: {
    fontSize: 10,
    letterSpacing: 2,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  backPlaceholder: {
    width: 36,
  },
  titlesWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  superTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4338CA',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginTop: 2,
    textAlign: 'center',
  },
});