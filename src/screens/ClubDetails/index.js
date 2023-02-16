import { View, FlatList } from "react-native";
import clubs from '../../../assets/data/clubs.json';
import { Ionicons } from "@expo/vector-icons";
import DrinksListItem from "../../components/ListItem";
import Header from "./Header";
import styles from "./styles";

const club = clubs[0];

const ClubDetailsPage = () => {
    return (
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header club={club}/>}
            data={club.drinks}
            renderItem={({ item }) => <DrinksListItem drink={item}/>}
            />
                <Ionicons
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}/>
        </View>
    )
};

export default ClubDetailsPage;