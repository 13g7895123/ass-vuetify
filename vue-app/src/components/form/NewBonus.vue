<template>
    <form @submit.prevent="submit" class="px-3">
        <v-text-field
            variant="outlined"
            label="Case"
        ></v-text-field>

        <v-select
            variant="outlined"
            v-model="selectedCate"
            :items="['web', 'python']"
            label="Category"
        ></v-select>

        <v-text-field
            variant="outlined"
            label="Amount"
        ></v-text-field>

        <v-select
            variant="outlined"
            v-model="selectedStatus"
            :items="['接洽中', '未開始', '執行中', '已完成', '已完成(待付款)']"
            label="status"
        ></v-select>

        <v-btn
            class="me-4"
            type="submit"
        >
        submit
        </v-btn>

        <v-btn @click="">
        clear
        </v-btn>
    </form>
</template>
<script setup>
import { ref, watchEffect, onMounted } from 'vue'

const categories = ref(['web', 'python'])
const selectedCate = ref()
const selectedStatus = ref()

onMounted(() => {
    console.log(categories.value);
})

watchEffect(() => {
    console.log(categories.value);
})

const submit = () => {}
</script>