import { View, Text, FlatList, StyleSheet, Images, Image } from "react-native";
import clubs from '../../../assets/data/clubs.json';
import { Ionicons } from "@expo/vector-icons";
import DrinksListItem from "../../components/ListItem";

const club = clubs[0];

const ClubDetailsPage = () => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: club.image }} style={styles.image}/>
            <View style={styles.iconContainer}>
                <Ionicons
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{club.name}</Text>
                <Text style={styles.subtitle}>{club.operatingTime} &#8226; {club.operatingDays}</Text>
            </View>

            <DrinksListItem drinks={club.drinks[0]}/>
            <DrinksListItem drinks={club.drinks[2]}/>
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: "100%",
        aspectRatio: 5/3,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
    },
    subtitle: {
        color: "grey",
        fontSize: 15,
    },
    container: {
        margin: 10,
    },
    iconContainer: {
        position: "absolute",
        top: 20,
        left: 5,
    }
});

export default ClubDetailsPage;