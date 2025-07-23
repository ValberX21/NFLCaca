import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../theme/colors';

type PlayersCardProps = {
  onPress?: () => void;
};

const StatistcCard = ({ onPress }: PlayersCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <ImageBackground
          source={require('../assets/images/nfl_team_statistc.png')}
          style={styles.image}
          imageStyle={{ borderRadius: 8 }}
        >
          <Text style={styles.text}>Statistics</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 220, 
    height: 135, 
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
    borderWidth: 1,    
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:90,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
});

export default StatistcCard;
