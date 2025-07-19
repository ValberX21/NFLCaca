import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface TeamDetailScreenProps {
  teamId: number;
  goBack: () => void;
}

const TeamDetailScreen = ({ teamId, goBack }: TeamDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team ID: {teamId}</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 16,
  },
});

export default TeamDetailScreen;
