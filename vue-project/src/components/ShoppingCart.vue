<template>
    <div class="cart">
        <h2>Cart</h2>
        <div v-for="item in cart" :key="item.name">
            {{ item.name }} - ${{ item.price.toFixed(2) }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    cart: Array,
})
</script>

<style scoped>
.cart {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: hsl(319, 48%, 88%);
    margin: 30px 0;
    text-align: center;
    font-size: 40px;
}
</style>