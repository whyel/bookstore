<template>
    <div class="home">
        <HomeCategory />
        <HomeScrollPic />
        <HomeBooksHot />
        <BooksNew />
    </div>
</template>

<script lang="ts" type="module">
import { defineComponent } from 'vue'
import HomeCategory from '@/components/HomeCategory.vue'
import HomeScrollPic from '@/components/HomeScrollPic.vue'
import HomeBooksHot from '@/components/HomeBooksHot.vue'
import BooksNew from '@/components/BooksNew.vue'

export default defineComponent({
    name: 'home',

    components: {
        HomeCategory,
        HomeScrollPic,
        HomeBooksHot,
        BooksNew
    }
})
</script>
