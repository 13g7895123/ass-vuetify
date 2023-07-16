<template>
    <Sidebar />
    <Navbar />
    <v-content>
        <router-view />
    </v-content>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>