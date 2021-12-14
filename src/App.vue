<template>
  <Header></Header>
  <Menus></Menus>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
}

</style>

<script type="module">
import Header from '@/components/Header.vue'
import Menus from '@/components/Menus.vue'
import { factPrice, currency } from './utils/util'

export default {
    name: 'App',
    components: {
      Header,
      Menus
    },

    provide () {
      return {
        factPrice,
        currency
      }
    }
}
</script>
