<template>
    <v-navigation-drawer
        rail
        expand-on-hover
        color="#2784FF"
      >
        <v-list>
          <v-list-item
            prepend-avatar="./src/assets/tech_logo.png"
            title="Assistant"
            base-color="white"
          ></v-list-item>
        </v-list>

        <v-divider class="mx-3"></v-divider>
         
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
            base-color="white"
          >
          </v-list-item> 
        </v-list>
        <!-- 登出可以放在這裡 -->
        <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;">
        </div>
      </v-navigation-drawer>

</template>
<script setup>
// const drawer = true
// const rail = true

const selectedItem = 0
const drawer = true
const mini =  false
const expandOnHover = true
const items =  [
    {icon: 'mdi-home-city', text: 'Home'},
    {icon: 'mdi-account', text: 'account'},
    {icon: 'mdi-account-group-outline', text: 'test'},
    {icon: 'mdi-cash-plus', text: 'bonus', link: '/bonus'},
    {icon: 'mdi-cash', text: 'money', link: '/money',
      // subLinks: [
      //   {text: 'bonus', link: '/money/bonus'}
      // ]
    },
    {icon: 'mdi-ab-testing', text: 'test', link: '/test'},
]
</script>