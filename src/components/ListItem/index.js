import { View, StyleSheet, Text, Image } from "react-native";

const DrinksListItem = ({ drink }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
            <Text style={styles.name}>{drink.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{drink.description}</Text>
            <Text style={styles.price}>{drink.price}</Text>
            </View>
            {drink.image && (<Image source={{ uri: drink.image }} style={styles.image}/>)}
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
        flexDirection: "row",
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
    image: {
        height: 75,
        aspectRatio: 1,
    }
});

export default DrinksListItem;