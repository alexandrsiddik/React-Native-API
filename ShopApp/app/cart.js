import { FlatList, Text, View } from 'react-native';
import { getCartItems } from '../database';

export default function CartScreen() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        getCartItems(items => setCartItems(items))
    }, [])
    return (
        <View>
            <FlatList
            data={cartItems}
            renderItem={({ item }) => <Text>{item.productId}</Text>}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}