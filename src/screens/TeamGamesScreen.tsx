import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Text, BackHandler } from 'react-native';
import { getListGames } from '../services/api';
import { IGame } from '../interfaces/games/IGame';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';
import colors from '../theme/colors';
import { IGameData } from 'interfaces/games/IGameData';
import GameCard from '../components/Games/GamesCard';

interface TeamGamesScreenProps {
  teamId: number;
  goBack: () => void;
}

const TeamGamesScreen = ({ teamId, goBack }: TeamGamesScreenProps) => {


  const [games, setGames] = useState<IGameData[]>([]);
  const [filteredGames, setFilteredGames] = useState<IGameData[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    const fetchGames = async () => {
      try {
        const response = await getListGames(teamId);

        const games: IGameData[] | undefined = response?.data?.response;

        if (!games || !Array.isArray(games)) {
          setError('Invalid data from API');
          return;
        }

        const sortedGames = games.sort(
          (a, b) =>
            new Date(b.game.date.date).getTime() - new Date(a.game.date.date).getTime()
        );
        setGames(sortedGames);
        setFilteredGames(sortedGames);
      } catch (err) {
        setError('Failed to load games: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [teamId]);

  const searchGames = (text: string) => {
    setSearchText(text);
    const filtered = games.filter((g) =>
      g.game.venue.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredGames(filtered);
  };


  if (loading) return <LoadingIndicator message="Loading games..." color="#fff" />;
  if (error) return <ErrorMessage title="❌ Error" message={error} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by stadium..."
        placeholderTextColor="#aaa"
        value={searchText}
        onChangeText={searchGames}
      />

      <FlatList
        data={filteredGames}
        keyExtractor={(item) => item.game.toString()}
        renderItem={({ item }) => (
          <GameCard
            homeTeam={{ name: item.teams.home.name, logo: item.teams.home.logo }}
            awayTeam={{ name: item.teams.away.name, logo: item.teams.away.logo }}
            date={item.game.date.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.secondary,
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

export default TeamGamesScreen;
