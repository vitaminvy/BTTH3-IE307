import { FlatList, StyleSheet, Text, View } from 'react-native';

const favouriteCourses = [
  { id: '1', title: 'Kỹ năng lãnh đạo nhóm', progress: 78 },
  { id: '2', title: 'Phân tích dữ liệu Excel', progress: 42 },
  { id: '3', title: 'Thiết kế sản phẩm số', progress: 56 },
];

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Danh sách yêu thích</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{favouriteCourses.length}</Text>
        </View>
      </View>
      <FlatList
        data={favouriteCourses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.meta}>Hoàn thành {item.progress}%</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progress, { width: `${item.progress}%` }]} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  badge: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E6E8EF',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  meta: {
    color: '#6C7280',
  },
  progressTrack: {
    height: 8,
    borderRadius: 20,
    backgroundColor: '#E8ECF5',
  },
  progress: {
    height: 8,
    borderRadius: 20,
    backgroundColor: '#2563EB',
  },
});
