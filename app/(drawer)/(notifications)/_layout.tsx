import { Stack } from 'expo-router';

export default function NotificationsStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="details" options={{ title: 'Chi tiết thông báo' }} />
    </Stack>
  );
}
