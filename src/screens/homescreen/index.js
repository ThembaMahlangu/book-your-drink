import { FlatList, StyleSheet } from 'react-native';
import ClubItem from '../../components/ClubItem/index';
import clubs from '../../../assets/data/clubs.json';

export default function HomeScreen() {
  return (
      <FlatList 
      data={clubs}
      renderItem={({ item }) => <ClubItem club={item}/>} 
      showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({});
