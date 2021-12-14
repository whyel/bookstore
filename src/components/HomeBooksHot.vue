<template>
    <div class="bookRecommend">
        <h3>热门推荐</h3>
        <ul>
            <li v-for="book in books" :key="book.id">
                <router-link :to="'/book/' + book.id">
                    {{ book.title }}
                    <span>{{ currency(factPrice(book.price, book.discount)) }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.bookRecommend {
    width: 18%;
    height: 220px;
    border: solid 1px #ccc;
    float: left;
    margin-top: 10px;
}

.bookRecommend li {
  list-style: none;
  text-align: left;
  padding-left: 0;
  margin-left: -20px;
}
</style>

<script lang="ts" type="module">
import { defineComponent, ref } from 'vue'

type HotBookType = {
     id: number, title: string, author: string, price: number, discount: number, imgUrl: string, bigImgURL: string,
     bookConcern: null, publishDate: null, brief: null
}

export default defineComponent({
    name: 'HomeBooksHot',

    setup () {
        const b: HotBookType[] = []
        const books = ref(b)

        return {
            books
        }
    },

    inject: ['factPrice', 'currency'],

    created () {
        this.axios.get('/book/hot').then(response => {
            if (response.status === 200) {
                this.books = response.data
            }
        }).catch(error => console.log(error))
    }
})
</script>
