// components/BottomNavBar.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type NavBarProps = {
  onPressUser: () => void;
  onPressHome: () => void;
  onPressSeason: () => void;
};

const BottomNavBar = ({ onPressUser, onPressHome, onPressSeason }:NavBarProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPressUser}>
        <Icon name="person" size={24} color="#fff" />
        <Text style={styles.label}>User</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={onPressHome}>
        <Icon name="home" size={24} color="#fff" />
        <Text style={styles.label}>Home</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onPressSeason}>
        <Icon name="calendar-today" size={24} color="#fff" />
        <Text style={styles.label}>Season</Text>
      </Pressable>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
});
