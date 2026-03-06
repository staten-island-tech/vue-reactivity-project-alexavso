<template>
    <div>
        <h2> {{ item.name }}</h2>
        <h3> {{ item.price  }}</h3>
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
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 200px;
  border: 3px solid black;
}
</style>