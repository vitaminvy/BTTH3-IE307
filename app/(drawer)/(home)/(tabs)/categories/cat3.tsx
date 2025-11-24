import { FlatList, StyleSheet, Text, View } from 'react-native';

const mentors = [
  { id: '1', name: 'Trần B', role: 'Product Lead', sessions: 4 },
  { id: '2', name: 'Lê C', role: 'UX Researcher', sessions: 3 },
  { id: '3', name: 'Ngô D', role: 'Mobile Engineer', sessions: 5 },
];

export default function Category3() {
  // Tab "Đề xuất"
  return (
    <FlatList
      style={styles.list}
      data={mentors}
      contentContainerStyle={{ gap: 12 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.role}</Text>
          <Text style={styles.sessions}>{item.sessions} buổi tư vấn</Text>
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
    padding: 18,
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
  sessions: {
    marginTop: 10,
    color: '#2563EB',
    fontWeight: '700',
  },
});
