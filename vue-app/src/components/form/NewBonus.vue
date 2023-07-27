<template>
    <form @submit.prevent="submit" class="px-3">
        <v-text-field
            v-model="inpName"
            variant="outlined"
            label="Case"
        ></v-text-field>

        <v-select
            variant="outlined"
            v-model="selectedCate"
            :items="categories"
            label="Category"
        ></v-select>

        <v-text-field
            v-model="inpAmount"
            variant="outlined"
            label="Amount"
        ></v-text-field>

        <v-select
            variant="outlined"
            v-model="selectedStatus"
            :items="['接洽中', '未開始', '執行中', '已完成', '已完成(待付款)']"
            label="status"
        ></v-select>

        <v-text-field
            type="date"
            v-model="inpStartContactDate"
            variant="outlined"
            label="start contact date"
        ></v-text-field>

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
import axios from 'axios'

const categories = ['web', 'python']

const inpName = ref()
const selectedCate = ref()
const inpAmount = ref()
const selectedStatus = ref()
const inpStartContactDate = ref()

const apiUrl = ref()

onMounted(() => {
    console.log(categories.value);
})

watchEffect(() => {
    console.log(categories.value);
})

const submit = async() => {

    const formData = ref({
        name: inpName.value,
        cate: selectedCate.value,
        status: selectedStatus.value,
        amount: inpAmount.value,
        start_contact_date: inpStartContactDate.value
    })

    apiUrl.value = '/api/bonus'
    const { data: { success, msg } } = await axios.post(
        apiUrl.value,
        formData.value
    )

    console.log(success);

    if (success){
        handleClose()
        Swal.fire({
            title: `建立紀錄成功`,
            icon: 'success',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
        }).then(() => {
            // emits('handleUpdateProfiles')
        })
        // alert('success')
    }
}
</script>