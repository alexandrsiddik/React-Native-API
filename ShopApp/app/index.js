import { useEffect, useState } from 'react';
import { FlatList, View, RefreshControl } from "react-native";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
const [products, setProducts] = useState([])
const [refreshing, setRefreshing] = useState(false)

const fetchProducts = () => {
    setRefreshing(true)
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        setProducts(data)
        setRefreshing(false)
    })
}

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
}, [])

    return (
        <View>
            <FlatList
            data={products}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={fetchProducts} />
            }
            />
        </View>
    )
}