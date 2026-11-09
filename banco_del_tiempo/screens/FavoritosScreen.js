import React from 'react';
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
import FilterPills from '../components/FilterPills';
import BottomTabBar from '../components/BottomTabBar';

export default function FavoritosScreen() {
  const filterOptions = ['Todos (3)', 'Ingenierías', 'Idiomas', 'Biología'];

  const favoritesList = [
    {
      id: '1',
      category: 'Ingenierías',
      rating: '4.9',
      title: 'Aprende los Fundamentos de JavaScript',
      description: 'Aprende a controlar el flujo de un programa y a utilizar JavaScript para crear comportamientos dinámicos en sitios web.',
      duration: '2.0 hrs (2 créditos)',
      buttonText: 'Continuar',
      isContinued: true,
    },
    {
      id: '2',
      category: 'Ingenierías',
      rating: '4.9',
      title: 'Aprende los Fundamentos de Python',
      description: 'Aprende a controlar el flujo de un programa y a utilizar JavaScript para crear comportamientos dinámicos en sitios web.',
      duration: '2.0 hrs (2 créditos)',
      buttonText: 'Solicitar →',
      isContinued: false,
    },
    {
      id: '3',
      category: 'Idiomas',
      rating: '4.9',
      title: 'Conversación B2 en Inglés de Negocios',
      description: 'Aprende a controlar el flujo de un programa y a utilizar JavaScript para crear comportamientos dinámicos en sitios web.',
      duration: '2.0 hrs (2 créditos)',
      buttonText: 'Continuar',
      isContinued: true,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Favoritos"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <WalletCard hours="5.0" equivalence="1 hr = 1 crédito" />

        <FilterPills options={filterOptions} selected="Todos (3)" />

        <View style={styles.listContainer}>
          {favoritesList.map((item) => (
            <View key={item.id} style={styles.favoriteCard}>
              <View style={styles.cardHeader}>
                <View style={styles.categoryAndRating}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>{item.category}</Text>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.starIcon}>★</Text>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.heartIcon}>❤️</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseDesc} numberOfLines={2}>
                {item.description}
              </Text>

              <View style={styles.cardFooter}>
                <View style={styles.durationPill}>
                  <Text style={styles.clockIcon}>🕒</Text>
                  <Text style={styles.durationText}>{item.duration}</Text>
                </View>

                <TouchableOpacity
                  style={[
                    styles.actionBtn,
                    item.isContinued ? styles.continueBtn : styles.solicitarBtn,
                  ]}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.actionBtnText,
                      item.isContinued ? styles.continueBtnText : styles.solicitarBtnText,
                    ]}
                  >
                    {item.buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomTabBar activeTab="favorites" />
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
    paddingBottom: 20,
  },
  listContainer: {
    marginTop: 8,
  },
  favoriteCard: {
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryAndRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBadge: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginRight: 6,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4338CA',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    fontSize: 11,
    color: '#F59E0B',
    marginRight: 2,
  },
  ratingText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#1F2937',
  },
  heartIcon: {
    fontSize: 16,
  },
  courseTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  courseDesc: {
    fontSize: 10.5,
    color: '#6B7280',
    lineHeight: 14,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  durationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  clockIcon: {
    fontSize: 10,
    marginRight: 4,
  },
  durationText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4B5563',
  },
  actionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  continueBtn: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  continueBtnText: {
    color: '#4338CA',
    fontSize: 11,
    fontWeight: '700',
  },
  solicitarBtn: {
    backgroundColor: '#4338CA',
  },
  solicitarBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});