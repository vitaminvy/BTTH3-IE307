import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { useAuth } from '@/contexts/auth-context';

export default function LogoutScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      logout();
      router.replace('/');
    }, 0);

    return () => clearTimeout(timeout);
  }, [logout, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
