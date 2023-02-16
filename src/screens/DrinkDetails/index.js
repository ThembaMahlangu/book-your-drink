import { View, Text, StyleSheet } from "react-native";
import clubs from "../../../assets/data/clubs.json";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const drink = clubs[0].drinks[0];

const DrinkDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);

    const onMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const onPlus = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.page}>
            <Text style={styles.title}>{drink.name}</Text>
            <Text style={styles.description}>{drink.description}</Text>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
    },
    description: {
        color: "gray",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    quantity: {
        fontSize: 25,
        // fontWeight: "bold",
        marginHorizontal: 20,
    }
});

export default DrinkDetailsScreen;