<template>
    <div class="container">
      <PastryCard></PastryCard>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PastryCard from '@/components/PastryCard.vue';

const pastries = ref([
    { name: 'Bread', price: 2.50 },
    { name: 'Croissant', price: 3.50 },
    { name: 'Muffin', price: 4 },
    { name: 'Vanilla Cake', price: 55.00 },
    { name: 'Chocolate Cake', price: 55.00 },
    { name: 'Red Velvet Cake', price: 55.00},
    { name: 'Confetti Cake', price: 60.00},
])
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
