import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CardsView from './components/CardsView';
import Tasks from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <SearchSection />
      <Text style={styles.title}>Categories</Text>
      <CardsView />
      <Text style={styles.title}>Ongoing Task</Text>
      <View style={styles.listContainer}>
        <Tasks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 16,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },

  listContainer: {
    flex: 1,
  },
});
