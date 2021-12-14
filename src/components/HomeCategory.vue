<template>
    <div class="category">
        <h3>图书分类</h3>
        <div v-for="category in categories" :key="category.id">
            <h5>{{ category.name }}</h5>
            <router-link v-for="child in category.children" :key="child.id" :to="'/category/' + child.id">{{ child.name }}</router-link>
        </div>
    </div>
</template>

<style scoped>
.category {
  margin-left: 60px;
  margin-top: 10px;
  float: left;

  border: solid 1px #ccc;
  width: 15%;
}
.category div {
  margin-bottom: 10px;
}
.category a {
  padding: 0 5px 0 5px;
}
</style>

<script lang="ts" type="module">
import { defineComponent, ref } from 'vue'

// 服务器返回的数据定义
type CategoryType = {
    id: number, name: string, root: boolean, parentId: number,
    children: CategoryType[]
}

export default defineComponent({
    name: 'HomeCategory',
/*
    data () {
        return {
            categories: []
        }
    },
*/
    setup () {
        const cc: CategoryType[] = []
        const categories = ref(cc) // 原始值用ref，如果是对象，可以用reactive

        return {
            categories
        }
    },
    created () {
        this.axios.get('/category').then(response => {
            if (response.status === 200) {
                this.categories = response.data
            }
        }).catch(error => console.log(error))
    }
})
</script>
