import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TeamDetailScreen from './src/screens/TeamDetailScreen';
import { SafeAreaView, Text, View } from 'react-native';
import BottomNavBar from './src/components/BottomNavBar';
import colors from './src/theme/colors';

export default function App() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: colors.secondary }}>
      <View style={{ flex: 1 }}>
        {selectedTeamId === null ? (
          <HomeScreen onSelectTeam={(id) => setSelectedTeamId(id)} />
        ) : (
          <TeamDetailScreen teamId={selectedTeamId} goBack={() => setSelectedTeamId(null)} />
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
