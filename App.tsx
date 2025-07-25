import React, { useEffect, useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TeamDetailScreen from './src/screens/TeamDetailScreen';
import TeamGamesScreen from './src/screens/TeamGamesScreen';
import PlayersListScreen from './src/screens/PlayersListScreen';
import { SafeAreaView, Text, View } from 'react-native';
import BottomNavBar from './src/components/BottomNavBar';
import colors from './src/theme/colors';



export default function App() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [viewGames, setViewGames] = useState(false);
  const [viewPlayers, setViewPlayers] = useState(false);

  const resetToHome = () => {
    setSelectedTeamId(null);
    setViewGames(false);
    setViewPlayers(false);
  };


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View style={{ flex: 1 }}>
        {selectedTeamId === null ? (
          <HomeScreen onSelectTeam={(id) => {
            setSelectedTeamId(id);
            //resetToHome(); 
          }} />
        ) : viewGames ? (
          <TeamGamesScreen teamId={selectedTeamId} goBack={() => setViewGames(false)} />
        ) : viewPlayers ? (
          <PlayersListScreen teamId={selectedTeamId} goBack={() => setViewPlayers(false)}/>
        ) : (
          <TeamDetailScreen
            teamId={selectedTeamId}
            goBack={() => setSelectedTeamId(null)}
            goToGames={(teamId) => {
              setSelectedTeamId(teamId);
              setViewGames(true);
            }}
            goToPlayersList={(teamId) => {
              setSelectedTeamId(teamId);
              setViewPlayers(true);
            }}
          />
        )}

      </View>

      <BottomNavBar
        onPressUser={() => console.log('User pressed')}
        onPressHome={() => console.log('Home pressed')}
        onPressSeason={() => console.log('Season pressed')}
      />
    </SafeAreaView>
  );
}
