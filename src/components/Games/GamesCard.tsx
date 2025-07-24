import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

type GameCardProps = {
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  date: string;
  onPress?: () => void;
};

const GameCard = ({ homeTeam, awayTeam, date, onPress }: GameCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.teamsRow}>
        <View style={styles.team}>
          <Image source={{ uri: homeTeam.logo }} style={styles.logo} />
          <Text style={styles.teamName}>{homeTeam.name}</Text>
        </View>

        <Text style={styles.vsText}>X</Text>

        <View style={styles.team}>
          <Image source={{ uri: awayTeam.logo }} style={styles.logo} />
          <Text style={styles.teamName}>{awayTeam.name}</Text>
        </View>
      </View>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textCard,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  teamsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  team: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 4,
  },
  teamName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  vsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#000',
  },
  date: {
    marginTop: 10,
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default GameCard;
