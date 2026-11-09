import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

export default function RegistroScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.statusBarMock}>
          <Text style={styles.timeText}>11:45</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.statusIconText}>📶 🛜 🔋</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.title}>Registro</Text>

          <View style={styles.formContainer}>
            <CustomInput label="NOMBRE" placeholder="" />
            <CustomInput label="USUARIO" placeholder="" />
            <CustomInput label="CORREO" placeholder="" />
            <CustomInput label="CONTRASEÑA" placeholder="" secureTextEntry={true} />
            <CustomInput label="REPETIR CONTRASEÑA" placeholder="" secureTextEntry={true} />

            <PrimaryButton
              title="Registrarme"
              icon="→"
              variant="primary"
              style={styles.registerBtn}
              onPress={() => {}}
            />

            <TouchableOpacity style={styles.backLink} activeOpacity={0.7}>
              <Text style={styles.backLinkText}>Atrás</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  statusBarMock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  statusIconText: {
    fontSize: 10,
    letterSpacing: 2,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  formContainer: {
    width: '100%',
  },
  registerBtn: {
    marginTop: 20,
    paddingVertical: 13,
    backgroundColor: '#4338CA',
  },
  backLink: {
    marginTop: 14,
    alignItems: 'center',
  },
  backLinkText: {
    fontSize: 12,
    color: '#4338CA',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});