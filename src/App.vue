<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" @closeSidebar="isSidebarOpen = false" />
<div>
    <!-- Header -->
    <Header @toggleSidebar="toggleSidebar" />

    <!-- Overlay (mobile only) -->
    <div v-if="isSidebarOpen" class="overlay" @click="isSidebarOpen = false"></div>

    <!-- Main Content -->
    <main class="main">
      <Dashboard />
    </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./component/Sidebar.vue";
import Header from "./component/Header.vue";
import Dashboard from "./pages/Dashboard.vue";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #f8f9fd;
}


.main {
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}

/* Mobile: reset margin */
@media (max-width: 992px) {
  .main {
    margin-left: 0;
  }
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 900;
}
</style>
