import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { getTeams } from '../services/api';
import TeamCard from '../components/TeamCardDetail';
import { ITeam } from '../interfaces/teams/ITeam';
import colors from '../theme/colors';
import { HomeScreenProps } from '../interfaces/HomeScreenProps'
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen = ({ onSelectTeam }: HomeScreenProps) => {

  const [teams, setTeams] = useState<ITeam[]>([]);
  const [filterTeam, setfilterTeam] = useState<ITeam[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeams();

        const allTeams = response.data.response || [];

        if (allTeams.length > 0) {
          setTeams(allTeams);
          setfilterTeam(allTeams);
        } else {
          const fallbackError =
            response.data.errors?.requests ||
            response.data.errors?.plan ||
            'Unknown error loading teams';
          setError(fallbackError);
        }
      } catch (erro) {
        setError('Erro to load teams: ' + erro);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const searchTeam = (teamSearch: string) => {
    setSearchTerm(teamSearch);
    const filtered = teams.filter(t =>
      t.name.toLowerCase().includes(teamSearch.toLowerCase())
    );
    setfilterTeam(filtered);
  }

  if (loading) {
    return (
      <LoadingIndicator message="Loading teams..." color="#ffffffff" />
    );
  }

  if (error) {
    return (
      <ErrorMessage title='🚨 Something went wrong' message={error} />
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder='Search team by name'
        placeholderTextColor='#aaa'
        value={searchTerm}
        onChangeText={searchTeam}
      >

      </TextInput>
      <FlatList
        data={filterTeam}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TeamCard team={item} onPress={() => onSelectTeam(item.id)} />
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }, errorCard: {
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
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
});

export default HomeScreen;
