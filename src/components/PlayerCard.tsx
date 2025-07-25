import { IPlayer } from 'interfaces/player/IPlayer';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import colors from '../theme/colors';

interface PlayerCardDataProps {
  player: IPlayer;
}

const PlayerCardData = ({ player }: PlayerCardDataProps) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: player.image }} style={styles.image} />

        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.position}>
          #{player.number} • {player.position} ({player.group})
        </Text>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{player.age}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>{player.height}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>{player.weight}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>College:</Text>
          <Text style={styles.value}>{player.college}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Experience:</Text>
          <Text style={styles.value}>{player.experience} years</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Salary:</Text>
          <Text style={styles.value}>{player.salary}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,    
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.textPrimary,
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    borderWidth: 2,
    borderColor: '#1DB954',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#1DB954',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textCard,
    marginBottom: 6,
  },
  position: {
    fontSize: 16,
    color: '#AAA',
    marginBottom: 16,
  },
  infoBlock: {
    color:colors.textCard,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.textCard,
  },
  value: {
    fontSize: 15,
    color: colors.textCard,
  },
});

export default PlayerCardData;
