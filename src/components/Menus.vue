<template>
    <div class="menus">
        <ul>
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/newBooks">新书</router-link>
            </li>
            <li>
                <a href="javascript:;">特价书</a>
            </li>
            <li>
                <a href="javascript:;">教材</a>
            </li>
            <li>
                <a href="javascript:;">数字资源</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.menus {
  position: relative;
  width: 100%;
}
a {
  text-decoration: none;
  display: block;
  color: #fff;
  height: 40px;
  line-height: 40px;
  border: solid 1px #fff;
  border-width: 1px 1px 0 0;
  background: #255f9e;
}

li {
  width: 20%;
  list-style-type: none;
  float: left;
  text-align: center;
  position: relative;
}
li a:hover {
  color: #fff;
  background: #ffb100;
}
</style>

<script lang="ts" type="module">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Menus'
})
</script>
