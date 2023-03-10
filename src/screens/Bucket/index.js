import { View, Text, StyleSheet, FlatList } from "react-native";
import clubs from "../../../assets/data/clubs.json";
import BucketDrinkItem from "../../components/BucketDishItem";

const club = clubs[0];


const Bucket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{club.name}</Text>
            <Text style={{fontWeight: "bold", marginTop: 20, fontSize: 19}}>Your items</Text>
            
            <FlatList
            data={club.drinks}
            renderItem={({item}) => <BucketDrinkItem bucketDrink={item}/>}
            />
            <View style={styles.separator}/>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create order</Text>
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
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
    },
    quantityContainer: {
        backgroundColor: "lightgrey",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    quantity: {
        fontSize: 25,
        // fontWeight: "bold",
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    }
});

export default Bucket;