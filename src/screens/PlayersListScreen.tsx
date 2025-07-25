import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, BackHandler, TextInput } from 'react-native';
import { getListPlayers } from '../services/api'; // você deve implementar isso
import colors from '../theme/colors';
import { IPlayer } from 'interfaces/player/IPlayer';
import PlayerCardData from '../components/PlayerCard';

type Props = {
  teamId: number;
  goBack: () => void;
};

const PlayersListScreen = ({ teamId, goBack }: Props) => {

  const [filteredPlayer, setFilteredPlayer] = useState<IPlayer[]>([]);
  const [searchPlayer, setSearchPlayer] = useState('');

  const [players, setPlayers] = useState<IPlayer[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        goBack(); 
        return true;
      }
    );
    return () => backHandler.remove();
  }, [goBack]);


  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await getListPlayers(teamId);
      setPlayers(res.data.response);
      setFilteredPlayer(res.data.response);
      setLoading(false);
    };
    fetchPlayers();
  }, [teamId]);

  const searchPlayerInput = (text: string) => {
    setSearchPlayer(text);

    if (text.trim() === '') {
      setFilteredPlayer(players ?? []);
      return;
    }

    const filtered = players?.filter((p) =>
      p.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredPlayer(filtered ?? []);
  };

  if (loading) return <Text>Loading players...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by stadium..."
        placeholderTextColor="#aaa"
        value={searchPlayer}
        onChangeText={searchPlayerInput}
      />

      <FlatList
        data={filteredPlayer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlayerCardData player={item} />
        )}
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
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    color: '#fff',
    backgroundColor: '#333',
  },
});

export default PlayersListScreen;
