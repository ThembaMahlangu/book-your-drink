import { View, Text, StyleSheet, FlatList } from "react-native";


const BucketDrinkItem = ({ bucketDrink }) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={{fontWeight: "600"}}>{bucketDrink.name}</Text>
            <Text style={{marginLeft: "auto"}}>R {bucketDrink.price}</Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    quantityContainer: {
        backgroundColor: "lightgrey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
});

export default BucketDrinkItem;