import { View, StyleSheet, Text, Image } from "react-native";
import clubs from "../../../assets/data/clubs.json";

const DrinksListItem = ({ drinks }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{drinks.name}</Text>
            <Text style={styles.description}>{drinks.description}</Text>
            <Text style={styles.price}>{drinks.price}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
        letterSpacing: 0.5,
    },
    description: {
        color: "gray",
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
});

export default DrinksListItem;