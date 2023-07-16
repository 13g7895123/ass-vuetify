<template>
    <Sidebar />
    <Navbar />
    <v-content class="bg-slate-500">
        <router-view />
    </v-content>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>