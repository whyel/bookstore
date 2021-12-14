<template>
    <div class="header">
        <img src="@/assets/logo.png">
        <HeaderSearch /> <!-- 搜索框组件 -->
        <HeaderCart /> <!-- 购物车组件 -->
        <span v-if="!user">你好，请<router-link to="/login">登录</router-link>免费<router-link to="/register">注册</router-link></span>
        <span v-else>欢 迎 您，{{ user.username }}, <a href="javascript:;" @click="logout">退出登录</a></span>
    </div>
</template>

<style scoped>
.header {
    width: 100%;
    /*position: relative;*/
}
.header img{
    width: 200px;
    height: 60px;
    margin: auto;
}
.header span{
  margin-left: 20px;
}
.header a{
  text-decoration: none;
  color: red;
}
</style>

<script lang="ts" type="module">
import HeaderSearch from './HeaderSearch.vue'
import HeaderCart from './HeaderCart.vue'
import { defineComponent } from 'vue'
import { useGetter } from './useGetters'
import { useMutations } from './useMutations'

export default defineComponent({
    components: {
        HeaderSearch,
        HeaderCart
    },
    setup () {
        // const store = useStore()
        /*
        function logout (): void {
            store.commit('user/deleteUser')
        }
        */

        const computeds = useGetter('user', ['user'])

        // 将this.logout()映射为this.$store.commit('user/deleteUser)
        const mutations = useMutations('user', { logout: 'deleteUser' })

        return {
            ...computeds,
            ...mutations
        }
    }
})
</script>
