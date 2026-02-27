import { reactive } from 'vue';

export const store = reactive({
    cart: [
    { id: 1, name: 'Bread', price: 2 },
    { id: 2, name: 'Croissant', price: 3 },
    { id: 3, name: 'Muffin', price: 4 }
]
})