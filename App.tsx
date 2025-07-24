import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TeamDetailScreen from './src/screens/TeamDetailScreen';
import TeamGamesScreen from './src/screens/TeamGamesScreen';
import { SafeAreaView, Text, View } from 'react-native';
import BottomNavBar from './src/components/BottomNavBar';
import colors from './src/theme/colors';


export default function App() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [viewGames, setViewGames] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View style={{ flex: 1 }}>
        {selectedTeamId === null ? (
          <HomeScreen onSelectTeam={(id) => {
            setSelectedTeamId(id);
            setViewGames(false);
          }} />
        ) : viewGames ? (
          <TeamGamesScreen teamId={selectedTeamId} />
        ) : (
          <TeamDetailScreen
            teamId={selectedTeamId}
            goBack={() => setSelectedTeamId(null)}
            goToGames={(teamId) => {
              setSelectedTeamId(teamId);
              setViewGames(true);
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
