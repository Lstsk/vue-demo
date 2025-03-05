<template>
  <div>
    <input v-model="inputValue" />
    <p>You typed: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputValue = ref("");
</script>
