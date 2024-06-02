import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const data = [
  { key: 'Mobile App Development' },
  { key: 'Web Development' },
  { key: 'Push Ups' },
  { key: 'Reading' },
  { key: 'Meditation' },
  { key: 'Grocery Shopping' },
  { key: 'Laundry' },
  { key: 'Cooking' },
  { key: 'Cleaning' },
  { key: 'Homework' },
  { key: 'Gym' },
  { key: 'Walking the Dog' },
  { key: 'Meeting' },
  { key: 'Call Parents' },
  { key: 'Project Work' },
];

const Tasks = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.itemText}>{item.key}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#FBF9F7',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8D1BA',
    borderStyle: 'solid',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 18,
  },
});

export default Tasks;
