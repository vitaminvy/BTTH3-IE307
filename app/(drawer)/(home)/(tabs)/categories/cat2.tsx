import { FlatList, StyleSheet, Text, View } from 'react-native';

const playlists = [
  { id: '1', title: 'Product starter', lessons: 9 },
  { id: '2', title: 'Thiết kế UI nâng cao', lessons: 7 },
  { id: '3', title: 'Content Planning', lessons: 5 },
];

export default function Category2() {
  // Tab "Phổ biến"
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ gap: 12 }}
      data={playlists}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.lessons} bài học</Text>
          </View>
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
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#D1D5DB',
    marginTop: 6,
  },
});
