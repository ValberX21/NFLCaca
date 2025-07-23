import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Dimensions } from 'react-native';

type PlayersCardProps = {
  onPress?: () => void;
};

const { width, height } = Dimensions.get('window');

const DetailNextGame = ({ onPress }: PlayersCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <ImageBackground
          source={require('../assets/images/nfl_team_players.png')}
          style={styles.image}
          imageStyle={{ borderRadius: 8 }}>
          <Text style={styles.text}>Next game</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   card: {
    width: width - 32,
    height: height * 0.18,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
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

export default DetailNextGame;
