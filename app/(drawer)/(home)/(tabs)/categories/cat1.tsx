import { FlatList, StyleSheet, Text, View } from 'react-native';

const topics = [
  { id: '1', title: 'Thực chiến React Native', description: 'Phát triển app đa nền tảng' },
  { id: '2', title: 'UI Motion', description: 'Animation cơ bản với Reanimated' },
  { id: '3', title: 'Node.js cho mobile dev', description: 'Xây dựng backend nhỏ gọn' },
];

export default function Category1() {
  // Tab "Mới nhất"
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ gap: 12 }}
      data={topics}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <Text style={styles.tag}>Mới</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#F4F6FB',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  description: {
    color: '#6B7280',
    marginTop: 6,
  },
  tag: {
    color: '#059669',
    fontWeight: '700',
  },
});
