import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InfoCardProps {
  title: string;
  description?: string;
  rightContent?: ReactNode;
}

export function InfoCard({ title, description, rightContent }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        {description ? <Text style={styles.cardDescription}>{description}</Text> : null}
      </View>
      {rightContent ? <View style={{ marginLeft: 12 }}>{rightContent}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  cardDescription: {
    marginTop: 4,
    color: '#6B7280',
  },
});
