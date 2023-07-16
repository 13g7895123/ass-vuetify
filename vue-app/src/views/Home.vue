<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <Navbar />
        <!-- <v-content> -->
            <router-view />
        <!-- </v-content> -->
    </v-app>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>