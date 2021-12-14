<template>
  <div class="headerSearch">
    <input type="search" v-model.trim="keyword">
    <button @click="search">搜索</button>
  </div>
</template>

<style scoped>
.headerSearch {
    display: inline-block;
    position: relative;
}
.headerSearch input {
    width: 400px;
    height: 30px;
}

.headerSearch button{
    position: absolute;
    right: 0px;
    top: 0;
    width: 60px;
    height: 30px;
    margin: 0;
    border: none;
    color: white;
    background-color: red;
    cursor: pointer;
}
</style>

<script lang="ts" type="module">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    name: 'HeaderSearch', // Header组件在所有页面中都存在，搜索框组件暂时只在Header组件中使用，所以以父组件为前缀命名

    setup () {
        const router = useRouter()
        const route = useRoute()
        const keyword = ''

        function search () : void {
            if (keyword !== route.query.wd) {
                router.push({ path: '/search', query: { wd: keyword } })
            }
        }

        return {
            keyword,
            search
        }
    }
})
</script>
