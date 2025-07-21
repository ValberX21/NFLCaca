// components/GameCard.tsx

import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { ITeam } from '../interfaces/teams/ITeam';
import colors from '../theme/colors';
import { getLastGame } from '../services/api';
import { IGameData } from '../interfaces/games/IGameDate';

type GameCardProps = {
  teamId: number;
  onPress?: () => void;
};


const TeamDetailCardGame = ({ teamId, onPress }: GameCardProps) => {

  const [teamLastGame, setTealLastGame] = useState<IGameData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    const loadingLastGame = async () => {

      try {        
        const response = await getLastGame(teamId);
        
        if(response.data.response){
          var lastGame =  response.data.response.length;
          console.log('Size - '+response.data.response[lastGame-1])
         
          console.log(response.data.response[lastGame-1])

          setTealLastGame(response.data.response[lastGame-1]);
        }
      } catch (errr) {
          setError(`Erro to load teams: ${errr}`);
      } finally {
          setLoading(false);
      }
    }

    loadingLastGame();

  },[teamId])


  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>

        <View style={styles.teamsRow}>
          <Image source={{ uri: teamLastGame?.teams.home.logo }} style={styles.logo} />
          <Text style={styles.vs}>X</Text>
          <Image source={{ uri: teamLastGame?.teams.away.logo }} style={styles.logo} />
        </View>

        {/* Team names */}
        <View style={styles.namesRow}>
          <Text style={styles.name}>{teamLastGame?.teams.home.name}</Text>
          <Text style={styles.name}>{teamLastGame?.teams.away.name}</Text>
        </View>

        {/* Final score */}
        <Text style={styles.score}>
          {teamLastGame?.scores.home.total} – {teamLastGame?.scores.away.total}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.accent,
    borderColor: colors.background,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  vs: {
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.accent,
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
