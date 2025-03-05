<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This is a snapshot testing examples.</p>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: "Hello, World!",
  },
});
</script>
