import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function WalletCard({ hours = '5.0', equivalence = '1 hr = 1 crédito' }) {
  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <View style={styles.iconCircle}>
          <Text style={styles.walletIcon}>💳</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>TU BILLETERA DE TIEMPO</Text>
          <Text style={styles.hoursText}>{hours} hrs disponibles</Text>
        </View>
      </View>
      <View style={styles.pillBadge}>
        <Text style={styles.pillText}>{equivalence}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4338CA',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  walletIcon: {
    fontSize: 16,
  },
  textContainer: {
    flexDirection: 'column',
  },
  label: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  hoursText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 2,
  },
  pillBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
});