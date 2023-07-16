<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        color="white"
       
        mini-variant
        mini-variant-width="80"
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color=""
          size="40"
        >
        <v-icon color="#49D9A0" large>fab fa-atlassian</v-icon>
        </v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>
         
        <!-- <v-list-group
          v-for = "item in items"
          :key = 'item.text'
        >
          <v-list-item slot='activator' :to="item.link">
            <template>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group> -->
        <v-list density="compact" nav flat class="mt-5" > 
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            active-class="border"
            class=""
            :ripple="false"
            rounded="xl"
            :prepend-icon="item.icon"
            :title = 'item.text'
            :to="item.link"
            link
          >
          </v-list-item> 
        </v-list>
        <div style="position: absolute; bottom: 20px;
        margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;">
                <v-btn icon :ripple="false">
         <v-badge bordered overlap color="red" dot>
        
        <v-icon>far fa-bell</v-icon>
     
         </v-badge>
          </v-btn><br>
           <v-avatar size="30"  >
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>

        </div>
      </v-navigation-drawer>

</template>
<script setup>
// const drawer = true
// const rail = true

const selectedItem = 0
const drawer = true
const items =  [
    {icon: 'mdi-home-city', text: 'Home'},
    {icon: 'mdi-account', text: 'account'},
    {icon: 'mdi-account-group-outline', text: 'test'},
    // {icon: 'mdi-cash-plus', text: 'bonus', link: '/bonus'},
    {
      icon: 'mdi-cash',
      text: 'money', 
      link: '/money',
      subLinks: [
        {text: 'bonus', link: '/money/bonus'}
      ]
    },
]
</script>