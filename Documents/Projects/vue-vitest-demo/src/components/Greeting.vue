<template>
  <div>
    <p>{{ greeting }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "Guest",
  },
});
// A computed property using the prop
const greeting = computed(() => `Hello, ${props.name}!`);
</script>
