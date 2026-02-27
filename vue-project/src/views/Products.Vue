<script setup>
import { bakery } from '../Bakery'

const products = [
    { id: 1, name: 'Bread', price: 2 },
    { id: 2, name: 'Croissant', price: 3 },
    { id: 3, name: 'Muffin', price: 4 }
]

function addToCart(product) {
    const existing = bakery.cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity++;
    } else {
        bakery.cart.push({ ...product, quantity: 1 });  
    }
}

</script>

<template>
    <div>
        <h2>Products</h2>
    
        <div v-for="product in products" :key="product.id">
            <h2>{{ product.name }}</h2>
            <p>Price: ${{ product.price }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
        </div>
    </div>

</template>