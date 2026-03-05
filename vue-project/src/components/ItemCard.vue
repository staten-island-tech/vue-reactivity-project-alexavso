<template>
    <div class="container">
        <h2>Title</h2>
        <p>sfbfhsbfhbf</p>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: True
    }
})
</script>

<style scoped>
.container {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 20px 1px rgb(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}
</style>