import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function CustomInput({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  rightActionText,
  onRightActionPress,
  multiline = false,
  numberOfLines = 1,
  counterText,
  style,
  inputStyle,
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelRow}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        {rightActionText ? (
          <TouchableOpacity onPress={onRightActionPress} activeOpacity={0.7}>
            <Text style={styles.rightAction}>{rightActionText}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          inputStyle,
        ]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {counterText ? <Text style={styles.counterText}>{counterText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  rightAction: {
    fontSize: 11,
    color: '#4F46E5',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: '#1F2937',
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  counterText: {
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'right',
    marginTop: 4,
  },
});