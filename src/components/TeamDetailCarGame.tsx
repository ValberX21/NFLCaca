// components/TeamDetailCardGame.tsx

import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getLastGame } from '../services/api';
import { IGameData } from '../interfaces/games/IGameDate';
import colors from '../theme/colors';

type GameCardProps = {
  teamId: number;
  onPress?: () => void;
};

const TeamDetailCardGame = ({ teamId, onPress }: GameCardProps) => {
  const [teamLastGame, setTeamLastGame] = useState<IGameData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadingLastGame = async () => {
      try {
        const response = await getLastGame(teamId);
        if (response.data.response && response.data.response.length > 0) {
          const lastGame = response.data.response.at(-1);
          setTeamLastGame(lastGame);
        }
      } catch (err: any) {
        setError(`Error loading last game: ${err.message ?? err}`);
      } finally {
        setLoading(false);
      }
    };

    loadingLastGame();
  }, [teamId]);

  if (loading) {
    return <ActivityIndicator color={colors.primary} size="large" />;
  }

  if (error || !teamLastGame) {
    return <Text style={{ color: 'red', padding: 16 }}>{error || 'No game found'}</Text>;
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <View style={styles.card}>
        <View style={styles.teamsRow}>
          <Image source={{ uri: teamLastGame.teams.home.logo }} style={styles.logo} />
          <Text style={styles.vs}>X</Text>
          <Image source={{ uri: teamLastGame.teams.away.logo }} style={styles.logo} />
        </View>

        <View style={styles.namesRow}>
          <Text style={styles.name}>{teamLastGame.teams.home.name}</Text>
          <Text style={styles.name}>{teamLastGame.teams.away.name}</Text>
        </View>

        <Text style={styles.score}>
          {teamLastGame.scores.home.total} – {teamLastGame.scores.away.total}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.accent,
    borderColor: colors.background,
    borderWidth: 1,
    padding: 16,
    marginRight: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: '115%',
    height: 140,
    justifyContent: 'center',
  },
  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  vs: {
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  namesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  name: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: colors.textPrimary,
  },
  score: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default TeamDetailCardGame;
