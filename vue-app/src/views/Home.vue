<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <Navbar />
        <v-main class="mt-3 mx-7 bg-blue-200">
            <router-view />
        </v-main>
    </v-app>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>
<style>
html { overflow-y: auto }
</style>