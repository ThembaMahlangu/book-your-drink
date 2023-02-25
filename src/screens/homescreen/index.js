import { FlatList, StyleSheet, View } from 'react-native';
import ClubItem from '../../components/ClubItem/index';
import React, { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Club } from '../../models';

export default function HomeScreen() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    DataStore.query(Club).then((results) => { setClubs(results) });
  }, []);

  return (
    <View style={styles.page}>
      <FlatList 
      data={clubs}
      renderItem={({ item }) => <ClubItem club={item}/>} 
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});
