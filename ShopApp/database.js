import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('shop.db')

export const initDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY NOT NULL, productId INTEGER NOT NULL)',
            [],
            () => console.log('Database initialized'),
            error => console.error('Error Initializing database', error)
        )
    })
}

export const addToCart = (productId) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO cart (productId) VALUES (?)',
            (productId),
            () => console.log('Product added to cart'),
            error => console.error('Error adding product to cart', error)
        )
    })
}

export const getCartItems = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM cart',
            [],
            (_, { rows }) => callback(rows._array),
            error => console.error('Error getting cart items', error)
        )
    })
}