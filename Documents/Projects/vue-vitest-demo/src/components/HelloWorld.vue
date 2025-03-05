<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define props using the Composition API
const props = defineProps({
  msg: {
    type: String,
    default: "Welcome to Your Vue.js App",
  },
});

// Define reactive state with ref
const count = ref(0);

// Define a method to increment the counter
const increment = () => {
  count.value++;
};
</script>
