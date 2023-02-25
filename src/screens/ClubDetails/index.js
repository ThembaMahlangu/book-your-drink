import { View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DrinksListItem from "../../components/ListItem";
import Header from "./Header";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Club, Drink } from "../../models";

const ClubDetailsPage = () => {

    const [club, setClub] = useState(null);
    const [drinks, setDrinks] = useState([]);

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Club, id)
            .then(setClub)
            .catch(error => console.log('Error fetching club:', error));
        DataStore.query(Drink, drink => drink.clubID.eq(id))
            .then(setDrinks)
            .catch(error => console.log('Error fetching drinks:', error));
    },[id]);    

    if (!club) {
        return <ActivityIndicator size={"large"} color="gray"/>;
    }

    return (
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header club={club}/>}
            data={drinks}
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