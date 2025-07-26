import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Dimensions } from 'react-native';
import colors from '../theme/colors';

type PlayersCardProps = {
  onPress?: () => void;
};

const { width, height } = Dimensions.get('window');

const DetailNextGame = ({ onPress }: PlayersCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Text style={styles.text}>No games incomming</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   card: {
  width: width - 32,
  height: height  * 0.18, // makes it square
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 16,
  overflow: 'hidden',
  justifyContent: 'flex-end',
}
,
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
