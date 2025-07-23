import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ErrorMessageProps = {
  title?: string;
  message: string;
};

const ErrorMessage = ({
  title,
  message,
}: ErrorMessageProps) => {
  return (
    <View style={styles.centered}>
      <View style={styles.errorCard}>
        <Text style={styles.errorTitle}>{title}</Text>
        <Text style={styles.errorMessage}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    maxWidth: '90%',
    alignItems: 'center',
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cc0000',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});

export default ErrorMessage;
