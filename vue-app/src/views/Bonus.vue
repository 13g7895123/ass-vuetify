<template>
    <v-row class="px-3 mt-3">
        <v-btn 
            color="blue-accent-3"
            prepend-icon="mdi-plus-circle-outline"
            variant="tonal"
            @click="handleAddBtn"
            >
            新增
        </v-btn>
        <!-- <v-text-field></v-text-field> -->
    </v-row>
    <v-row class="px-3 pt-3">
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="tableData"
            class="elevation-1"
            item-value="name"
            @update:options="loadItems"
        ></v-data-table-server>
    </v-row>
    <NewBonus
        :showDialog = showDialog
        @closeDialog="closeDialog"
    />
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import NewBonus from '../components/dialog/NewBonus.vue';
import axios from 'axios'

const tableData = ref([])
const showDialog = ref(false)

const getData = async() => {
  const { data: { success, data } } = await axios.get('/api/bonus')

  if (success){
    console.log(data)
    tableData.value = data
  }
}

watchEffect(() => getData())

const handleAddBtn = () => {
    showDialog.value = true
}

const closeDialog = () =>{
    showDialog.value = false
}
 
const FakeAPI = {
    async fetch ({ page, itemsPerPage, sortBy }) {
        return new Promise(resolve => {
            setTimeout(() => {
                const start = (page - 1) * itemsPerPage
                const end = start + itemsPerPage
                const items = tableData.value.slice()

                if (sortBy.length) {
                    const sortKey = sortBy[0].key
                    const sortOrder = sortBy[0].order
                    items.sort((a, b) => {
                        const aValue = a[sortKey]
                        const bValue = b[sortKey]
                        return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
                    })
                }

                const paginated = items.slice(start, end)

                resolve({ items: paginated, total: items.length })
            }, 500)
        })
    }
}

const itemsPerPage = 5
const headers = [
    { title: 'Bonus', align: 'start', sortable: false, key: 'name' },
    { title: 'Category', key: 'cate', align: 'center' },
    { title: 'Amount', key: 'amount', align: 'end' },
    { title: 'Status', key: 'status', align: 'center' },
    { title: 'Start Contact Date', key: 'start_contact_date', align: 'center' },
    // { title: 'Start Implement Date', key: 'start_implement_date', align: 'center' },
    // { title: 'Finish Date', key: 'finish_date', align: 'center' },
    // { title: 'Last Update Date', key: 'last_update_date', align: 'center' },
    // { title: 'Receive Payment Date', key: 'receive_payment_date', align: 'center' },
    // { title: 'Tag', key: 'tag', align: 'center' },
    // { title: 'Remark', key: 'reark', align: 'start' },
]

let serverItems = []
let loading = true
let totalItems= 0

const loadItems = ({ page, itemsPerPage, sortBy }) => {
    loading = true
    FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        serverItems = items
        totalItems = total
        loading = false
        console.log(serverItems);
        console.log(loading);
    })
}
</script>