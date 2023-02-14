import { FlatList, StyleSheet, View } from 'react-native';
import ClubItem from '../../components/ClubItem/index';
import clubs from '../../../assets/data/clubs.json';

export default function HomeScreen() {
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
