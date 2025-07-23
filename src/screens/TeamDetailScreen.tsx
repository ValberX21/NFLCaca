import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { getTeamById } from '../services/api';
import { ITeam } from '../interfaces/teams/ITeam';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../theme/colors';
import TeamDetailCarGame from '../components/TeamDetailCardGame';
import PlayersCard from '../components/TeamPlayers';
import TeamStatistc from '../components/TeamStatistc';
import DetailNextGame from '../components/TeamDetailNextGame';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';

const { width, height } = Dimensions.get('window');

interface TeamDetailScreenProps {
  teamId: number;
  goBack: () => void;
}

const TeamDetailScreen = ({ teamId, goBack }: TeamDetailScreenProps) => {

  const [teamDetail, setTeamsDetail] = useState<ITeam>();
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
    const fetchTeamDetail = async () => {

      try {

        const response = await getTeamById(teamId);
        if (response.data.response && response.data.response.length > 0) {
          setTeamsDetail(response.data.response[0]);
        } else {
          setError(response.data.errors[0]);
        }
      } catch (error) {
        setError(`Erro to load teams: ${error}`);
      } finally {
        setLoading(false);
      }

    }
    fetchTeamDetail();
  }, [])

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
      <ImageBackground
        source={{ uri: teamDetail?.logo }}
        style={styles.card}        
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)']}
          style={styles.gradient}
        >
          <View style={styles.textBox}>
            <Text style={styles.name}>{teamDetail?.name ?? ''}</Text>
            <Text style={styles.info}>Coach: {teamDetail?.coach}</Text>
            <Text style={styles.info}>City: {teamDetail?.city}</Text>
            <Text style={styles.info}>Owner: {teamDetail?.owner}</Text>
            <Text style={styles.info}>Established: {teamDetail?.stadium}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={{ width: '100%' }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <TouchableOpacity onPress={() => console.log('Show game list')}>
            <View style={styles.cardHoriCustom}>
              <TeamDetailCarGame teamId={teamDetail?.id ?? 0} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Show players')}>
            <View style={styles.cardHoriCustom}>
              <PlayersCard />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Show team stats')}>
            <View style={styles.cardHori}>
              <TeamStatistc />
            </View>
          </TouchableOpacity>
        </ScrollView>

      </View>
      <DetailNextGame />
    </View>
  );
};
const CARD_WIDTH = width * 0.7;

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  card: {
    width: width - 32,
    height: height * 0.5,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  gradient: {
    padding: 16,
    height: '100%',
    justifyContent: 'flex-end',
  },
  textBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // white transparent box
    padding: 16,
    borderRadius: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textCard,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: colors.textCard,
    marginBottom: 4,
  },
  scrollContainer: {
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },
  cardHori: {
    width: 250,
    height: 140,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  cardHoriCustom: {
    width: CARD_WIDTH,
    height: 140,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
});


export default TeamDetailScreen;
