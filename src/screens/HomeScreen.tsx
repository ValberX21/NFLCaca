import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getTeams } from '../services/api';
import TeamCard from '../components/TeamCard';
import { ITeam } from '../interfaces/teams/ITeam';
import colors from '../theme/colors';
import { HomeScreenProps } from '../interfaces/HomeScreenProps'
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen = ({ onSelectTeam }: HomeScreenProps) => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    const fetchTeams = async () => {

      try {

        const response = await getTeams();

        if (response.data.response && response.data.response.length > 0) {
          setTeams(response.data.response);
        }
        else if (response.data.errors.plan.requests) {
          setError(response.data.errors.plan.requests);
        }
        else {
          setError(response.data.errors.plan);
        }

      } catch (erro) {
        setError('Erro to load teams');
      } finally {
        setLoading(false);
      }
    }
    fetchTeams();
  }, []);

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
      <FlatList
        data={teams}
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
  }, centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
