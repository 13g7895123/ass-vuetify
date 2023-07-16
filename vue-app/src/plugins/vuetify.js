// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components:{
    VDataTable
  },
  theme: {
    themes: {
      dark: {
        backgroung: '#202124'
        // backgroung: '#F4F5F9'
      }
    }
  }
})
