import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <View>
        <Text style={styles.intro}>Hello, Dela</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
      </View>
      <Image source={require('../assets/profile.png')} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  intro: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 18,
    color: '#777',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
