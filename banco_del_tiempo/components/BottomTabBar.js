import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function BottomTabBar({ activeTab = 'home', onTabPress }) {
  const tabs = [
    { key: 'home', label: 'Inicio', icon: '🏠' },
    { key: 'favorites', label: 'Favoritos', icon: '🤍' },
    { key: 'profile', label: 'Perfil', icon: '👤' },
    { key: 'settings', label: 'Ajustes', icon: '⚙️' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabButton}
            onPress={() => onTabPress && onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconWrapper, isActive && styles.activeIconWrapper]}>
              <Text style={[styles.tabIcon, isActive && styles.activeTabIcon]}>
                {tab.icon}
              </Text>
            </View>
            <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    padding: 2,
    borderRadius: 8,
  },
  activeIconWrapper: {
    transform: [{ scale: 1.1 }],
  },
  tabIcon: {
    fontSize: 19,
    color: '#6B7280',
  },
  activeTabIcon: {
    color: '#312E81',
  },
  tabLabel: {
    fontSize: 9.5,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 2,
  },
  activeTabLabel: {
    color: '#312E81',
    fontWeight: '700',
  },
});