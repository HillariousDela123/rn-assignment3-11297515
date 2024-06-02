import React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

const SearchSection = () => {
  return (
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Image
          source={require('../assets/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={'#000'}
        />
      </View>
      <View style={styles.filter}>
        <Image
          source={require('../assets/filter.png')}
          style={styles.filterIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 30,
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbf9f7',
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 5,
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  searchInput: {
    color: '#2A3439',
    fontSize: 19,
    width: 200,
    padding: 10,
  },
  filterIcon: {
    height: 30,
    width: 30,
  },
  filter: {
    backgroundColor: '#007FFF',
    padding: 10,
    borderRadius: 15,
  },
});

export default SearchSection;
