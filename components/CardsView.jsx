import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const CardsView = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={true}
      horizontal={true}
      style={styles.cardsContainer}
    >
      <View style={styles.cards}>
        <View style={styles.card}>
          <Image
            source={require('../assets/work-online.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Exercise</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/work-desk.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Study</Text>
          <Text style={styles.taskCount}>12 Tasks</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    marginBottom: 20,
  },
  cards: {
    flexDirection: 'row',
  },
  card: {
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0,
    backgroundColor: '#FBF9F7',
    borderRadius: 8,
    marginHorizontal: 5,
    width: 150,
    marginTop: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 20,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardsView;
