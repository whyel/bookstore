<template>
    <div class="booksNew">
        <h3>新书上市</h3>
        <div class="book" v-for="book in books" :key="book.id">
            <figure>
                <router-link :to="'/book/' + book.id">
                    <img :src="book.imgUrl">
                    <figcaption>{{ book.title }}</figcaption>
                </router-link>
            </figure>
            <p>
                {{ currency(factPrice(book.price, book.discount)) }}
                <span>{{ currency(book.price) }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.booksNew{
  float: left;
}
.booksNew .book{
  display: inline-block;
  width: 19%;
  border-right: solid 1px #ccc;
  margin-left: 10px;
}
.booksNew a:hover{
  color: red;
}
.booksNew img {
  width: 120px;
  height: 100px
}
.booksNew span{
  color: #cdcdcd;
  text-decoration: line-through;
}
</style>

<script lang="ts" type="module">
import { defineComponent, ref } from 'vue'

type BookType = {
     id: number, title: string, author: string, price: number, discount: number, imgUrl: string, bigImgURL: string,
     bookConcern: null, publishDate: null, brief: null
}

export default defineComponent({
    name: '',
    props: [''],
    setup () {
        const loading = ref(false)
        const b: BookType[] = []
        const books = ref(b) // 原始值用ref，如果是对象，可以用reactive

        return {
            loading,
            books
        }
    },

    inject: ['factPrice', 'currency'],

    created () {
        this.axios.get('/book/new').then(response => {
            if (response.status === 200) {
                this.loading = false
                this.books = response.data
            }
        }).catch(error => console.log(error))
    }
})
</script>
