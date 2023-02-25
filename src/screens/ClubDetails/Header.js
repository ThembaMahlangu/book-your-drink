import { View, Text, Image } from "react-native";
import styles from "./styles";
import DefaultImage from "../../../assets/images/default.png";

const ClubHeader = ({ club }) => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: club.image.startsWith("http") ? club.image : DefaultImage }} 
            style={styles.image}/>
            <View style={styles.container}>
                <Text style={styles.title}>{club.name}</Text>
                <Text style={styles.subtitle}>{club.operatingTime} &#8226; {club.operatingDays}</Text>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
    )
};

export default ClubHeader;