import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const courses = [
  {
    id: "1",
    title: "React Native Pro",
    category: "Mobile",
    duration: "12 bài học",
  },
  { id: "2", title: "UX Writing", category: "Design", duration: "8 bài học" },
  {
    id: "3",
    title: "Quản lý dự án",
    category: "Product",
    duration: "6 bài học",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.badge}>Học hôm nay</Text>
          <Text style={styles.heroTitle}>
            Khám phá tài nguyên học tập dành riêng cho bạn
          </Text>
          <Text style={styles.heroBody}>
            Nội dung được cập nhật liên tục với mentor dày dạn kinh nghiệm.
          </Text>
          <Pressable
            style={styles.heroButton}
            onPress={() =>
              router.push("/(drawer)/(home)/(tabs)/categories/cat1")
            }
          >
            <Text style={styles.heroButtonText}>Khám phá danh mục</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Tiếp tục học</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
          renderItem={({ item }) => (
            <Pressable
              style={styles.courseCard}
              // Nút "Go to Details": đưa sang màn HomeDetailsScreen với tham số khóa học
              onPress={() =>
                router.push({
                  pathname: "/(drawer)/(home)/details",
                  params: { id: item.id, title: item.title },
                })
              }
            >
              <View>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseMeta}>
                  {item.category} - {item.duration}
                </Text>
              </View>
              <Text style={styles.courseAction}>Go to detail</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  hero: {
    backgroundColor: "#0F172A",
    padding: 20,
    borderRadius: 22,
    gap: 12,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  heroBody: {
    color: "#CBD5F5",
    lineHeight: 20,
  },
  heroButton: {
    marginTop: 4,
    alignSelf: "flex-start",
    backgroundColor: "#22D3EE",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  heroButtonText: {
    color: "#083344",
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
  courseMeta: {
    color: "#6B7280",
    marginTop: 4,
  },
  courseAction: {
    color: "#2563EB",
    fontWeight: "700",
  },
});
