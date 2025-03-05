<template>
  <button @click="handleClick">Click me!</button>
</template>

<script setup>
import { defineEmits } from "vue";

// Define the custom event(s) the component will emit
const emit = defineEmits(["custom-click"]);

const handleClick = () => {
  // Emit the event with some payload data
  emit("custom-click", "payload data");
};
</script>
