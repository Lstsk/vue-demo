<template>
  <div>
    <h1>Parent Component</h1>
    <ChildComponent :message="childMessage" />
  </div>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue";

const childMessage = ref("Hello from Parent!");
</script>
