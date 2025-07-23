import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

type LoadingIndicatorProps = {
  message?: string;
  color?: string;
  size?: 'small' | 'large';
};

const LoadingIndicator = ({
  message ,
  color,
  size,
}: LoadingIndicatorProps) => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#ffffffff',
    fontWeight: '500',
  },
});

export default LoadingIndicator;
