import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TeamDetailScreen from './src/screens/TeamDetailScreen';
import { View } from 'react-native';

export default function App() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  return (
    <View style={{ flex: 1 }}>
       {selectedTeamId === null ? ( 
        <HomeScreen onSelectTeam={(id) => setSelectedTeamId(id)} />
       ) : (
        <TeamDetailScreen teamId={selectedTeamId} goBack={() => setSelectedTeamId(null)} />
      )} 
    </View>
  );
}
