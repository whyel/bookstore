<template>
    <div class="bookListItem">
        <div>
            <img :src="item.bigImgURL">
        </div>
        <p class="title">
            <router-link :to="{name: 'book', params: {id: item.id}}" target="_blank">{{ item.title }}</router-link>
        </p>
        <p>
            <span class="factPrice">
                {{ currency(factPrice(item.price, item.discount)) }}
            </span>
            <span>
                定价：<i class="price">{{ currency(item.price) }}</i>
            </span>
        </p>
        <p>
            <span>{{ item.author }}</span> /
            <span>{{ item.publishDate }}</span> /
            <span>{{ item.bookConcern }}</span>
        </p>
        <p>
            {{ item.brief }}
        </p>
        <p>
            <button class="addCartButton" @click="addCartItem(item)">加入购物车</button>
        </p>
    </div>
</template>

<script lang="ts" type="module">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useActions } from './useActions'

type BookType = {
     id: number, title: string, author: string, price: number, discount: number, imgUrl: string, bigImgURL: string,
     bookConcern: null, publishDate: null, brief: null
}

export default defineComponent({
    name: 'BookListItem',
    props: {
        item: {
            type: Object,
            default: () => { return null }
        }
    },
    setup () {
        const actions = useActions('cart', { addCart: 'addProductToCart' })
        function factPrice (price: number, discount: number): number {
            return price * discount
        }

        function addCartItem (item: BookType): void {
            const quantity = 1
            const newItem = {
                ...item,
                price: factPrice(item.price, item.discount),
                quantity
            }
            actions.addCart(newItem)
            useRouter().push('/cart')
        }

        return {
            factPrice,
            addCartItem,
            ...actions
        }
    }
})
</script>
