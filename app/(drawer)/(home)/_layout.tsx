import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack>
      {/* Màn hình chính: bottom tabs (Home screen hiển thị menu trong header từ Tabs layout) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Màn hình chi tiết, có header mặc định với nút back */}
      <Stack.Screen name="details" options={{ title: "Home Details" }} />
    </Stack>
  );
}
