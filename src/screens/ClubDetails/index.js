import { View, FlatList } from "react-native";
import clubs from '../../../assets/data/clubs.json';
import { Ionicons } from "@expo/vector-icons";
import DrinksListItem from "../../components/ListItem";
import Header from "./Header";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const club = clubs[0];

const ClubDetailsPage = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    console.warn(id);
    return (
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header club={club}/>}
            data={club.drinks}
            renderItem={({ item }) => <DrinksListItem drink={item}
            keyExtractor={(item) => item.name}/>}
            />
                <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}/>
        </View>
    )
};

export default ClubDetailsPage;