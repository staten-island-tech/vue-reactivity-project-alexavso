<template>
    <div class="card">
        <img :src="item.img" :alt="item.name" />
        <h2> {{ item.name }}</h2>
        <p> {{ item.description }}</p>
        <h3> ${{ item.price.toFixed(2) }}</h3>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  width: 200px;
  border-radius: 12px;
  border: none;
  background: hwb(322 84% 12%);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
}

h2 {
  font-size: 20px;
  margin: 0;
  color: lab(100% 0.01 -0.01);
}

h3 {
  font-size: 18px;
  color: lab(100% 0.01 -0.01);
}

img {
  width: 70%;
  height: 130px;
  object-fit: cover;
  border-radius: 10px;
}

p {
    font-size: 18;
    color: lab(100% 0.01 -0.01);
    text-align: center;
}
</style>