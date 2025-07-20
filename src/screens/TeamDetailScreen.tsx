import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { getTeamById } from '../services/api';
import { Team } from '../interfaces/Team';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface TeamDetailScreenProps {
  teamId: number;
  goBack: () => void;
}

const TeamDetailScreen = ({ teamId, goBack }: TeamDetailScreenProps) => {

  const [teamDetail, setTeamsDetail] = useState<Team>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    const fetchTeamDetail = async () => {

      try {

        const response = await getTeamById(teamId);
        console.log(response.data.response)
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
  })

 return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: teamDetail?.logo }}
        style={styles.card}
        imageStyle={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)']}
          style={styles.gradient}
        >
          <Text style={styles.name}>{teamDetail == undefined ? '' : teamDetail.name}</Text>
          <Text style={styles.info}>Coach: {teamDetail?.coach}</Text>
          <Text style={styles.info}>City: {teamDetail?.city}</Text>
          <Text style={styles.info}>Owner: {teamDetail?.owner}</Text>
          <Text style={styles.info}>Established: {teamDetail?.stadium}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width - 32,
    height: height * 0.5,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  gradient: {
    padding: 16,
    height: '100%',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
});


export default TeamDetailScreen;
