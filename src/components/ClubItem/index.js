import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DefaultImage from '../../../assets/images/default.png';

const ClubItem = ({ club }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Club', { id: club.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.clubContainer}>
        <Image 
        source={{ uri: club.image.startsWith("http") ? club.image : DefaultImage }} 
        style={styles.image}/>
        <View style={styles.row}>
            <View>
              <Text style={styles.title}>{club.name}</Text>
              <Text style={styles.subtitle}>{club.operatingTime} &#8226; {club.operatingDays}</Text>
            </View>

            <View style={styles.rating}>
                <Text>{club.rating}</Text>
            </View>
            
        </View>
      </Pressable>
  );
};

export default ClubItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    clubContainer: {
      width: '100%',
      marginVertical: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "500",
      marginVertical: 5,
    },
    subtitle: {
      color: "green",
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgrey',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
  });
