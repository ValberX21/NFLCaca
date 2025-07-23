import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { ITeam } from '../interfaces/teams/ITeam';
import colors from '../theme/colors';

type TeamCardProps = {
  team: ITeam;
  onPress: () => void;
};


const TeamCard = ({ team, onPress  }: TeamCardProps) => {

  return (
    <TouchableOpacity onPress={onPress }>
      <View style={styles.card}>
        <Text style={styles.name}>{team.name}</Text>
        <Image source={{ uri: team.logo }} style={styles.logo} />
        <Text style={styles.name}>Coach: {team.coach}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  card: {
    borderColor: colors.textCard,
    backgroundColor: colors.textPrimary,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  name: {
    color:'#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
});

export default TeamCard;
