<template>
    <form @submit.prevent="submit">
        <v-text-field
        label="Case"
        ></v-text-field>

        <v-select
        v-model="selectCate.value"
        :items="categories.value"
        label="Category"
        ></v-select>

        <v-text-field
        label="Phone Number"
        ></v-text-field>

        <v-text-field        
        label="E-mail"
        ></v-text-field>

        <!-- <v-select
        v-model="select.value.value"
        :items="items"
        :error-messages="select.errorMessage.value"
        label="Select"
        ></v-select> -->

        <!-- <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="Option"
        type="checkbox"
        ></v-checkbox> -->

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

const categories = ref(['web', 'python'])
const selectCate = ref('')

const submit = () => {}
</script>