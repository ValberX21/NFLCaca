import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getListPlayers } from '../services/api'; // você deve implementar isso
import colors from '../theme/colors';
import { IPlayer } from 'interfaces/player/IPlayer';
type Props = {
  teamId: number;
  goBack: () => void;
};

const PlayersListScreen = ({ teamId, goBack }: Props) => {
  const [players, setPlayers] = useState<IPlayer[]>();
  const [loading, setLoading] = useState(true);













  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await getListPlayers(teamId); // sua função no service
      setPlayers(res.data.response as IPlayer[]);
      setLoading(false);
    };
    fetchPlayers();
  }, [teamId]);

  if (loading) return <Text>Loading players...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.secondary,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 16,
  },
});

export default PlayersListScreen;
