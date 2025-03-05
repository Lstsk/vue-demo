<template>
  <div>
    <h1>User List</h1>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const users = ref([]);
const errorMessage = ref("");

const fetchUsers = async () => {
  try {
    const response = await axios.get("/api/users");
    users.value = response.data;
  } catch (error) {
    errorMessage.value = "Failed to load users";
  }
};

onMounted(fetchUsers);
</script>
