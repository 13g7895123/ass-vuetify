<template>
    <v-dialog
      v-model="props.showDialog"
      width="auto"
    >
        <Test />
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="emits('closeDialog')">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script setup>
import Test from '../../views/Test.vue'

const props = defineProps({
    showDialog: Boolean
})

const emits = defineEmits(['closeDialog'])

</script>