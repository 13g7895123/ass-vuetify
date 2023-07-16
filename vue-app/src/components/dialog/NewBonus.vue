<template>
    <v-dialog
      v-model="props.showDialog"
      width="auto"
    >
      <v-card max-width="500" width="500">
        <v-card-title>New Bonus</v-card-title>
        <NewBonus />
        <v-card-actions>
          <v-btn color="primary" block @click="emits('closeDialog')">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script setup>
import NewBonus from '../form/NewBonus.vue';

const props = defineProps({
    showDialog: Boolean
})

const emits = defineEmits(['closeDialog'])

</script>