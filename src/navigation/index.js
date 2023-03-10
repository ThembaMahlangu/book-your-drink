import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen';
import DrinkDetailsScreen from '../screens/DrinkDetails';
import ClubDetailsPage from '../screens/ClubDetails';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';
import ProfileScreen from '../screens/ProfileScreen';
import Bucket from '../screens/Bucket';
import {Foundation, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
import { useAuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const { dbUser } = useAuthContext();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {dbUser ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
        )}
        </Stack.Navigator>
    );
    };

    const Tab = createBottomTabNavigator();

    const HomeTabs = () => {
        return (
            <Tab.Navigator screenOptions={{headerShown: false}} barStyle={{ backgroundColor: "white"}}>
                <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarIcon: ({color}) => (<Foundation name="home" size={24} color={color}/>),}} />
                <Tab.Screen name="Orders" component={OrderStackNavigator} 
                options={{ tabBarIcon: ({color}) => (<MaterialIcons name="list-alt" size={24} color={color}/>),}}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{ tabBarIcon: ({color}) => (<FontAwesome5 name="user-alt" size={24} color={color}/>),}}
                />
            </Tab.Navigator>
        );
    };

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Clubs" component={HomeScreen}/>
        <HomeStack.Screen name="Club" component={ClubDetailsPage}  options={{headerShown: false}}/>
        <HomeStack.Screen name="Drink" component={DrinkDetailsScreen}/>
        <HomeStack.Screen name="Bucket" component={Bucket}/>
        </HomeStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
        <OrdersStack.Screen name="Orders" component={OrderScreen}/>
        <OrdersStack.Screen name="Order" component={OrderDetails}/>
        </OrdersStack.Navigator>
    );
};

export default RootNavigator;