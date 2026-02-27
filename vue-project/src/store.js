import { reactive } from 'vue';

export const store = reactive({
    cart: [
    { name: 'Bread', price: 2.50 },
    { name: 'Croissant', price: 3.50 },
    { name: 'Muffin', price: 4 },
    { name: 'Vanilla Cake', price: 55.00 },
    { name: 'Chocolate Cake', price: 55.00 },
    { name: 'Red Velvet Cake', price: 55.00},
    { name: 'Confetti Cake', price: 60.00},
]
})