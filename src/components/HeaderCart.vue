<template>
  <div class="headerCart">
      <a href="javascript:;" @click.prevent="handleCart">
          <span>购物车{{ itemsCount }}</span>
      </a>
  </div>
</template>

<style scoped>
.headerCart {
    display: inline-block;
    position: relative;
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    margin-left: 20px;
    background-color:red;
    vertical-align: middle;
}

.headerCart a {
    text-decoration: none;
    color: white;
}
.headerCart a > span{
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: 5px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useGetter } from './useGetters'

export default defineComponent({
    name: 'HeaderCart',

    setup () {
        function handleCart (): void {
            useRouter().push('/cart')
        }

        // 将this.cartItemsCount映射为this.$store.getters['cart/itemsCount']
        // const computedStates = useGetter('carts', ['itemsCount'])
        const computedStates = useGetter('cart', { cartItemsCount: 'itemsCount' })

        return {
            handleCart,
            ...computedStates
        }
    }
})
</script>
