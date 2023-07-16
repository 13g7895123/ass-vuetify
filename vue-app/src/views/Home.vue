<template>
    <Sidebar />
    <Navbar />    
    <router-view />
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>