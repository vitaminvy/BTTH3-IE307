import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import { InfoCard } from '@/components/info-card';

const notifications = [
  { id: '1', title: 'Lịch học tối nay', description: 'Đừng bỏ lỡ buổi live React Native lúc 20:00.' },
  { id: '2', title: 'Khóa học mới', description: 'Bổ sung 3 module về UX Writing thực chiến.' },
  { id: '3', title: 'Nhắc học tập', description: 'Bạn còn 2 bài chưa hoàn thành tuần này.' },
];

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header đơn giản, chỉ giữ khoảng trống để tránh đúp nội dung */}
      <View style={styles.headerRow} />
      <Text style={styles.title}>Thông báo gần đây</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: '/(drawer)/(notifications)/details', params: { id: item.id } })
            }>
            <InfoCard
              title={item.title}
              description={item.description}
              rightContent={
                <View style={{ alignItems: 'flex-end', gap: 6 }}>
                  <Text style={styles.detailsText}>Go to Details</Text>
                  <Text style={styles.chevron}>›</Text>
                </View>
              }
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FB',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#0F172A',
  },
  detailsButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#E0E7FF',
  },
  detailsText: {
    color: '#1D4ED8',
    fontWeight: '600',
  },
  chevron: {
    fontSize: 28,
    color: '#CBD5F5',
    fontWeight: '700',
  },
});
