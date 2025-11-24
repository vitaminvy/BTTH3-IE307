import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function CourseDetails() {
  const router = useRouter();
  const { id, title } = useLocalSearchParams<{ id?: string; title?: string }>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Khoá học #{id ?? '---'}</Text>
      <Text style={styles.title}>{title ?? 'Chi tiết khoá học'}</Text>
      <Text style={styles.body}>
        Nội dung được chia thành nhiều module nhỏ. Bạn sẽ thực hành liên tục với hướng dẫn chi tiết
        và tài liệu tham khảo đi kèm. Lộ trình bao gồm video, bài đọc và project cuối kỳ giúp củng
        cố kiến thức.
      </Text>

      <Text style={styles.sectionTitle}>Bạn sẽ học được</Text>
      <Text style={styles.listItem}>- Thiết kế kiến trúc ứng dụng</Text>
      <Text style={styles.listItem}>- Tối ưu hiệu năng và trải nghiệm</Text>
      <Text style={styles.listItem}>- Quy trình release hoàn chỉnh</Text>

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
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  body: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  listItem: {
    fontSize: 15,
    color: '#4B5563',
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
