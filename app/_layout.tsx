import { Stack } from "expo-router";
import { useMemo } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { AuthProvider } from "@/contexts/auth-context";
import { SettingsProvider, useSettings } from "@/contexts/SettingsContext"; // Bài 2

function ThemedStack() {
  const { darkMode, colors } = useSettings();
  const navigationTheme = useMemo(
    () =>
      ({
        ...(darkMode ? DarkTheme : DefaultTheme),
        colors: {
          ...(darkMode ? DarkTheme.colors : DefaultTheme.colors),
          primary: colors.accent,
          background: colors.background,
          card: colors.header,
          text: colors.text,
          border: colors.border,
        },
      } as const),
    [darkMode, colors]
  );

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.header },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {/* Bài 1 */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ title: "Đăng ký" }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />

        {/* Bài 2 */}
        <Stack.Screen name="(notes)" options={{ headerShown: false }} />
        <Stack.Screen name="(settings)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemedStack />
      </SettingsProvider>
    </AuthProvider>
  );
}
