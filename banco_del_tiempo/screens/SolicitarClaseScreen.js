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
import WalletCard from '../components/WalletCard';
import PrimaryButton from '../components/PrimaryButton';
import BottomTabBar from '../components/BottomTabBar';

export default function SolicitarClaseScreen() {
  const [selectedDuration, setSelectedDuration] = useState('1.0');

  const durationOptions = [
    { id: '1.0', label: '1.0 hr', cost: '1 crédito' },
    { id: '1.5', label: '1.5 hrs', cost: '1.5 créditos' },
    { id: '2.0', label: '2.0 hrs', cost: '2 créditos' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar
        title="BANCO DE TIEMPO Y TALENTO"
        subtitle="Solicitar Clase"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <WalletCard hours="5.0" equivalence="1 hr = 1 crédito" />

        <View style={styles.heroBox}>
          <View style={styles.heroHeader}>
            <Text style={styles.heroIcon}>✨</Text>
            <Text style={styles.heroTitle}>Encuentra tu curso ideal</Text>
          </View>
          <Text style={styles.heroDesc}>
            Completa los datos para solicitar un curso a la comunidad mediante intercambio de tiempo.
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>CATEGORÍA</Text>
          <TouchableOpacity style={styles.dropdownSelector} activeOpacity={0.7}>
            <Text style={styles.dropdownPlaceholder}>Selecciona la especialidad</Text>
            <Text style={styles.chevronIcon}>⌄</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>NOMBRE DEL SERVICIO</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ej. Introducción a Python, Modelado 3D, etc."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.durationHeaderRow}>
            <View style={styles.durationTitleRow}>
              <Text style={styles.clockIcon}>🕒</Text>
              <Text style={styles.label}>DURACIÓN ESTIMADA</Text>
            </View>
            <Text style={styles.costIndicator}>
              Costo: {selectedDuration === '1.0' ? '1.0 crédito' : selectedDuration === '1.5' ? '1.5 créditos' : '2.0 créditos'}
            </Text>
          </View>

          <View style={styles.durationOptionsRow}>
            {durationOptions.map((opt) => {
              const isSelected = selectedDuration === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[styles.durationCard, isSelected && styles.durationCardActive]}
                  onPress={() => setSelectedDuration(opt.id)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.durationLabel, isSelected && styles.durationLabelActive]}>
                    {opt.label}
                  </Text>
                  <Text style={[styles.durationCost, isSelected && styles.durationCostActive]}>
                    {opt.cost}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.noticeBox}>
          <Text style={styles.noticeTitle}>ℹ️ IMPORTANTE:</Text>
          <Text style={styles.noticeText}>
            Recuerda que 1 hora de asesoría = 1 crédito deducido de tu billetera de tiempo al finalizar la sesión.
          </Text>
        </View>

        <PrimaryButton
          title="Generar Solicitud"
          icon="→"
          variant="primary"
          style={styles.submitBtn}
          onPress={() => {}}
        />

        <TouchableOpacity style={styles.draftBtn} activeOpacity={0.7}>
          <Text style={styles.draftBtnText}>Cancelar y Guardar Borrador</Text>
        </TouchableOpacity>
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
  heroBox: {
    backgroundColor: '#EEF2FF',
    borderRadius: 14,
    padding: 14,
    marginVertical: 10,
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  heroIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  heroTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#312E81',
  },
  heroDesc: {
    fontSize: 11,
    color: '#4338CA',
    lineHeight: 15,
  },
  fieldContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  dropdownSelector: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownPlaceholder: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  chevronIcon: {
    fontSize: 16,
    color: '#6B7280',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 12,
    color: '#111827',
  },
  durationHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  durationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  costIndicator: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4338CA',
  },
  durationOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  durationCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  durationCardActive: {
    backgroundColor: '#EEF2FF',
    borderColor: '#4338CA',
  },
  durationLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
  },
  durationLabelActive: {
    color: '#4338CA',
  },
  durationCost: {
    fontSize: 9.5,
    color: '#6B7280',
    marginTop: 2,
  },
  durationCostActive: {
    color: '#4338CA',
    fontWeight: '600',
  },
  noticeBox: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  noticeTitle: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#166534',
    marginBottom: 2,
  },
  noticeText: {
    fontSize: 10,
    color: '#15803D',
    lineHeight: 14,
  },
  submitBtn: {
    marginTop: 8,
    backgroundColor: '#4338CA',
  },
  draftBtn: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 6,
    backgroundColor: '#FFFFFF',
  },
  draftBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
  },
});