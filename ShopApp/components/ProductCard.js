import { Image, Text, View, Button } from 'react-native';
import { addToCart } from '../database';

export default function ProductCard({ product }) {
    return (
        <View>
            <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
            <Button title="Добавить в корзину" onPress={() => addToCart(product.id)} />
        </View>
    )
}