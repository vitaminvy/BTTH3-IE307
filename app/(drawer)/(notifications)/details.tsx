import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function NotificationDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Thông báo #{id ?? '---'}</Text>
      <Text style={styles.title}>Thông tin chi tiết</Text>
      <Text style={styles.body}>
        Đây là mô tả chi tiết về thông báo của bạn. Bạn có thể ghi chú, đặt lịch nhắc lại hoặc đánh
        dấu đã đọc để tiện theo dõi trong tương lai.
      </Text>
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Quay lại</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
    backgroundColor: '#F4F6FB',
    flexGrow: 1,
  },
  label: {
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
  button: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
