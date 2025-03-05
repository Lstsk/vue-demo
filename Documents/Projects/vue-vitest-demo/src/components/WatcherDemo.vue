<template>
  <div>
    <p>Value: {{ value }}</p>
    <p>Updated: {{ updated }}</p>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
const updated = ref(false);

// Watch the prop value and update state accordingly
watch(
  () => props.value,
  (newVal, oldVal) => {
    updated.value = true;
  }
);

// Simulate some behavior on mount
onMounted(() => {
  console.log("Component has mounted.");
});
</script>
