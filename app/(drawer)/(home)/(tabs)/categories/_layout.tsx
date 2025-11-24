import { DrawerActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

export const unstable_settings = {
  initialRouteName: 'cat1',
};

export default function CategoriesLayout() {
  const colorScheme = useColorScheme();
  const tint = Colors[colorScheme ?? 'light'].tint;
  const background = Colors[colorScheme ?? 'light'].background;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      {/* Tiêu đề màn hình thể loại + nút mở Drawer */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu" size={22} color="#0F172A" />
        </Pressable>
        <Text style={styles.headerTitle}>Danh mục khóa học</Text>
        <View style={{ width: 22 }} />
      </View>
      {/* Top Tabs gồm 3 thể loại: Mới nhất / Phổ biến / Đề xuất */}
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: tint,
          tabBarIndicatorStyle: { backgroundColor: tint },
          tabBarStyle: { backgroundColor: background },
        }}>
        <TopTabs.Screen name="cat1" options={{ title: 'Mới nhất' }} />
        <TopTabs.Screen name="cat2" options={{ title: 'Phổ biến' }} />
        <TopTabs.Screen name="cat3" options={{ title: 'Đề xuất' }} />
      </TopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
});
