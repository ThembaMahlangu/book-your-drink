import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        top: 35,
        left: 10,
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 16,
        letterSpacing: 0.7,
    }
});