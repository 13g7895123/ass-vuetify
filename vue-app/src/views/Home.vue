<template>
    <Sidebar />
    <Navbar />
    <v-container>
        <router-view />
    </v-container>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>