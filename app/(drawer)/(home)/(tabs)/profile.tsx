import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  // Đưa người dùng về màn hình đăng nhập bằng route trung gian /logout để reset navigator.
  const handleLogout = () => {
    router.replace('/logout');
  };

  return (
    <View style={styles.container}>
      {/* Thông tin tài khoản nhanh với avatar + nút chỉnh sửa */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Vy Hồ</Text>
          <Text style={styles.role}>Product Designer</Text>
        </View>
        <Pressable style={styles.editButton}>
          <Text style={styles.editText}>Chỉnh sửa</Text>
        </Pressable>
      </View>

      {/* Kế hoạch học tập đang theo dõi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kế hoạch học tập</Text>
        <View style={styles.planCard}>
          <Text style={styles.planTitle}>UX Advanced</Text>
          <Text style={styles.meta}>Còn 6 bài - Hạn 30/11</Text>
        </View>
        <View style={styles.planCard}>
          <Text style={styles.planTitle}>React Native</Text>
          <Text style={styles.meta}>Còn 4 bài - Hạn 15/12</Text>
        </View>
      </View>

      {/* Nút đăng xuất, chuyển người dùng về luồng xác thực */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
    gap: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
  role: {
    color: "#6C7280",
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#E0ECFF",
  },
  editText: {
    color: "#1D4ED8",
    fontWeight: "600",
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },
  planCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E6E8EF",
  },
  planTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
  meta: {
    marginTop: 6,
    color: "#6C7280",
  },
  logoutButton: {
    marginTop: "auto",
    backgroundColor: "#EF4444",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
});
