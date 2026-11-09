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

export default function LoginScreen() {
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
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarIcon}>👤</Text>
            </View>
          </View>

          <Text style={styles.welcomeTitle}>¡Bienvenid@ de nuevo!</Text>
          <Text style={styles.welcomeSubtitle}>
            Ingrese sus credenciales para continuar
          </Text>

          <View style={styles.formContainer}>
            <CustomInput
              label="USUARIO"
              placeholder=""
            />

            <CustomInput
              label="CONTRASEÑA"
              placeholder=""
              secureTextEntry={true}
              rightActionText="¿Olvidaste tu contraseña?"
              onRightActionPress={() => {}}
            />

            <PrimaryButton
              title="Ingresar"
              icon="→"
              variant="primary"
              style={styles.loginBtn}
              onPress={() => {}}
            />

            <TouchableOpacity style={styles.registerLink} activeOpacity={0.7}>
              <Text style={styles.registerLinkText}>
                ¿No tienes cuenta? <Text style={styles.registerLinkHighlight}>Regístrate</Text>
              </Text>
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
    marginBottom: 20,
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
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: '#4F46E5',
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIcon: {
    fontSize: 34,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    width: '100%',
  },
  loginBtn: {
    marginTop: 18,
    paddingVertical: 13,
    backgroundColor: '#4338CA',
  },
  registerLink: {
    marginTop: 18,
    alignItems: 'center',
  },
  registerLinkText: {
    fontSize: 11,
    color: '#6B7280',
  },
  registerLinkHighlight: {
    color: '#4338CA',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});