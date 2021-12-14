<template>
    <div>
        <div v-for="book in list" :key="book.id">
            <book-list-item :item="book">
        </div>
    </div>
</template>

<script lang="ts" type="module">
import { defineComponent } from 'vue'
import BookListItem from './BookListItem.vue'

export default defineComponent({
    name: 'BookList',
    props: {
        list: {
            type: Array,
            default: () => { return null }
        }
    },
    components: {
        BookListItem
    }
})
</script>
