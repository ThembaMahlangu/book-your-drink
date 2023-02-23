import { View, Text, Image, FlatList } from 'react-native';
import orders from "../../../assets/data/orders.json";
import clubs from "../../../assets/data/clubs.json";
import styles from "./styles";
import BucketDrinkItem from '../../components/BucketDishItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
        <View style={styles.page}>
            <Image source={{ uri: order.Club.image }} style={styles.image}/>
            <View style={styles.container}>
                <Text style={styles.title}>{order.Club.name}</Text>
                <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
                <Text style={styles.menuTitle}>Your orders</Text>
            </View>
        </View>
    </View>
  )
}

const OrderDetails = () => {
    return (
        <FlatList
            data={clubs[0].drinks}
            renderItem={({item}) => <BucketDrinkItem bucketDrink={item}/>}
            ListHeaderComponent={OrderDetailsHeader}
        />
    )
};

export default OrderDetails;