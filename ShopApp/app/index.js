import { useEffect, useState } from 'react';
import { FlatList, View } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [products, setProducts] = useState([])

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
}, [])

export default function HomeScreen() {
    return (
        <View>
            <FlatList
            data={products}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}