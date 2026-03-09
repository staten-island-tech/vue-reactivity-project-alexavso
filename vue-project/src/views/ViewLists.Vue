<template>
    <h1 class="title"> Bakery Menu </h1>
    <div class="container">
      <PastryCard
        v-for="pastry in pastries" 
        :key="pastry.name" 
        :item="pastry"
      />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PastryCard from '@/components/PastryCard.vue'

const pastries = ref([
    { name: 'Croissant', 
      price: 3.50,
      description: 'A flaky, buttery pastry that is a staple of French bakeries. Perfect for breakfast or a snack.',
      img: '/images/croissant.jpeg'
    },
    {
      name: 'Cinnamon Roll',
      price: 3.75,
      description: 'A sweet, soft pastry swirled with cinnamon and sugar, often topped with a glaze or cream cheese frosting.',
      img: '/images/cinnamon_roll.jpeg',
    },
    { name: 'Cheesecake Slice', 
      price: 4, 
      description: 'A rich, creamy dessert made with cream cheese, sugar, and a graham cracker crust.', 
      img: '/images/cheesecake_slice.jpeg'
    },
    { name: 'Chocolate Mousse Slice',
      price: 4.50,
      description: 'A light and airy dessert made with whipped cream, chocolate, and sugar.',
      img: '/images/chocolate_slice.jpeg',
    },
    {
      name: 'Strawberry Slice',
      price: 4.50,
      description: 'A refreshing dessert made with layers of sponge cake, fresh strawberries, and whipped cream.',
      img: '/images/strawberry_slice.jpeg',
    },
    {
      name: 'Blueberry Slice',
      price: 4.50,
      description: 'A delicious dessert made with layers of sponge cake, fresh blueberries, and whipped cream.',
      img: '/images/blueberry_slice.jpeg',
    },
    {
      name: 'Matcha Slice',
      price: 4.75,
      description: 'A delicious dessert made with matcha powder, cream cheese, and a graham cracker crust.',
      img: '/images/matcha_slice.jpeg',
    },
    {
      name: 'Vanilla Cupcake',
      price: 3.25,
      description: 'A classic dessert made with vanilla cake and vanilla frosting.',
      img: '/images/vanilla_cup.jpeg',
    },
    {
      name: 'Chocolate Cupcake',
      price: 3.25,
      description: 'A classic dessert made with chocolate cake and chocolate frosting.',
      img: '/images/choco_cup.jpeg',
    }
    
])
</script>

<style scoped>

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(319, 48%, 88%);
  margin: 30px 0;
  text-align: center;
  font-size: 40px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  width: 80vw;
  margin: auto;
}

</style>
