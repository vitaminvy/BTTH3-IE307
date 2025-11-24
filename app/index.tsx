import { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/contexts/auth-context";
import { useSettings } from "@/contexts/SettingsContext";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const { colors, fontSize } = useSettings();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        safeArea: {
          flex: 1,
          backgroundColor: colors.background,
        },
        container: {
          flex: 1,
          padding: 24,
          justifyContent: "center",
          gap: 24,
        },
        brand: {
          fontSize: fontSize + 2,
          fontWeight: "600",
          color: colors.accent,
          textAlign: "center",
        },
        card: {
          backgroundColor: colors.surface,
          borderRadius: 24,
          padding: 24,
          gap: 16,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          elevation: 6,
        },
        title: {
          fontSize: fontSize + 10,
          fontWeight: "700",
          color: colors.text,
        },
        subtitle: {
          color: colors.muted,
          fontSize: fontSize - 1,
        },
        formGroup: {
          gap: 6,
        },
        label: {
          fontSize: fontSize - 2,
          fontWeight: "600",
          color: colors.text,
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
          paddingVertical: 2,
          backgroundColor: colors.surface,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        },
        primaryButton: {
          marginTop: 6,
          backgroundColor: colors.accent,
          borderRadius: 16,
          paddingVertical: 14,
          alignItems: "center",
        },
        primaryText: {
          color: "#fff",
          fontWeight: "600",
          fontSize: fontSize,
        },
        secondaryBtn: {
          alignItems: "center",
        },
        secondaryText: {
          color: colors.accent,
          fontWeight: "600",
          fontSize: fontSize - 1,
        },
        errorText: {
          color: colors.danger,
          fontSize: fontSize - 2,
        },
        divider: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 16,
        },
        dividerLine: {
          flex: 1,
          height: 1,
          backgroundColor: colors.border,
        },
        dividerText: {
          color: colors.muted,
          fontSize: fontSize - 2,
        },
        socialRow: {
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 10,
        },
        socialButton: {
          flex: 1,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 14,
          paddingVertical: 12,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          backgroundColor: colors.surface,
        },
        socialText: {
          color: colors.text,
          fontWeight: "600",
        },
        gotoBtn: {
          marginTop: 20,
          backgroundColor: "#10B981",
          paddingVertical: 12,
          borderRadius: 14,
          alignItems: "center",
        },
        gotoText: {
          color: "#fff",
          fontWeight: "600",
          fontSize: fontSize,
        },
      }),
    [colors, fontSize]
  );

  // Sau khi đăng nhập thành công sẽ replace sang nhóm Drawer -> Home Stack -> Bottom Tabs.
  const handleLogin = () => {
    const isValidEmail =
      email.trim().toLowerCase() === "23521827@gm.uit.edu.vn";
    const isValidPassword = password === "27112004";

    if (isValidEmail && isValidPassword) {
      setError("");
      login(email);
      router.replace("/(drawer)/(home)/(tabs)/home");
    } else {
      setError("Email hoặc mật khẩu không chính xác. Vui lòng thử lại.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: undefined })}
      >
        <View style={styles.container}>
          <Text style={styles.brand}>IE307 Academy</Text>
          <View style={styles.card}>
            <Text style={styles.title}>Chào mừng trở lại</Text>
            <Text style={styles.subtitle}>Đăng nhập để tiếp tục lớp học</Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color={colors.muted} />
                <TextInput
                  placeholder="Mail sinh viên"
                  placeholderTextColor={colors.muted}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Mật khẩu</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color={colors.muted} />
                <TextInput
                  placeholder="Ngày tháng năm sinh"
                  placeholderTextColor={colors.muted}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                />
              </View>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleLogin}
            >
              <Text style={styles.primaryText}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/register")}
              style={styles.secondaryBtn}
            >
              <Text style={styles.secondaryText}>Tạo tài khoản mới</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Hoặc đăng nhập với</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={18} color="#DB4437" />
                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-facebook" size={18} color="#2563EB" />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => router.replace("/(notes)")}
                style={styles.gotoBtn}
              >
                <Text style={styles.gotoText}>Đi tới Bài 2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
