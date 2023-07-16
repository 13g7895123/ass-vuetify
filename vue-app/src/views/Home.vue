<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <Navbar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>