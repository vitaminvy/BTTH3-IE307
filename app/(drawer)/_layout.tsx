import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Drawer } from 'expo-router/drawer';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1529338296731-c4280a318487?auto=format&fit=crop&w=600&q=60' }}
        style={styles.headerBg}
        imageStyle={{ borderRadius: 18 }}>
        <View style={styles.headerOverlay}>
          <Text style={styles.brand}>IE307 Academy</Text>
          <Text style={styles.subtitle}>Học tập không giới hạn</Text>
        </View>
      </ImageBackground>
      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Phiên bản 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default function AppDrawer() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#0F172A',
        drawerType: 'front',
        drawerActiveTintColor: '#0F62FE',
        drawerInactiveTintColor: '#4B5563',
        drawerActiveBackgroundColor: 'rgba(15, 98, 254, 0.12)',
        drawerLabelStyle: { fontWeight: '600', fontSize: 15 },
      }}>
      <Drawer.Screen
        name="(home)"
        options={{
          title: 'Trang chủ',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size ?? 22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="(notifications)"
        options={{
          title: 'Thông báo',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size ?? 22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          title: 'Trợ giúp',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size ?? 22} color={color} />
          ),
          headerTitle: 'Trung tâm hỗ trợ',
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    margin: 16,
    height: 140,
    borderRadius: 18,
    overflow: 'hidden',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 18,
    justifyContent: 'center',
    padding: 16,
  },
  brand: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: '#E0E7FF',
    marginTop: 4,
  },
  drawerList: {
    flex: 1,
    paddingHorizontal: 12,
  },
  footer: {
    padding: 16,
  },
  footerText: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
  },
});
