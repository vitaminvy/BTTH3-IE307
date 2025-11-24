import { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useSettings } from "@/contexts/SettingsContext";

export default function RegisterScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { colors, fontSize } = useSettings();

  const styles = useMemo(() => StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      padding: 24,
      gap: 16,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: fontSize + 10,
      fontWeight: '700',
      color: colors.text,
    },
    subtitle: {
      color: colors.muted,
      fontSize: fontSize - 1,
    },
    formGroup: {
      gap: 6,
    },
    row: {
      flexDirection: 'row',
      gap: 12,
    },
    label: {
      fontSize: fontSize - 2,
      color: colors.text,
      fontWeight: '600',
    },
    input: {
      flex: 1,
      paddingHorizontal: 8,
      paddingVertical: 12,
      fontSize: fontSize - 1,
      color: colors.text,
    },
    inputWrapper: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 14,
      paddingHorizontal: 12,
      backgroundColor: colors.surface,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    primaryButton: {
      marginTop: 8,
      backgroundColor: colors.accent,
      borderRadius: 16,
      paddingVertical: 14,
      alignItems: 'center',
    },
    primaryText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: fontSize,
    },
    secondaryText: {
      marginTop: 8,
      color: colors.accent,
      fontWeight: '600',
      textAlign: 'center',
      fontSize: fontSize - 1,
    },
  }), [colors, fontSize]);

  const handleRegister = () => {
    router.replace('/(drawer)/(home)/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: 'padding', android: undefined })}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Tạo tài khoản</Text>
          <Text style={styles.subtitle}>Khám phá hơn 100+ khóa học được cập nhật mỗi tuần</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Họ tên</Text>
            <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={20} color={colors.muted} />
              <TextInput
                style={styles.input}
                placeholder="Nguyễn Văn A"
                placeholderTextColor={colors.muted}
                value={fullName}
                onChangeText={setFullName}
                returnKeyType="next"
              />
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color={colors.muted} />
              <TextInput
                style={styles.input}
                placeholder="email@example.com"
                placeholderTextColor={colors.muted}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Mật khẩu</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color={colors.muted} />
                <TextInput
                  style={styles.input}
                  placeholder="********"
                placeholderTextColor={colors.muted}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Xác nhận</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="repeat-outline" size={20} color={colors.muted} />
                <TextInput
                  style={styles.input}
                  placeholder="********"
                placeholderTextColor={colors.muted}
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
            <Text style={styles.primaryText}>Đăng ký</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.secondaryText}>Quay lại đăng nhập</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
